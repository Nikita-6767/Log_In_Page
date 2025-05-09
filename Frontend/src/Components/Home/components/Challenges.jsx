import styles from "./Challenges.module.css";

function Challenges() {
  const problems = [
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Longest Substring Without Repeating", difficulty: "Medium" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { title: "Valid Parentheses", difficulty: "Easy" },
    { title: "Merge Intervals", difficulty: "Medium" },
  ];

  return (
    <section className={styles.challenges}>
      <h2>Popular Challenges</h2>
      <div className={styles.list}>
        {problems.map((problem, index) => (
          <div key={index} className={styles.problem}>
            <h3>{problem.title}</h3>
            <span className={`${styles[problem.difficulty.toLowerCase()]}`}>
              {problem.difficulty}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Challenges;
