import { Link } from 'react-router-dom';
import styles from './Roadmap.module.scss';

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <Link to="/">Back</Link>
      <h1 className={styles.title}>Roadmap</h1>
      <ul className={styles.list}>
        <li>
          <label htmlFor="vite">
            <input
              type="checkbox"
              name="vite"
              id="vite"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Vite frontend tooling</span>
          </label>
        </li>
        <li>
          <label htmlFor="eslint">
            <input
              type="checkbox"
              name="eslint"
              id="eslint"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>ESLint</span>
          </label>
        </li>
        <li>
          <label htmlFor="stylelint">
            <input
              type="checkbox"
              name="stylelint"
              id="stylelint"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Stylelint</span>
          </label>
        </li>
        <li>
          <label htmlFor="prettier">
            <input
              type="checkbox"
              name="prettier"
              id="prettier"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Prettier</span>
          </label>
        </li>
        <li>
          <label htmlFor="typescript">
            <input
              type="checkbox"
              name="typescript"
              id="typescript"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Typescript</span>
          </label>
        </li>
        <li>
          <label htmlFor="sass">
            <input
              type="checkbox"
              name="sass"
              id="sass"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>SCSS/SASS</span>
          </label>
        </li>
        <li>
          <label htmlFor="redux">
            <input
              type="checkbox"
              name="redux"
              id="redux"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Redux Toolkit</span>
          </label>
        </li>
        <li>
          <label htmlFor="express">
            <input
              type="checkbox"
              name="express"
              id="express"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Express REST API</span>
          </label>
        </li>
        <li>
          <label htmlFor="node">
            <input
              type="checkbox"
              name="node"
              id="node"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Node</span>
          </label>
        </li>
        <li>
          <label htmlFor="prisma">
            <input
              type="checkbox"
              name="prisma"
              id="prisma"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Prisma</span>
          </label>
        </li>
        <li>
          <label htmlFor="postgres">
            <input
              type="checkbox"
              name="postgres"
              id="postgres"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>PostgeSQL</span>
          </label>
        </li>
        <li>
          <label htmlFor="rtl">
            <input
              type="checkbox"
              name="rtl"
              id="rtl"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>RTL Unit Testing</span>
          </label>
        </li>
        <li>
          <label htmlFor="cypress">
            <input
              type="checkbox"
              name="cypress"
              id="cypress"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Cypress E2E Testing</span>
          </label>
        </li>
        <li>
          <label htmlFor="ci">
            <input
              type="checkbox"
              name="ci"
              id="ci"
              checked
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Github Action CI Pipeline</span>
          </label>
        </li>
        <li>
          <label htmlFor="cd">
            <input
              type="checkbox"
              name="cd"
              id="cd"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Github Action CD Pipeline</span>
          </label>
        </li>
        <li>
          <label htmlFor="heroku">
            <input
              type="checkbox"
              name="heroku"
              id="heroku"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Heroku Backend Hosting?</span>
          </label>
        </li>
        <li>
          <label htmlFor="hosting">
            <input
              type="checkbox"
              name="hosting"
              id="hosting"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Firebase Client Hosting?</span>
          </label>
        </li>
        <li>
          <label htmlFor="functions">
            <input
              type="checkbox"
              name="functions"
              id="functions"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Firebase Functions?</span>
          </label>
        </li>
        <li>
          <label htmlFor="cloudrun">
            <input
              type="checkbox"
              name="cloudrun"
              id="cloudrun"
              readOnly
              className={styles.checkbox}
            />
            <span className={styles.label}>Firebase Cloud Run?</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
