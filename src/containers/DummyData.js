import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_TESTING_RESPONSE } from '../graphql/query';

export const DummyData = () => {
  const { loading } = useQuery(GET_TESTING_RESPONSE, {
    onCompleted(data) {
      console.log("API")
    },
  });
  if (loading) return <p>Loading data...</p>
  return (
      <>
        <div className='m-4'>
          <span>Dashboard.</span>
        </div>  
      </>
  )
}
