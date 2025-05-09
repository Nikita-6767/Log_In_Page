import styles from './ProblemList.module.css';

const problems = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Valid Parentheses", difficulty: "Medium" },
  { id: 3, title: "Merge Intervals", difficulty: "Hard" },
];

function ProblemList() {
  return (
    <section className={styles.container}>
      <h2>Featured Problems</h2>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>
            <span>{problem.title}</span>
            <span className={styles[problem.difficulty.toLowerCase()]}>{problem.difficulty}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProblemList;
