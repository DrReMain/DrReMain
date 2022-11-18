import fs from 'fs';
import path from 'path';

export const ARTICLES_PATH = path.join(process.cwd(), 'src/pages/articles');

export const dirs = fs.readdirSync(ARTICLES_PATH);

export const mdxs = (article_path: string) => fs.readdirSync(article_path).filter((path) => /\.mdx?$/.test(path));
