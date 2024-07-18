import Link from 'next/link'

async function fetchPost(postId: number) {
  const result = await fetch(`http://localhost:3000/api/posts/${postId}`)

  if (!result.ok) {
    throw new Error('Failed to fetch post')
  }

  const post = await result.json()
  return post
}

export default async function Post({ params }: { params: { id: number } }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
        <b>Back</b>
      </Link>
    </div>
  )
}
