# Super Hero GraphQL :running:

> I've created this project to learn more about building GraphQL APIs, if you have a suggestion 
> please open an issue or Pull Request to this repository

The project is a monorepo that contains two separated projects (packages), the first one it's a GraphQL API that uses the [Super Hero API](https://superheroapi.com/) to return the data. The second one it's a frontend that shows up a search bar and finds an Super Hero based on the value.

## Running the project

First, you will need to install the [PNPM](https://pnpm.js.org/) to run the packages inside the project and install all dependencies, to install just run the command below:
```
npm install -g pnpm
pnpm recursive install
```

To run the frontend, you need to run the command below:

```
pnpm run start --filter @superhero/web
```

And to run the server, just run the next command:

```
pnpm run dev --filter @superhero/server
```

## License

[MIT](./LICENSE)