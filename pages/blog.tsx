import Layout from '../component/Layout';
import style from './blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogPost {
  dataBlog: Post[]
}

export default function Blog(props: BlogPost) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={style.card}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>

  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
