import Link from "next/link"


function PostList({ posts }) {
    return (
        <>
            <h1>PostList</h1>
            {posts.map((post, id) => {
                return (
                    <>
                        <div key={id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h3>{post.id} {post.title}</h3>
                            </Link>
                            <hr />
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    return {
        props: {
            posts: data.slice(0, 3),
        },
    }
}