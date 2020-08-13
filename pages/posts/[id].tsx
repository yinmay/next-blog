import { GetStaticProps, NextPage } from 'next';
import { getSinglePost, getPostIds } from 'lib/posts';
import { Post } from 'hooks/usePost';

type Props = {
  post: Post;
};

const postsShow: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <div>{post.title}</div>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}></article>
    </div>
  );
};

export const getStaticPaths = async () => {
  const ids = await getPostIds();
  return {
    paths: ids.map((i) => ({ params: { id: i } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (staticContext: any) => {
  const { id } = staticContext.params;
  const post = await getSinglePost(id);

  return {
    props: {
      post,
    },
  };
};

export default postsShow;
