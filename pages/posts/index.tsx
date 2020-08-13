import React, { Component } from 'react';
import styles from 'styles/first.module.scss';
import { GetStaticProps } from 'next';
import { getPost } from 'lib/posts';
import { NextPage } from 'next';

import { Post } from 'hooks/usePost';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const firstPost: NextPage<Props> = (props) => {
  console.log(props.posts);
  const { posts } = props;
  return (
    <div className={styles.content}>
      {posts.map((i) => (
        <div key={i.id}>
          <Link href='/posts/[i.id]' as={`/posts/${i.id}`}>
            <a>{i.title}</a>
          </Link>
          {/* <div>{i.date}</div> */}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPost();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};

export default firstPost;
