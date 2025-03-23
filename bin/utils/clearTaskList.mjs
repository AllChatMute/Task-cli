import fs from "fs";

export default function clearTaskList() {
  const url = `D:/react/www/Projects/task-cli/bin/taskList.json`;

  fs.writeFile(url, JSON.stringify([]), (err) => {
    if (err) throw err;
  });

  console.log(`Tasklist was cleared`);
}
