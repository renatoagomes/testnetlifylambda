async function hello() {
  return Promise.resolve("Robôs não entendem política");
}

exports.handler = async function(event, context) {
  try {
    const body = await hello();
    return { statusCode: 200, body }
  } catch (err) {
    return { statusCode: 500, err.toString() }
  }
}
