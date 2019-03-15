import gql from "graphql-tag";

export const ALL_ENTRIES_QUERY = gql`
  query ALL_ENTRIES_QUERY($skip: Int = 0, $first: Int = 10) {
    entries(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      body
    },
    entriesConnection {
      aggregate {
        count
      }
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
    }
  }
`;

export default {
  ALL_ENTRIES_QUERY,
  CURRENT_USER_QUERY,
}