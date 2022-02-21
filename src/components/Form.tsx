import React, { useState } from 'react';
import styles from './Form.module.scss';

export default function Form() {
  const [input, setInput] = useState<string>('');

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(input);
    setInput('');
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.container}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Create a new todo"
          className={styles.input}
        />
      </label>
    </form>
  );
}
