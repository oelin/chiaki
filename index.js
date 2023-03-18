import https from 'node:https'


export default async options =>
        new Promise(resolve =>
                https.request(options, response =>
                        response.on('data', body =>
                                resolve({
                                        status: response.statusCode,
                                        headers: response.headers,
                                        body,
                                })
                        )
                )
		.end(options.body)
        )
