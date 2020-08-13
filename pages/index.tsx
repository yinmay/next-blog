import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import { useCallback } from 'react';
import a from 'assets/1.png';
import { GetServerSideProps, NextPage } from 'next';
import { UAParser } from 'ua-parser-js';

type Props = {
  browser: {
    name: string;
    version: string;
    major: string;
  };
};

const Home: NextPage<Props> = (props) => {
  const { browser } = props;
  // const clickMe = useCallback(() => console.log(123), []);
  return (
    <div>
      你的浏览器是{browser.name}
      {/* <button onClick={clickMe}>clickMe</button>
      <Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
        <a>
          <img src={a} alt='Vercel Logo' />
        </a>
      </Link> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  console.log(result.browser);
  return {
    props: {
      browser: result.browser,
    },
  };
};

export default Home;
