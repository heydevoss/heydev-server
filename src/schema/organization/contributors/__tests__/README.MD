# __tests__

## Running

To be able to use the tests correctly, you will need to define a github token that will be used for the tests of the requisitions, it is set in `.env`, check the `.env.example` in the project root, once you have defined the same execute the command:

`npm run test`

*Note 1: Currently the expected Result is set for our organizations, i.e., "panelinhadees" however, if you use to want use another, so in order for it to work you should replace its information with your.*

*Note 2: If any of the users that shows off at expectedResults change some information about their profiles,
the tests will fail.*

## Understanding the structure

```
├── __tests__
│   ├── api.js
│   ├── expectedResults.js
│   ├── README.MD
│   └── contributors.spec.js
```

`/api.js`: contains all operations that client can do.  
`/expectedResults.js`: expected results for operations.  
`/contributors.spec.js`: describe all test cases for this entity.  