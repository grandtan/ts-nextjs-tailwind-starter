import Link from 'next/link';
import router from 'next/router';
import { MdComputer } from 'react-icons/md';

interface Props {
  menuName: string;
  submenu1: string;
  submenu2: string;
  submenu3: string;
  submenu4: string;
  submenu5: string;
  submenu6: string;
  submenu7: string;
  submenu8: string;
  pathName: string;
}

const LearningSpace = ({
  menuName,
  submenu1,
  submenu2,
  submenu3,
  submenu4,
  submenu5,
  submenu6,
  submenu7,
  submenu8,
  pathName,
}: Props) => {
  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/teacher' || pathName === '/parent'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col  items-center'>
          <MdComputer size={35} />
        </div>
        <div className='text-center'> {menuName}</div>
      </button>
      <div className='fixed hidden w-fit flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/teacher'
        >
          {submenu1}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/parent'
        >
          {submenu2}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/small-school'
        >
          {submenu3}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/classroom'
        >
          {submenu4}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/vdo-teacher-classroom'
        >
          {submenu5}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/idea'
        >
          {submenu6}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/certificate'
        >
          {submenu7}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/classroom-management'
        >
          {submenu8}
        </Link>
      </div>
    </div>
  );
};

export default LearningSpace;
