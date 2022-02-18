// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// // DRIVER CODE BELOW
const task1 = newTask("Clean cat litter", "Remove 💩 from litter box");
const task2 = newTask("Do laundry", "🧺");
const tasks = [task1, task2];

task1.logState(); // Clean cat litter not complete
task1.markCompleted();
task1.logState(); //Clean cat litter complete
