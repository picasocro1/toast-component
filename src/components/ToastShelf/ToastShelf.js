import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ data }) {
  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="Notification"
    >
        {data.map(({ id, variant, message, dismiss }) => (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} dismiss={dismiss}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
