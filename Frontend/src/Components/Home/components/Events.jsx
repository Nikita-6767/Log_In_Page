import styles from './Events.module.css';

function Events() {
  const events = [
    { title: "LeetCode Weekly Contest", date: "April 15, 2025", link: "#" },
    { title: "CodeWars: Coding Challenge", date: "April 20, 2025", link: "#" },
    { title: "Interview Preparation Webinar", date: "April 25, 2025", link: "#" },
  ];

  return (
    <section className={styles.events} id="events">
      <h2>Upcoming Events</h2>
      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <a href={event.link} className={styles.viewButton}>Join Event</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
