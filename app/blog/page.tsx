import Image from 'next/image'
import Link from 'next/link';
import {Button} from "@nextui-org/react"
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiDiscordFill, RiBookOpenLine, RiMailLine, RiTeamLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import getPostMetadata from "../../components/getPostMetadata"

function Blog() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div key={post.slug}> 
          <Link href={`/blog/${post.slug}`}>
              <p className="text-blue-500 text-lg">{post.title}</p>
              <p className="text-slate-500 text-sm">{post.date}</p>
          </Link>
        </div>
      ));      

    return (
      <main className="flex min-h-screen flex-col">

        <Link href="/">
            <p className="flex items-center p-5 text-lg">McGill Machine Learning Reading Group</p>
        </Link>

        <div className='flex flex-col items-center w-full h-screen mt-10'>
            <div className='flex flex-col items-left justify-left w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                <h1 className='text-3xl mb-5'>Blog</h1>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-lg">
                {postPreviews}
                </div>

            </div>
        </div>
    </main>
    )
  }
  
  export default Blog;