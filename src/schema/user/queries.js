import UserType from './types';
import resolvers from './resolvers';

const me = {
  type: UserType,
  resolve: resolvers.Query.me,
  description: 'The currently authenticated user.',
};

export default {
  me,
};
