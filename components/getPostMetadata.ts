import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

function convertDateFormat(dateStr: string): string {
  let date = new Date(dateStr);

  let year = date.getFullYear();
  let month = date.getMonth() + 1; 
  let day = date.getDate();

  let monthStr = month < 10 ? `0${month}` : `${month}`;
  let dayStr = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${monthStr}-${dayStr}`;
}


const getPostMetadata = (): PostMetadata[] => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  let posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`blog/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      const formattedDate = convertDateFormat(matterResult.data.date);

      return {
          title: matterResult.data.title,
          date: matterResult.data.date, // Keep the original date format
          formattedDate, // Add this for sorting
          subtitle: matterResult.data.subtitle,
          slug: fileName.replace(".md", ""),
      };
  });

  // Sort posts by the formatted date in descending order (most recent first)
  posts.sort((a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime());

  return posts;
};
  
export default getPostMetadata;