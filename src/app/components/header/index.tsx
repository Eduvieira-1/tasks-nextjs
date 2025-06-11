'use client';
import styles from "./styles.module.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Header() {
  const session = await getServerSession()

  if(!session) {
    return redirect('/')
  }

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Meu Painel
          </Link>
        </nav>

       <div> Olá, {session.user?.name}</div>
        {/* {status === "loading" ? (
          <div></div>
        ) : session ? (
          <button
          className={styles.loginButton}
          onClick={() => signOut()}
        >
          Olá {session?.user?.name}
        </button>
        ) : (
          <button
          className={styles.loginButton}
          onClick={() => signIn("google")}
        >
          Acessar
        </button>
        )} */}

        {/* <button className={styles.loginButton}>Acessar</button> */}
      </section>
    </header>
  );
}
