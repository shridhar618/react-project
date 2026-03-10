import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>

      <ul style={styles.menu}>
        <a href=""><li>Home</li></a>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    color: "white",
    padding: "10px 20px"
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
  },

  logo: {
    margin: 0
  }
};

export default Navbar;