import path from 'path';
import fs, { promises as fsPromise } from 'fs';
import matter from 'gray-matter';

const markdownDir = path.join(process.cwd() + '/markdown');
const getPost = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  const posts = fileNames.map((filename: string) => {
    const fullPath = path.join(markdownDir, filename);
    const id = filename.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const {
      data: { title, date },
      content,
    } = matter(text);
    return { title, date, id };
  });
  return posts;
};

const getSinglePost = async (id: string) => {
  const fullPath = path.join(markdownDir, id + '.md');
  const text = fs.readFileSync(fullPath, 'utf-8');
  const {
    data: { title, date },
    content,
  } = matter(text);
  return JSON.parse(JSON.stringify({ title, date, id, content }));
};

const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  return fileNames.map((i) => i.replace('/.md$/g', ''));
};

export { getPost, getSinglePost, getPostIds };
