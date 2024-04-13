import { types } from "../types/types"
import { auth, googleAuthProvider, db } from "../services/firebase";
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // loader on
        dispatch( startLoading() )
        // firebase authentication
        auth.signInWithEmailAndPassword(email, password)
            .then( ({ user }) => {
                db.collection('users').doc(user.uid).get()
                .then((doc) => {
                    if(doc.exists) {
                            console.log(user)
                            const userRole = doc.data().role
                            // save uid and name in redux store
                            dispatch( login( user.uid, user.displayName, userRole ) );
                            // loader off
                            dispatch( finishLoading() );
                        } else {
                            console.log("do not exits ")
                            dispatch( finishLoading() );
                        }
                    }).catch(e => {
                        console.error("Error getting user document:", e)
                        dispatch( finishLoading() );
                    });
            }).catch(e => {
                dispatch( finishLoading() );
            });
    }
}

export const startRegisterEmailPassword = (email, password, name, role='Student') => {
    return (dispatch) => {
        // firebase authentication
        auth.createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) =>{
                // save user name to Firebase
                await user.updateProfile({displayName: name});
                // save user data to Firestore
                saveUserData(user.uid, user.displayName, user.email, role);
                // save uid and name in redux store
                dispatch( login( user.uid, user.displayName, role ) );
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        auth.signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                // const { _delegate } = user
                // console.log( user.uid, user.displayName );
                dispatch( login( user.uid, user.displayName ) );
            })
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await auth.signOut();

        dispatch( logout() );
    }
}

export const login = (id, username, role) => {
    return({
        type: types.login,
        payload: {
            id,
            username,
            role,
        }
    })
}

export const logout = () => ({
    type: types.logout
})

export const saveUserData = (id, username, email, role, src='', advisor='', applications=[]) => {

    const userRef = db.collection('users').doc(id);

    userRef.set({
        id,
        username,
        email,
        role,
        src
    })
    .then( () => {
        if(role === 'Student'){
            db.collection('students').doc(id).set({
                id,
                name: username,
                user: userRef,
                advisor,
                applications             
            });
        };
    }).catch(e => {
        console.log(e);
    });
}

