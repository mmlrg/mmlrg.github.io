import Link from 'next/link';

function Blog() {
    return (
      <main className="flex min-h-screen flex-col">

        <Link href="/">
            <p className="flex items-center p-5 text-lg">McGill Machine Learning Reading Group</p>
        </Link>

        <div className='flex flex-col items-center w-full h-screen mt-10'>
            <div className='flex flex-col items-left justify-left w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                <h1 className='text-3xl'>Blog</h1>
                <p>This is the blog page. Work in progress...</p>
            </div>
        </div>
    </main>
    )
  }
  
  export default Blog;