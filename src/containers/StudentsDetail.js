import React from "react"
import { useQuery } from '@apollo/client';
import { GET_STUDENT_DETAILS, GET_TESTING_RESPONSE } from '../graphql/query';
import { ShowPopup } from "./ShowPopup";
export const StudentsDetail = () => {
  const { loading:studentDetailsLoading, error, data } = useQuery(GET_STUDENT_DETAILS, {
    onCompleted(data) {
      console.log("Data: ", data);
    }
  })
  const { loading:testResponseLoading } = useQuery(GET_TESTING_RESPONSE, {
    onCompleted(data) {
      console.log("Data", data);
    },
  });
  const popupButtonType = () => <span class="border-0" data-bs-toggle="modal" data-bs-target="#student_delete">
    <i className="fa-solid mx-1 fa-trash"></i>
  </span>
  const handleClusterDelete = () => {
  }
  if (studentDetailsLoading) return <p>studentDetailsLoading</p>
  if (testResponseLoading) return <p>testResponseLoading</p>
  if (error)
    return <div className="container mt-4">
      <div className='col-6'>
        <p className="m-4">Error fetching cluster details</p>
      </div>
    </div>
  return (
    <div className="container">
      <br />
      <br />
      <div className='col-6'>
        {studentDetailsLoading ?
          <div className="spinner-border d-flex spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          <div className="card">
            <div className="card-body provision-table">
              <table className="table table-hover table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#Student ID</th>
                    <th scope="col">Roll Number</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='table-group-divider'>
                  {data && data.getStudentList && data.getStudentList.data.map((student, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{student.student_roll}</td>
                        <td>{student.student_name}</td>
                        <td className='ms-auto'>
                          <div className='d-flex justify-content-start'>
                            <i className="fa-solid mx-1 fa-pen-to-squre"></i>
                            <ShowPopup to={`/student`} handleRightButtonClick={handleClusterDelete} popupButtonType={popupButtonType()} title={`Are you sure you want to delete - ${student.student_name}`} rightButton="Delete student" id="student_delete" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>}
      </div></div>

  )
}
