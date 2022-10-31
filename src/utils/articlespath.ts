import fs from 'fs';
import path from 'path';

export const ARTICLES_PATH = path.join(process.cwd(), 'src/pages/articles');

export const mdxs = fs.readdirSync(ARTICLES_PATH).filter((path) => /\.mdx?$/.test(path));
