#!/usr/bin/env node
import { Command } from "commander";
import addTask from "./utils/addTask.mjs";
import taskList from "./utils/taskList.mjs";
import updateTask from "./utils/updateTask.mjs";
import deleteTask from "./utils/deleteTask.mjs";
import clearTaskList from "./utils/clearTaskList.mjs";
import markTask from "./utils/markTask.mjs";

const program = new Command();

program
  .command("add <task>")
  .description("Add new task")
  .action((task) => {
    addTask(task);
  });

program
  .command("list [status]")
  .description("List of all tasks")
  .action((status) => {
    taskList(status);
  });

program
  .command("update <id> <newTask>")
  .description("Update task description")
  .action((id, newTask) => {
    updateTask(id, newTask);
  });

program
  .command("delete <id>")
  .description("Delete task with current id")
  .action((id) => {
    deleteTask(id);
  });

program
  .command("clear")
  .description("Clear tasklist")
  .action(() => {
    clearTaskList();
  });

program
  .command("mark <id> <status>")
  .description("Change status for task with current id")
  .action((id, status) => {
    markTask(id, status);
  });

program.parse(process.argv);
