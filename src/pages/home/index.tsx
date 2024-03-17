import React from 'react';

import { Swiper } from '@taoyage/react-mobile-ui';
import Header from './components/header';
import Loading from '@/components/loading';
import ErrorBlock from '@/bases/error-block';

import { useRequest } from '@/hooks/useRequest';

import api from '@/pages/home/api';
import { IHomeData } from './types';

import styles from './index.module.scss';
const Home: React.FC = () => {
  const { data, error } = useRequest<IHomeData>({ url: api.getHomeData });
  console.log(data);

  if (error) {
    return <ErrorBlock />;
  }
  if (!data) {
    return <Loading />;
  }
  return (
    <div className={styles.home}>
      <Header />
      <Swiper loop autoplay style={{ '--border-radius': '12px' }}>
        {data!.banner.map((item, index) => (
          <Swiper.Item key={index}>
            <img src={item.src} alt={item.alt} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
