const meQuery = JSON.stringify({
  query: `{
    viewer {
      id
      login
      repositories {
        totalCount
      }
    }
  }`
});

export default {
  meQuery
}