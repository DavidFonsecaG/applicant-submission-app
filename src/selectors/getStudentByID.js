import { getStudentsWithApps } from './getStudentsWithApps';

export const getStudentByID = async (studentId) => {
    try {
        const studentsWithApps = await getStudentsWithApps();
        return studentsWithApps.find(student => student.uid === studentId);
    } catch (error) {
        console.error('Error fetching students by ID:', error);
        return null;
    }
};