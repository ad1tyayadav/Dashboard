import Logo from './ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Lusitana } from 'next/font/google';
import Image from 'next/image';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
})

export default function Page() {

  return (
    <div>
      <div className='bg-blue-600 h-28'>
        <Logo className="relative top-16" />
      </div>
      <div className='flex justify-center items-center px-4 md:px-16 py-8'>
        <div className="w-full md:w-1/2 p-4 mr-20 bg-gray-100 h-[70vh] flex flex-col justify-center items-center m-auto">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-400 hover:w-32 hover:h-12 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 text-white font-semibold rounded w-28 h-10 absolute left-28 bottom-56">
            <span className="leading-none">Login</span>
            <ArrowRightIcon className="w-4 h-4 mt-[1px]" />
          </button>
        </div>
        <div>
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </div>
  );
}