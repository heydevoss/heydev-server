export const generateRandomState = (length) => {
  let state = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    + 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    state += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return state;
};