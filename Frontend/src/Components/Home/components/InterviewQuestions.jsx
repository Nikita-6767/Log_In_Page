import styles from './InterviewQuestions.module.css';

function InterviewQuestions() {
  const questions = [
    { question: "Tell me about yourself?", difficulty: "Easy" },
    { question: "Explain the time complexity of quicksort.", difficulty: "Medium" },
    { question: "How would you find a cycle in a linked list?", difficulty: "Hard" },
  ];

  return (
    <section className={styles.questions} id="interview-questions">
      <h2>Common Interview Questions</h2>
      <div className={styles.questionList}>
        {questions.map((q, index) => (
          <div key={index} className={styles.questionCard}>
            <h3>{q.question}</h3>
            <p>Difficulty: <span className={styles[q.difficulty.toLowerCase()]}>{q.difficulty}</span></p>
            <a href="#" className={styles.learnButton}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterviewQuestions;
