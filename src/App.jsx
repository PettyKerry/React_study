import React from 'react';
import './App.css'
import styles from './App.css';
// import { useState } from 'react';

export const App = () => {

  return (
  <div className= {styles.app}>
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className={styles['current-value']}></output>"
    </p>
    <div className={styles.error}> Введенное значение должно содержать минимум 3 символа </div>
    <div className={ styles.buttonsContainer}>
      <button className={styles.button}>Ввести новое</button>
      <button className={styles.button} disabled>Добавить в список</button>
    </div>
    <div className={styles.listContainer}>
      <h2 className={styles['list-he ading']}>Список:</h2>
      <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
      <ul className={styles.list}>
        <li className={styles['list-item']}>Первый элемент</li>
      </ul>
    </div>
  </div>
  )
}
