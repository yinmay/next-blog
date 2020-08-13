import { useEffect, useState } from 'react';
import axios from 'axios';

export type Post = {
  id: string;
  date: string;
  title: string;
  content: string;
};

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/posts').then(
      (res) => {
        setPosts(res.data);
        if (res.data.length === 0) {
          setIsEmpty(true);
        }
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );
  }, []);
  return { isLoading, isEmpty, posts, setPosts, setIsLoading, setIsEmpty };
};
