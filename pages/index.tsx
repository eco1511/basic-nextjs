import Image from 'next/image';
import Layout from '../component/Layout';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" height={200} width={200} alt="profile" />
      <h1 className={style['title-homepage']}>Welcome Eko Teguh Santoso</h1>
    </Layout>
  );
}
