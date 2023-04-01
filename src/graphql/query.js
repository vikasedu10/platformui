import { gql } from "@apollo/client";

export const GET_STUDENT_DETAILS = gql`
query GetStudentList {
    getStudentList {
        message,
        statusCode,
        data {Student_Name, Student_Roll} 
    }
}`;
