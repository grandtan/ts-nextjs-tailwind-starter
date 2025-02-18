import Link from 'next/link';
import { PiTelevisionFill } from 'react-icons/pi';

interface Props {
  menuName: string;
  submenu1: string;
  submenu2: string;
  submenu3: string;
  submenu4: string;
  submenu5: string;
  submenu6: string;
  pathName: string;
}

const Tv = ({
  menuName,
  submenu1,
  submenu2,
  submenu3,
  submenu4,
  submenu5,
  submenu6,
  pathName,
}: Props) => {
  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/deschooling' || pathName === '/teacher-hero'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col items-center'>
          <PiTelevisionFill size={35} />
        </div>
        {menuName}
      </button>

      <div className='fixed hidden w-fit flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/deschooling'
        >
          {submenu1}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/teacher-hero'
        >
          {submenu2}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/first-class'
        >
          {submenu3}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/the-magnet'
        >
          {submenu4}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/thamaitai'
        >
          {submenu5}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/coolcru'
        >
          {submenu6}
        </Link>
      </div>
    </div>
  );
};

export default Tv;
