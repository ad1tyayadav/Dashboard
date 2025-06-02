import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin'],
})

export default function Logo({className = ''}) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white ${className}`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Fets</p>
    </div>
  );
}