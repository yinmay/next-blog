import { NextPage } from 'next';
import { usePost } from 'hooks/usePost';

const PostsIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePost();
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading
        ? '加载ing'
        : isEmpty
        ? '没有文章'
        : posts.map((i) => <p>{i.id}</p>)}
    </div>
  );
};

export default PostsIndex;
