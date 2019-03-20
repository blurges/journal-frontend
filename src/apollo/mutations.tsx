import gql from "graphql-tag";

export const CREATE_ENTRY_MUTATION = gql`
  mutation CREATE_ENTRY_MUTATION(
    $tempId: String!
    $title: String!
    $body: String!
  ) {
    createEntry(
      tempId: $tempId
      title: $title
      body: $body
    ) {
      id
    }
  }
`;

export const DELETE_ENTRY_MUTATION = gql`
  mutation DELETE_ENTRY_MUTATION($id: ID!) {
    deleteEntry(id: $id) {
      id
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;


export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

export const UPDATE_ENTRY_MUTATION = gql`
  mutation UPDATE_ENTRY_MUTATION(
    $id: ID!,
    $title: String!,
    $body: String!
  ) {
    updateEntry(
      id: $id,
      title: $title,
      body: $body
    ) {
      id
      title
      body
    }
  }
`;

export default {
  CREATE_ENTRY_MUTATION,
  DELETE_ENTRY_MUTATION,
  UPDATE_ENTRY_MUTATION,
  REQUEST_RESET_MUTATION,
  RESET_MUTATION,
  SIGN_IN_MUTATION,
  SIGN_OUT_MUTATION,
  SIGN_UP_MUTATION,
}