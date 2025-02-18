import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FaPodcast } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SiYoutubemusic } from 'react-icons/si';

import CardItem from '@/components/CardItem';
import Layout from '@/components/layout/Layout';

const Teachers: React.FC = () => (
  <Layout backgroundImage='https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/bg-master.png'>
    <Head>
      <title>นักเรียน : คุณคือใครในวงการการศึกษา : deschooling</title>
      <meta
        name='keywords'
        content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
      />
    </Head>

    <CardItem
      title='ครูและผู้อำนวยการ'
      titleIcon={<GiTeacher size={35} />}
      items={[
        {
          nameTitle: 'VDO How to',
          linkPath: '/vdo',
          icon: <SiYoutubemusic size={100} />,
        },

        {
          nameTitle: 'TV Program',
          linkPath: 'https://www.altv.tv/home',
          icon: (
            <Image
              src='/images/logoaltv.png'
              alt='TV Program'
              width={200}
              height={200}
            />
          ),
        },
        {
          nameTitle: 'Learning Space',
          linkPath: '/learning-space',
          icon: <SiYoutubemusic size={100} />,
        },
        {
          nameTitle: 'โรงเรียนเล็ก จิ๋วแต่แจ๋ว',
          linkPath: '/tiny-school',
          icon: <SiYoutubemusic size={100} />,
        },
        {
          nameTitle: 'ห้องเรียนเล็ก เอาเด็กอยู่',
          linkPath: '/small-classroom',
          icon: <SiYoutubemusic size={100} />,
        },
        {
          nameTitle: 'กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง',
          linkPath: '/podcast',
          icon: <FaPodcast size={100} />,
        },
      ]}
    />
  </Layout>
);

export default Teachers;
