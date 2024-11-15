import styles from "./app.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Hero } from "./componets/Hero/Hero";
import { Experience } from "./componets/Experience/Experience";
import { Contact } from "./componets/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
