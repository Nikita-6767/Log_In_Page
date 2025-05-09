import styles from './Companies.module.css';

const Companies = () => {
  const companyNames = [
    "Amazon",
    "Google",
    "Microsoft",
    "Facebook",
    "Netflix",
    "Apple",
    "Adobe",
    "LinkedIn",
    "Spotify"
  ];

  return (
    <section className={styles.companies} id="companies">
      <h2>Trusted by Top Tech Companies</h2>
      <div className={styles.companyList}>
        {companyNames.map((name, index) => (
          <div key={index} className={styles.companyName}>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
