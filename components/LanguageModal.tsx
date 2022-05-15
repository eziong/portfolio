import Link from 'next/link';
import styles from '../styles/Home.module.css';

function LanguageModal() {
  return (
    <div className={styles.modal__fullscreen}>
      <div className={styles.modal__container}>
      <Link href={`/eng/show`}>
        <div className={styles.modal__btn}>
          <a>English</a>
        </div>
        </Link>
        <Link href={`/kor/show`}>
        <div className={styles.modal__btn}>
          <a>Korean</a>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default LanguageModal;