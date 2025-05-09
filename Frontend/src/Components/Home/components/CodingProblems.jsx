import styles from './CodingProblems.module.css';

function CodingProblems() {
  const problems = [
    { title: "Two Sum", difficulty: "Easy", link: "#" },
    { title: "Longest Substring Without Repeating", difficulty: "Medium", link: "#" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard", link: "#" },
    { title: "Valid Parentheses", difficulty: "Easy", link: "#" },
    { title: "Merge Intervals", difficulty: "Medium", link: "#" },
  ];

  return (
    <section className={styles.problems} id="problems">
      <h2>Practice Coding Problems</h2>
      <div className={styles.problemList}>
        {problems.map((problem, index) => (
          <div key={index} className={styles.problemCard}>
            <h3>{problem.title}</h3>
            <p>Difficulty: <span className={styles[problem.difficulty.toLowerCase()]}>{problem.difficulty}</span></p>
            <a href={problem.link} className={styles.startButton}>Start Problem</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CodingProblems;
