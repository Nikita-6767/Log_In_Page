import styles from "./Home.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Challenges from "./components/Challenges";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <Features />
      <Challenges />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
