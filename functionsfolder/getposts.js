const getPosts = async () => {
  const res = await fetch("/api/posts")
  const posts = await res.json();
  return posts
}

exports.handler = async function(event, context) {
  try {
    const body = await getPosts();
    return { statusCode: 200, body }
  } catch (err) {
    return { statusCode: 500, err.toString() }
  }
}
