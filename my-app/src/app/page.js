
import styles from "./page.module.css";
import App from "./Components/addtaskbutton";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>To Do List</h1>
      <App/>
    </div>
  );
}
