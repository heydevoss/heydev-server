# server
An Apollo server application that provides GitHub data and authentication, by consuming data from [Github GraphQL API](https://developer.github.com/v4/).

## Requirements
Make sure you have **Node.js** and **npm** installed in your machine. If you're using Ubuntu, you can follow [this tutorial](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/).

## Running the server
This section contains information about what you need to do to run this server locally.

First of all, you'll need to **clone** our repository by executing:

```
git clone https://github.com/panelinhadees/server
cd server
```

Inside `/server`, you'll need to **install** the dependencies used in this project, by executing:

```
npm install
```

Finally, you'll be able to **run** our application, by executing:

```
npm start
```

Now you can access our application locally and it's listening on `http://localhost:5000`.

You can access the endpoint `http://localhost:5000/graphql` to access graphql playground.

## Docs

Some useful documentations you can use to learn about the tecnologies used on this server development:
- [Github GraphQL API](https://developer.github.com/v4/)
- [GraphQL](https://graphql.org/code/)