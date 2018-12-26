# Netlify Functions

## Past the Netlify Documentation

All `functions` act like AWS Lambda Functions, residing in our project's root directory. The point of using these is to prevent any API tokens and App IDs from being seen by the user while seamlessly integrating with Netlify's Identity service.

1. Install `netlify-lambda` via yarn or NPM. This is what we'll use to test our functions and build them.
2. Determine where your source functions directory will be. For us, it's `./functions`.
3. Open/create a `netlify.toml` file in your projects root directory and insert the line `Functions = "./dir/for/compiled/functions"` under the `build` section. It should look something like this:

```toml
# netlify.toml
[build]
  Functions = "./cache/functions"
```

_NOTE_: this directory **MUST** be different from the source directory. If you have a `.netlify` directory, it's recommended to put it in there.

4. Create your functions! Each exports a function similar to an express route handler, like so:

```javascript
// hello-world.js
import dotenv from 'dotenv' // since lambda functions aren't guaranteed to stay in memory and run singleton

// we need to export a function named "handler"
export const handler = (event, context, callback) => {
  // the request object
  const { httpMethod, queryStringParameters, path, body, headers } = event
  // the current session/context
  // Netlify Identity will auto-set the user prop for us if they're logged in
  const { identity, user } = context.clientContext

  // this function follows the NodeJS style of callback
  callback(
    // any errors thrown go here
    null,
    // the return object goes here
    {
      statusCode: 200,
      body: JSON.stringify({ hello: world }),
      headers: {},
      isBase64Encoded: false,
    }
  )
}
```

## Accessing the Functions

If in development, run `netlify-lambda serve "./my-non-compiled-functions"` to get a mock lambda server running. Depending on the environment is where your lambda functions will be.

- In dev, they'll be at `http://localhost:9000/{FUNCTION_NAME}`
- In prod, they'll be at `http://yourawesomesite.com/.netlify/functions/{FUNCTION_NAME}`

## Event Triggered Functions

[Read more here](https://www.netlify.com/docs/functions/#event-triggered-functions).
