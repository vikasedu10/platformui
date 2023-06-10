import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GET_STUDENT_DETAILS } from '../graphql/query';

export const StudentDetail = () => {
  const location = useLocation();
  const clusterId = location.state.clusterId;
  const [clusterData, setClusterData] = useState()
  const { loading } = useQuery(GET_STUDENT_DETAILS, {
    variables: { provisionId: clusterId },
    onCompleted(data) {
      setClusterData(data);
    },
  });

  if (loading) return <div className='m-4'>Loading</div>
  return (
    <div className='my-3'>
      <div className='inner-body'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>
            </div>
            <div className='col-md-5'>
              <div className='d-flex justify-content-start'>
                <div className='mx-2'>
                  <i className="fa-solid fa-circle-chevron-left"></i>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript(void)">Student List</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Student</li>
                  </ol>
                </nav>
              </div>
              <h6 className='my-3'>Student Name - {clusterId}</h6>
              <div className='my-3'>
                <p>Cluster Details are as below.</p>
              </div>
              {clusterData &&
                <div className=''>
                  <div className="mb-3 row">
                    <label for="clusterId" className="col-sm-2 col-form-label">Provision ID</label>
                    <div className="col-sm-10">
                      <input type="text" readonly className="form-control-plaintext" id="clusterId" value={clusterData.getClusterDetail.provisionId} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="clusterName" className="col-sm-2 col-form-label">Cluster Name</label>
                    <div className="col-sm-10">
                      <input type="text" readonly className="form-control-plaintext" id="clusterName" value={clusterData.clusterName} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="clusterName" className="col-sm-2 col-form-label">Node Count</label>
                    <div className="col-sm-10">
                      <input type="text" readonly className="form-control-plaintext" id="clusterName" value={clusterData.nodeCount} />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
