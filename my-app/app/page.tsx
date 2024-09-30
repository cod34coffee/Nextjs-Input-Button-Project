"use client"; 

import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody } from "@nextui-org/card";
import styles from "../styles/page.module.css";
import { Image } from "@nextui-org/image";
import { useState } from "react"; // Importing useState for managing state

export default function Home() {
 // State for storing the list of tasks
// 'tasks' is the state variable that holds the array of tasks
// 'setTasks' is the function used to update the tasks array by passing in new tasks
// useState dynamically updates the list whenever 'setTasks' is called
  const [tasks, setTasks] = useState([]);
  // State for storing the current input value (new task)
  const [taskInput, setTaskInput] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim() === "") return; // Ignore empty input
    setTasks([...tasks, taskInput]); // Add new task to tasks array
    setTaskInput(""); // Clear the input field after adding
  };

  // Function to handle deleting a task by its index
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete)); // Remove task at the given index
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={styles.title}>To Do List</span>

        <div className="flex gap-3 mt-9">
          {/* Input field for adding new tasks */}
          <Input
            isRequired
            type="text"
            label=""  
            value={taskInput} // Controlled input bound to taskInput state
            onChange={(e) => setTaskInput(e.target.value)} // Update input value as user types
            placeholder="Add your next task here."
            className={styles.inputTask}
          />
          {/* Add button */}
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
            })}
            onClick={addTask} // Call addTask function when clicked
          >
            <Image
              width={50}
              className="addButton"
              alt="Add Task"
              src="././Button.svg"
            />
          </Link>
        </div>
      </div>

      {/* Display the list of tasks - !!!4 left to understand.*/} 
      <div className="mt-9 flex flex-col gap-3 items-center justify-center">
        {tasks.length === 0 && <p>No tasks added yet.</p>} {/* Show message when no tasks */}
        {tasks.map((task, index) => (
          <div key={index} className="flex gap-3 items-center">
            {/* Task card */}
            <Card>
              <CardBody className={styles.cardTask}>
                <p>{task}</p> {/* Display each task */}
              </CardBody>
            </Card>

            {/* Delete button */}
            <Link
              isExternal
              className={buttonStyles({
                color: "danger",
                radius: "md",
                variant: "shadow",
              })}
              onClick={() => deleteTask(index)} // Call deleteTask when clicked
            >
              <Image
                width={30}
                alt="Delete Task"
                src="././trash.svg"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
