import UserType from './types';
import resolvers from './resolvers';

const me = {
  type: UserType,
  resolve: resolvers.Query.me,
};

export default {
  me,
};
