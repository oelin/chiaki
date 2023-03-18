import https from 'node:https'
import unstreamify from 'unstreamify'


export default async options =>
        new Promise(resolve =>
                https.request(options, response =>
			unstreamify(response, body =>
                                resolve({
                                        status: response.statusCode,
                                        headers: response.headers,
                                        body,
                                })
                        )
                )
		.end(options.body)
        )
