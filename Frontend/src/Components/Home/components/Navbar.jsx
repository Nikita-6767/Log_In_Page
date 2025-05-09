import styles from './Navbar.module.css';
import { useState } from 'react';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CodePlatform</div>
      <div className={styles.links}>
        <a href="http://localhost:3000/">Prepare</a>
        <a href="#certify">Certify</a>
        <a href="#compete">Compete</a>
        <a href="#problems">Coding Problems</a>  {/* New section */}
        <a href="#events">Events</a>  {/* New section */}
        <a href="#interview-questions">Interview Questions</a>  {/* New section */}
        <a href="#profile" onClick={() => setShowModal(true)}>Profile</a>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Sign In / Sign Up</h2>
            <button onClick={() => alert("Signing In...")}>Sign In</button>
            <button onClick={() => alert("Signing Up...")}>Sign Up</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
