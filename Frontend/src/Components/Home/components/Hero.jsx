import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Learn Master Coding</h1>
        <p>
          Practice problems, compete in contests, and prepare for top tech jobs — all in one platform.
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
