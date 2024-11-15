import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailicon.png")} alt="Email icon" />
          <a href="mailto:christoph.kueng1@swisscom.com">
            christoph.kueng1@swisscom.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinicon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/christoph-k%C3%BCng-63b43229a/">
            linkedin.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubicon.png")} alt="Github icon" />
          <a href="https://code.swisscom.com/Christoph.Kueng1">github</a>
        </li>
      </ul>
    </footer>
  );
};
