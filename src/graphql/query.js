import { gql } from "@apollo/client";

export const GET_STUDENT_DETAILS = gql`
query GetStudentList {
    getStudentList {
        message,
        statusCode,
        data {Student_Name, Student_Roll} 
    }
}`;

export const GET_TESTING_RESPONSE = gql`
query GetTestingResponse {
    getTestingResponse {
        Message,
        Status_Code,
        Data
    }
}`;
