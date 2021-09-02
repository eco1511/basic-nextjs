import { useRouter } from 'next/router';
import Layout from '../../component/Layout';
import style from './users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      { dataUsers.map((user) => (
        <div className={style.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
