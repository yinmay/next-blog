import React, { Component } from 'react';
import styles from 'styles/first.module.scss';
import { GetStaticProps } from 'next';
import { getPost } from 'lib/posts';
import { NextPage } from 'next';

import { Post } from 'hooks/usePost';

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
          <div>{i.title}</div>
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
