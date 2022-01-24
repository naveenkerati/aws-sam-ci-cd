const aws = require("aws-sdk")

exports.handler =  async(event, context) => {
  try {
      // const ret = await axios(url);
      response = {
          'statusCode': 200,
          'body': JSON.stringify({
              message: 'hello world test',
              // location: ret.data.trim()
          })
      }
  } catch (err) {
      console.log(err);
      return err;
  }

  return response
};