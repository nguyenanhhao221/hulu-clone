import { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    redirect: '/genres/top-rated',
  };
};

export default Home;
