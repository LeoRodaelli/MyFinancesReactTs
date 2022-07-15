import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Heading, useDisclosure } from "@chakra-ui/react";

import { useState } from "react";
import FinancesTable, { IExpenses } from "./components/FinancesTable";
import NewExpenseModal from "./components/NewExpenseModal";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.container}>
      <Head>
        <title>My finances</title>
        <meta name="description" content="Vnt 4tech 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h2" mb="100px">
          My Finances
        </Heading>
        <FinancesTable
          onAddExpense={() => onOpen()}
        />
        <NewExpenseModal
          isOpen={isOpen}
          onClose={onClose} onSave={function (expense: IExpenses): void {
            throw new Error("Function not implemented.");
          } }          
          />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.venturus.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project of Venturus4tech 2022
        </a>
      </footer>
    </div>
  );
};

export default Home;