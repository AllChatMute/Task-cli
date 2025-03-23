import fs from "fs";

export default function deleteTask(id) {
  const url = `D:/react/www/Projects/task-cli/bin/taskList.json`;

  fs.readFile(url, "utf-8", (err, data) => {
    if (err) throw err;

    const parsedJson = JSON.parse(data);
    const updatedTaskList = parsedJson.filter((task) => task.id != id);

    fs.writeFile(url, JSON.stringify(updatedTaskList), (err) => {
      if (err) throw err;
    });

    console.log(`Task with id ${id} was successfully deleted`);
  });
}
