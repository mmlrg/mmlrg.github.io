import Link from 'next/link';
import getPostMetadata from "../../components/getPostMetadata"


function Blog() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div key={post.slug}> 
          <Link href={`/blog/${post.slug}`}>
              <p className="text-blue-500 text-2xl font-bold mb-1 hover:underline">{post.title}</p>
              <p className="text-slate-500 text-sm font-bold">{post.date}</p>
          </Link>
        </div>
      ));      

    return (
      <main className="flex min-h-screen flex-col">

        <div className='flex flex-col items-center justify-center w-full text-center'>

            <div className='flex row justify-between pt-4 pb-4 w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
            <Link href="/blog">
                <p className="flex items-center text-xl hover:underline">McGill Machine Learning Reading Group</p>
            </Link>

            <Link href="/">
                <p className="flex items-center text-lg hover:underline">About</p>
            </Link>
            </div>

            <hr className="w-full"/>
        </div>
        
        <div className='flex flex-col items-center w-full h-screen mt-10'>
            <div className='flex flex-col items-left justify-left w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                <p className='text-3xl mb-5'>Blog</p>

                <div className="flex flex-col space-y-5">
                {postPreviews}
                </div>

            </div>
        </div>
    </main>
    )
  }
  
  export default Blog;