import { gql } from '@apollo/client'

export const createUser = gql`
  mutation CREATE_USER($data: UserCreateInput) {
    createUser(data: $data) {
      id
      name
      email
    }
  }
`

export const authenticate = gql`
  mutation AUTHENTICATE($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        name
      }
    }
  }
`
