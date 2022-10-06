import { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    redirect: {
      destination: '/genres/popular',
    },
  };
};

export default Home;
