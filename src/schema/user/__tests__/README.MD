# __tests__

## Running

To be able to use the tests correctly, you will need to define a github token that will be used for the tests of the requisitions, it is set in `.env`, check the `.env.example` in the project root, once you have defined the same execute the command:

`npm run test`

*Note: Currently the expectedResult is set for the user of our Fanny programmer, just as an example, however, if you use your token, it will be another user logged in, so in order for it to work you should replace its information with your.*

## Understanding the structure

```
├── __tests__
│   ├── api.js
│   ├── expectedResults.js
│   ├── README.MD
│   └── user.spec.js
```
`/api.js`: contains all operations that client can do.
`/expectedResults.js`: expected results for operations.
`/user.spec.js`: describe all test cases for this entity