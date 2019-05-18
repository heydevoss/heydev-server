import gql from 'graphql-tag';

const me = gql`
  query {
    me {
      id
      login
      totalRepos
    }
  }
`;

export default me;
