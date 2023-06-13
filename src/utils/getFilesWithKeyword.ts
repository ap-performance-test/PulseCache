import fs from 'fs';

export const getFilesWithKeyword = (keyword: string, folderName: string, files_: string[] = []): string[] => {
  const files = fs.readdirSync(folderName);
  for (const file of files) {
    const name = `${folderName}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFilesWithKeyword(keyword, name, files_);
    } else {
      if (name.includes(keyword)) {
        files_.push(name);
      }
    }
  }
  return files_;
};
