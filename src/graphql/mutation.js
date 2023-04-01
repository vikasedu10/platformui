import { gql } from "@apollo/client";

export const UPDATE_CLUSTER_PROVISION = gql`
mutation updateClusterProvision($provisionId: Int!, $clusterName: String!, $nodeCount: Int!) {
    updateClusterProvision(provisionId:$provisionId, clusterName:$clusterName, nodeCount:$nodeCount) {
        statusCode
        message
        data {provisionId, clusterName, nodeCount}
    }
}`;

// export const CREATE_NEW_CLUSTER = gql`
// mutation CreateNewCluster($cluster_name:String!, $node_count:Int!) {
//     createNewCluster(cluster_name:$cluster_name, node_count:$node_count) {
//         message,
//         statusCode,
//         data {id, cluster_name, node_count}
//     }
// }`;

// export const DELETE_CLUSTER_ID = gql`
// mutation DeleteStudentByID($kubernetes_provision_id:Int) {
//     deleteClusterById(kubernetes_provision_id:$kubernetes_provision_id) {
//         message,
//         statusCode,
//         data {id, name, age, address}
//     }
// }`;
