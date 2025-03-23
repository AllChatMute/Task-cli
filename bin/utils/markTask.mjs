import fs from "fs";

export default function markTask(id, status) {
  const url = `D:/react/www/Projects/task-cli/bin/taskList.json`;
  fs.readFile(url, "utf-8", (err, data) => {
    if (err) throw err;

    const parsedJson = JSON.parse(data);

    const foundedTask = parsedJson.find((task) => {
      if (task.id == id) {
        task.status = status;
        task.updatedAt = new Date().toTimeString().slice(0, 8);
        return true;
      }
    });

    if (!foundedTask) {
      console.log("Task with current id not found ");
      process.exit();
    }

    fs.writeFile(url, JSON.stringify(parsedJson), (err) => {
      if (err) throw err;
    });
  });
}
