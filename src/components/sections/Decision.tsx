import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { DECISION_CONTENT } from '@/utils/constants';
import styles from './Decision.module.css';

export default function Decision() {
  return (
    <section className={styles.decision} id="decision" aria-labelledby="decision-heading">
      <Container>
        <header className={styles.header}>
          <h2 id="decision-heading">{DECISION_CONTENT.heading}</h2>
          <p className={styles.description}>{DECISION_CONTENT.description}</p>
        </header>

        <div className={styles.options}>
          {DECISION_CONTENT.options.map((option, index) => {
            const isRecommended = !!option.action;
            
            return (
              <article
                key={index}
                className={`${styles.option} ${isRecommended ? styles.recommended : styles.statusQuo}`}
              >
                <div className={styles.optionHeader}>
                  <span className={styles.label}>
                    {option.label} {isRecommended && <span className="sr-only">(Recommended Selection)</span>}
                  </span>
                  <h3>{option.title}</h3>
                </div>

                <ul className={styles.consequences} role="list">
                  {option.consequences.map((consequence, cIndex) => (
                    <li key={cIndex}>{consequence}</li>
                  ))}
                </ul>

                {option.action && (
                  <div className={styles.ctaWrapper}>
                    <Button
                      variant="primary"
                      size="large"
                      href="#waitlist"
                      className={styles.cta}
                    >
                      {option.action}
                    </Button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
