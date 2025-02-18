import { Modal } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import 'react-lazy-load-image-component/src/effects/blur.css';

import Layout from '@/components/layout/Layout';

const Government = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const governmentEvent = [
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_1.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_2.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_3.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_4.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_5.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_6.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_7.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_8.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_9.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_10.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_11.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_12.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_13.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_14.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_15.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_16.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_17.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_18.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_19.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_20.jpg',
  ];

  const handlePreview = (image: string) => {
    setPreviewImage(image);
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <Layout>
      <Head>
        <title>
          เวทีเสวนา “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทย
          ก้าวทันโลก” : deschooling
        </title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='mx-4  my-10 md:mx-24'>
        <div className='flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <div className='text-xl md:text-3xl'>
            “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทยก้าวทันโลก”
          </div>
        </div>

        <div className='my-8 grid grid-cols-1  gap-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {governmentEvent.map((image, index) => (
            <div key={index} className='m-4'>
              <Image
                src={image}
                className='cursor-pointer rounded-xl'
                onClick={() => handlePreview(image)}
                alt={`Government Event ${index + 1}`}
                width={400}
                height={300}
                placeholder='empty'
              />
            </div>
          ))}
        </div>

        <div className='mb-20 text-center indent-0 text-lg font-light text-white md:text-justify md:indent-8 '>
          วันที่ 5 มีนาคม 2566 เวลา 10.00 - 13.00 น. ภาคีเพื่อการศึกษาไทย
          (Thailand Education Partnership: TEP) จัดเวทีเสวนา “TEP Policy Forum:
          ชวนพรรคร่วมคิด พลิกห้องเรียน เปลี่ยนไทยทันโลก”
          โดยนำเสนอความท้าทายของระบบการศึกษาไทย
          และข้อเสนอแนะเชิงนโยบายการศึกษาในโลกยุคหลังโควิด-19
          ที่ต้องเร่งฟื้นฟูการเรียนรู้ที่ถดถอย
          ไปพร้อมกับสร้างสมรรถนะให้เด็กไทยก้าวทันโลกที่เปลี่ยนแปลงอย่างรวดเร็ว
          และเปิดเวทีให้ตัวแทน 8 พรรคการเมือง ได้แก่ พรรคเพื่อไทย พรรคก้าวไกล
          พรรคไทยสร้างไทย พรรคประชาธิปัตย์ พรรคชาติพัฒนากล้า พรรคภูมิใจไทย
          พรรคชาติไทยพัฒนา และ พรรคเสรีรวมไทย
          มาร่วมคิดทางออกเชิงนโยบายให้ระบบการศึกษาไทยก้าวข้ามความท้าทายได้ตรงจุดและตรงกับความต้องการของสังคม
        </div>

        <div className='mt-10 flex justify-center text-lg text-[#ffba00]'>
          <Link
            href='/pdf/government-event.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            อ่านเพิ่มเติม
          </Link>
        </div>

        <Modal
          visible={previewVisible}
          onCancel={handleClosePreview}
          footer={null}
          closable={false}
          width='80%'
        >
          <Image
            alt='Mountains'
            src={previewImage}
            width={1500}
            height={1000}
            placeholder='empty'
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default Government;
