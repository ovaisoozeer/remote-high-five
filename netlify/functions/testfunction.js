exports.handler = async event => {
    const subject = event.queryStringParameters.name || process.env.OVAISTEST
    return {
      statusCode: 200,
      body: `Hello ${subject}!`,
    }
  }