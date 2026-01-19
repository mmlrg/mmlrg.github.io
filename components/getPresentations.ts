import fs from "fs";
import { PresentationMetadata } from "@/components/PresentationMetadata";

function convertDateFormat(dateStr: string): string {
  let date = new Date(dateStr);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let monthStr = month < 10 ? `0${month}` : `${month}`;
  let dayStr = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${monthStr}-${dayStr}`;
}

const getPresentations = (): PresentationMetadata[] => {
  const filePath = "public/data/presentations.json";
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const presentations = JSON.parse(fileContents);

  // Sort presentations by date in descending order (most recent first)
  const sortedPresentations = presentations.map((pres: PresentationMetadata) => ({
    ...pres,
    formattedDate: convertDateFormat(pres.date)
  })).sort((a: any, b: any) =>
    new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime()
  );

  return sortedPresentations;
};

export default getPresentations;
