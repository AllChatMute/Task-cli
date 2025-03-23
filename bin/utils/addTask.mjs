import fs from "fs";

export default function addTask(task) {
  const url = `D:/react/www/Projects/task-cli/bin/taskList.json`;

  fs.readFile(url, "utf-8", (err, data) => {
    if (err) throw err;

    const parsedJson = JSON.parse(data);
    const currentTime = new Date().toTimeString().slice(0, 8);

    const objToAdd = {
      id: parsedJson[parsedJson.length - 1]?.id + 1 || 0,
      description: task,
      status: "todo",
      createdAt: currentTime,
      updatedAt: currentTime,
    };

    parsedJson.push(objToAdd);

    fs.writeFile(url, JSON.stringify(parsedJson), (err) => {
      if (err) throw err;
    });

    console.log(`Task with id ${objToAdd.id} added: ${task}`);
  });
}
