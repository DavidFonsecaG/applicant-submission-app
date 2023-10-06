import { db, storage } from '../../../services/firebase';

const fetchStudentData = async (ref) => {
  try {
    const refDoc = await ref.get();
    if (refDoc.exists) {
      const refData = refDoc.data();
      const userRef = refData.user;

      if (userRef) {
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const userData = userDoc.data();

          return {
            id: refData.id,
            name: refData.name,
            email: userData.email,
            src: userData.src,
          };
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching ref document:', error);
    return null;
  }
};

const fetchDocumentData = async (docRef) => {
  try {
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      const docData = docSnapshot.data();
      const fileURL = docData.fileURL;
      const fileRef = storage.ref().child(fileURL);
      const downloadUrl = await fileRef.getDownloadURL();
      return { ...docData, downloadUrl };
    }
    return null;
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
};

export const GetAppWithDocuments = async (appId) => {

  try {
    const appRef = db.collection('applications').doc(appId);
    const snapshot = await appRef.get();

    if (!snapshot.exists) {
      throw new Error('App not found');
    }

    const appData = snapshot.data();
    const studentData = await fetchStudentData(appData.student);

    const documentRefs = appData.documents || [];
    const documentSnapshots = await Promise.all(documentRefs.map(fetchDocumentData));

    const documents = await Promise.all(documentSnapshots.filter(Boolean));

    return {
      application: {
        id: appData.id,
        program: appData.program,
        status: appData.status,
        term: appData.term,
        type: appData.type,
        student: studentData,
      },
      documents: documents,
    };
    
  } catch (error) {
    console.error('Error fetching application data:', error);
    throw error;
  }
};