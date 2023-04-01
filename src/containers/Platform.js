import React from "react"
import { useQuery } from '@apollo/client';
import { Dashboard } from "../components/Dashboard"
import { SidenavParent } from "./SidenavParent"
import { GET_CLUSTERS_DETAILS } from '../graphql/query';
import { NavLink } from "react-router-dom";
export const Platform = () => {
  const { loading, refetch, error, data } = useQuery(GET_CLUSTERS_DETAILS, { pollInterval: 200 })

  if (error)
    return <p>Error fetching cluster details</p>
  return (

    <div className='m-4'>
      Platform
    </div>

  )
}
