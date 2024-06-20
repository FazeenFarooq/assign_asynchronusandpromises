"use strict";
/* Q1. Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout. */
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchGreeting(message) {
    setTimeout(() => (console.log(message)), 2000);
}
fetchGreeting("Hello, Good Morning");
/* Q2.Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay. */
function simulateTask() {
    console.log("Task Started");
    setTimeout(() => (console.log("Task Completed"), 1000));
}
simulateTask();
/* Q3.Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second. */
function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data fetched successfully!"), 1000));
}
fetchData().then((data) => console.log(data));
