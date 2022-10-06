import { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    redirect: '/genres/top-rated',
  };
};

export default Home;
