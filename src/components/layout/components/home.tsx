import Link from 'next/link';
import { TbHomeHeart } from 'react-icons/tb';

interface Props {
  menuName: string;
  pathName: string;
}

const Home = ({ menuName, pathName }: Props) => {
  const baseClasses =
    'flex flex-col items-center p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeClasses =
    pathName === '/home' ||
    pathName === '/student' ||
    pathName === '/government' ||
    pathName === '/teachers' ||
    pathName === '/parents' ||
    pathName === '/local-government'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <Link className={`${baseClasses} ${activeClasses}`} href='/home'>
        <div className='mb-1 flex flex-col  items-center'>
          <TbHomeHeart size={35} />
        </div>
        <div className='text-center'> {menuName}</div>
      </Link>
    </div>
  );
};

export default Home;
