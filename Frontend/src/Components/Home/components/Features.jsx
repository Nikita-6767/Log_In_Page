import styles from "./Features.module.css";
import { Trophy, Code2, Briefcase } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Practice",
      desc: "Sharpen your skills with thousands of coding problems.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Compete",
      desc: "Join global contests and test your coding speed.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Interview",
      desc: "Get ready for your dream job with real interview questions.",
    },
  ];

  return (
    <section className={styles.features}>
      <h2>What You Can Do</h2>
      <div className={styles.cards}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
