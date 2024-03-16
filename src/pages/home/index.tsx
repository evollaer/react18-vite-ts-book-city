import React from 'react';

import Header from './components/header';

import { useRequest } from '@/hooks/useRequest';

import styles from './index.module.scss';
import api from '@/pages/home/api';

const Home: React.FC = () => {
  const { data, error } = useRequest<any>({ url: api.getHomeData });
  console.log(data);

  if (error) {
    return <>error block</>;
  }
  if (!data) {
    return <>Loading</>;
  }
  return (
    <div className={styles.home}>
      <Header />
      home
    </div>
  );
};

export default Home;
