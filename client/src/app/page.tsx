import Link from 'next/link'

async function fetchPosts() {
  const result = await fetch('http://localhost:3000/api/posts')

  if (!result.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts = await result.json()
  return posts
}

export default async function SimpleSSRComponent() {
  const posts = await fetchPosts()

  return (
    <div>
      <h1>Hello, SSR Component!</h1>
      <h2>Posts:</h2>
      <ul>
        {posts.map((item: any) => (
          <div key={item._id}>
            <Link href={`/posts/${item._id}`}>
              <b>{item.title}</b>
            </Link>
            <p>{item.body}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}
