import { gql } from "@apollo/client"

export default {
    Queries: {},
    Mutations: { 
        createUsername: gql`
        mutation createUsername($username: String!){
            createUsername(username: $username){
                success
                error
            }
        }
        `,
    },
    Subscriptions: {}

}