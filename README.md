# Chiaki

Chiaki is a tiny (160 byte) HTTPs client for NodeJS. It provides a modern asynchronous interface to NodeJS's default `https.request` method.

```js
import chiaki from 'chiaki'

await chiaki('https://ifconfig.io')
	.then(response => response.body)
	.then(response => JSON.parse(response))
```


## Installation

```sh
npm i chiaki
```


## Usage

Chiaki can be used similarly to JavaScript's Fetch API. For example, to retrieve the HTML content of a web page:

```js
// Using Fetch.

await fetch('https://example.com')
	.then(response => response.text())
```

```js
// Using Chiaki.

await chiaki('https://example.com')
	.then(response => response.body.toString()) 
```

You can also provide additional HTTPs options. For example, as part of a POST request:

```js
// Using Fetch.

await fetch('https://example.com/login', {
	method: 'POST',
	headers: {
		'User-Agent': 'foo',
	},
	body: JSON.stringify({
		username: 'bar',
		password: 'baz',
	}),
})
```

```js
// Using Chiaki.

await chiaki({
	hostname: 'https://example.com',
	path: 'login',
	headers: {
		'User-Agent': 'foo',
	},
	body: JSON.stringify({
		username: 'bar',
		password: 'baz',
	}),
})
```


## API

#### chiaki.chiaki(options)

Performs an asynchronous HTTPs request. `options` can be a string, `URL` or [HTTPs options object](https://nodejs.org/api/http.html#httprequesturl-options-callback). Returns a `Promise` which resolves to a `Response` object. The response contains the following properties:

* `status` - the response status code.
* `headers` - the response headers as a plain JavaScript object.
* `body` - the response content as a `Buffer`. Convert to a string using `body.toString()` or to JSON using `JSON.parse(body)`.
