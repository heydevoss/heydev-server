import UserType from './UserType';
import resolvers from './resolvers';

const me = {
  type: UserType,
  resolve: resolvers.Query.me,
}

export default {
  me,
}