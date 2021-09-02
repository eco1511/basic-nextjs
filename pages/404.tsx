import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);
  return (
    <div className="title-not-found">
      <h1>Oooops....</h1>
      <h1>Halaman yang anda cari tidak ditemukan</h1>
    </div>
  );
}
