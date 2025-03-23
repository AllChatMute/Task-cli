import fs from "fs";

export default function taskList(status) {
  fs.readFile(
    `D:/react/www/Projects/task-cli/bin/taskList.json`,
    "utf-8",
    (err, data) => {
      const parsedJson = JSON.parse(data);

      if (status) {
        if (err) throw err;

        if (parsedJson.filter((item) => item.status === status).length > 0) {
          console.log(`Tasklist with status: ${status}`);

          for (let task of parsedJson.filter(
            (item) => item.status === status
          )) {
            console.log(
              `id: ${task.id}, task: ${task.description}, status: ${task.status}, created at: ${task.createdAt}, updated at: ${task.updatedAt}`
            );
          }
        } else console.log("Tasklist empty");
      } else {
        for (let task of parsedJson) {
          console.log(
            `id: ${task.id}, task: ${task.description}, status: ${task.status}, created at: ${task.createdAt}, updated at: ${task.updatedAt}`
          );
        }
      }
    }
  );
}
