import Image from 'next/image'
import Link from 'next/link';
import {Button} from "@nextui-org/react"
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiDiscordFill, RiBookOpenLine, RiMailLine, RiTeamLine, RiPresentationLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import getPostMetadata from "../components/getPostMetadata"
import getPresentations from "../components/getPresentations"

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.slice(0, 3).map((post) => (
    <div key={post.slug}>
      <Link href={`/blog/${post.slug}`}>
          <p className="text-blue-500 text-lg mb-1">{post.title}</p>
          <p className="text-slate-500 text-sm">{post.date}</p>
      </Link>
    </div>
  ));

  const presentations = getPresentations();
  const presentationPreviews = presentations.slice(0, 6).map((pres, index) => (
    <div key={index}>
      <p className="text-purple-500 text-lg mb-1 font-semibold">{pres.title}</p>
      <p className="text-slate-600 text-sm">{pres.presenter}</p>
      <p className="text-slate-500 text-xs">{pres.affiliation}</p>
      <p className="text-slate-400 text-xs mt-1">{pres.date}</p>
    </div>
  ));  

  return (
    <main className="flex min-h-screen flex-col">

      <div className='flex flex-col items-center justify-center w-full h-screen bg-stone-900 text-center'>
          <h1 className="font-bold text-white text-5xl px-3 sm:px-10 md:px-5">
            McGill Machine Learning Reading Group
          </h1>
          <p className="text-lg text-white m-5 px-3 sm:px-10 md:px-5">
            Weekly meetings to discuss recent research papers in machine learning.
          </p>
        
          <Link href="https://discord.gg/cgWxx94WTg" rel="noopener noreferrer" target="_blank">
            <Button color="primary" variant="shadow" className="flex items-center">
              <RiDiscordFill className="text-3xl" /> 
              <h5 className="text-bold">Join our Discord</h5>
            </Button>
          </Link>

      </div>

      <div className='flex flex-col items-center mt-5 mb-5 bg-white'>

        <div className='flex flex-col items-left justify-left w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>

        <div className='mt-10 mb-5'>
          <h2 className="flex font-bold text-3xl mb-4">
            <HiOutlineInformationCircle className="mr-2 text-green-500"/>
            About
          </h2> 
          <p className="text-lg">
            The McGill Machine Learning Reading Group is a student-run reading group for machine learning at McGill University. 
          </p>
          <p className="text-lg mt-2">
            We meet weekly to discuss recent research papers in machine learning, and to learn about the latest developments in the field. 
            We also discuss topics that may not necessarily be the most popular, but could perhaps lead to developments in society. These 
            topics could be impactful, lucrative, or just plain interesting. 
          </p>
          <p className="text-lg mt-2">
            We are mainly a group of thinkers. Sometimes, we implement machine learning algorithms. Our current members encompasses students 
            in Computer Science, Mathematics & Statistics, Biology, and Business & Finance.
            We welcome students from all backgrounds and levels of experience.
          </p>
        </div>

          <div className='mt-10 mb-5'>

          <div className='flex items-start justify-between mb-4'>

          <h2 className="flex font-bold text-3xl">
            <RiPresentationLine className="mr-2 text-purple-500"/>
            Recent Presentations
          </h2>

          <Link href="/presentations">
            <div className="flex items-center underline text-lg">
              <p>View all presentations</p>
              <IoIosArrowRoundForward className="ml-1 text-2xl"/>
            </div>
          </Link>

          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
              {presentationPreviews}
            </div>
          </div>

          <div className='mt-10 mb-5'>
            <h2 className="flex font-bold text-3xl mb-4">
              <RiTeamLine className="mr-2 text-violet-500"/>
              Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-lg">
              <p className="col-span-1">Tommy</p>
              <p className="col-span-1">Elian</p>
              <p className="col-span-1">Edmund</p>
              <p className="col-span-1">Elliot</p>
              <p className="col-span-1">Roko</p>
              <p className="col-span-1">Gabrielle</p>
              <p className="col-span-1">Anton</p>
              <p className="col-span-1">Tianyi</p>
              <p className="col-span-1">Shiyan</p>
              <p className="col-span-1">Moeez</p>
              <p className="col-span-1">Louis</p>
              <p className="col-span-1">Anthony</p>
              <p className="col-span-1">Santosh</p>
			  <p className="col-span-1">Vincent</p>
			  <p className="col-span-1">Jade</p>
			  <p className="col-span-1">Laurence</p>
			  <p className="col-span-1">Antonio</p>
            </div>
          </div>

          <div className='mt-10 mb-5'>
          
          <div className='flex items-start justify-between mb-4'> 

          <h2 className="flex font-bold text-3xl">
            <RiBookOpenLine className="mr-2 text-blue-500"/>
            Latest Posts
          </h2> 

          <Link href="/blog">
            <div className="flex items-center underline text-lg"> 
              <p>View all posts</p>
              <IoIosArrowRoundForward className="ml-1 text-2xl"/>
            </div>
          </Link>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-lg">
            {postPreviews}
          </div>

          </div>

          <div className='mt-10 mb-5 pb-14'>
          <h2 className="flex font-bold text-3xl mb-4">
            <RiMailLine className="mr-2 text-orange-500"/>
            Contact
          </h2> 
            <p className="text-lg">
            We&apos;re a small, bootstrapped, student-run organization. 
            If you&apos;d like to get involved, please &#8239;
            <Link href="https://discord.gg/cgWxx94WTg" target="_blank" className='text-blue-500 underline'>join our Discord</Link> and stay tuned for updates.
            </p>
          </div>
          
        </div>
      </div>

      <div className='bg-stone-900 text-white w-full h-12 md:h-16'>
      </div>

    </main>
  )
}
