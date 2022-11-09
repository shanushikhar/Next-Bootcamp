import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Home page</h1>
      <ul>
        <li>
          <Link href={"/clients"}>The Clients page</Link>
        </li>
        <li>
          <Link href={"/clients/O2"}>The Clients page with details</Link>
        </li>
      </ul>
    </div>
  );
}
// http://localhost:3000/
