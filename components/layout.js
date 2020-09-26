import Head from "next/head";
import styles from "./layout.module.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ClassTech Lab</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>

      <Navbar
        fixed="top"
        expand="lg"
        collapseOnSelect
        className={styles.navBar}
      >
        <Navbar.Brand href="/" className={styles.navLogo}>
          <img
            src="/images/title-main.svg"
            className="img-fluid mx-auto py-2"
            alt="ClassTechLab"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              href="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              ClassTech Labについて
            </Nav.Link>
            <Nav.Link
              href="/policy"
              style={{ color: "white", textDecoration: "none" }}
            >
              ポリシーと規約
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main style={{ backgroundColor: "#4bacc6" }}>{children}</main>

      <footer className={styles.footer}>
        <p className="text-center py-3">ClassTechLab, 2020.</p>
      </footer>
    </div>
  );
}
