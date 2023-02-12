import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf'
import { ToastContext } from '../ToastProvider'

function ToastPlayground() {
  const { data, variants, defaultVariant, addToastData } = React.useContext(ToastContext)

  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(defaultVariant)

  console.log('rerender')

  const onSubmit = (event) => {
    event.preventDefault()
    addToastData({ variant, message })
    setMessage('')
    setVariant(defaultVariant)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {!!data.length && <ToastShelf data={data} />}

      <form className={styles.controlsWrapper} onSubmit={onSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              variants.map((option) => (
                  <label key={option} htmlFor={`variant-${option}`}>
                    <input
                        id={`variant-${option}`}
                        type="radio"
                        name="variant"
                        value={option}
                        checked={variant === option}
                        onChange={(event) => setVariant(event.target.value)}
                    />
                    {option}
                  </label>
              ))
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
