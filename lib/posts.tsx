import path from 'path';
import fs, { promises as fsPromise } from 'fs';
import matter from 'gray-matter';

const getPost = async () => {
  const markdownDir = path.join(process.cwd() + '/markdown');
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

export { getPost };
