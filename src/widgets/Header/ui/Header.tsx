"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/shared";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = ({ variant }: { variant: "auth" | "private" | "public" }) => {
  return (
    <header className={styles.root}>
      <Image src="/Logo.svg" alt="logo" width={165} height={40} priority />
      <nav className={styles.navItems}>
        <ul className={styles.navList}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/games">Games</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/*{variant === "auth" && <Button>Get Started</Button>}*/}
        <Button>Get Started</Button>
      </nav>
    </header>
  );
};

export default Header;
