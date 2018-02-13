'use strict';

module.exports.hello = (event, context, callback) => {

  console.log(event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.another = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      LAMBDA_ARN: process.env.LAMBDA_ARN,
      SERVICE: process.env.SERVICE,
      IMPORTED: process.env.IMPORTED,
      input: event,
    }),
  };

  callback(null, response);

}
