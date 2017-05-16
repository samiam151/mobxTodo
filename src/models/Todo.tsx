export class Todo {
  task: string
  completed: boolean
  assignee: string

  constructor(task: string, completed: boolean, assignee: string) {
    this.task = task;
    this.completed = completed;
    this.assignee = assignee;
  }

  toString() {
    return `Task: ${this.task}`;
  }
}