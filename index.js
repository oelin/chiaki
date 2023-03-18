import https from 'node:https'
import flush from './flush.js'


export default async options =>
        new Promise(resolve =>
                https.request(options, response =>
			flush(response, body =>
                                resolve({
                                        status: response.statusCode,
                                        headers: response.headers,
                                        body,
                                })
                        )
                )
		.end(options.body)
        )
