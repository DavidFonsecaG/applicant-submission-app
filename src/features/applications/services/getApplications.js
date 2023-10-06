import { db } from '../../../services/firebase';

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
            src: userData.src,
          };
        }
      }

    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching ref document:', error);
    return null;
  }
};

export const getApplications = async () => {
  const snapshot = await db.collection('applications').get();
  
  const newData = [];
  const promises = [];

  snapshot.forEach(async (doc) => {
    const docData = doc.data();
    const ref = docData.student;
    
    if (ref) {
      const refPromise = fetchStudentData(ref);
      promises.push(refPromise.then(studentData => {
        if (studentData !== null) {
          newData.push({
            id: docData.id,
            program: docData.program,
            status: docData.status,
            term: docData.term,
            type: docData.type,
            student: studentData
          });
        }
      }));
    }
  });

  await Promise.all(promises);
  
  return newData;
};
