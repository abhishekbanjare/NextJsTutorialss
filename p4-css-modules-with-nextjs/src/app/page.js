import Image from "next/image";
// import styles from "./page.module.css";
import User from "./user/page";
import Teacher from "./teacher/page";
import Student from "./student/page";
import home from './style/home.module.css'
export default function Home() {
  return (
    <main className={home.Main}>

      <User />
      <Teacher />
      <Student />

    </main>
  );
}
