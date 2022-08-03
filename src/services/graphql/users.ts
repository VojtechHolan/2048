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
