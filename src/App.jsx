import React from 'react';
import styles from './App.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	// const [list , setList] = useState([]);
	const [error, setError] = useState('');

	const isValueVaild = value.length >= 3;

	const onAddButtonClick = () => {};

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите новое значение:');
		if (promptValue === null) return;
		if (promptValue.length < 3) {
			setError('Введённое значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
		console.log('Полученое новое значение', promptValue);
		setValue(promptValue || '');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && <div className={styles.error}> {error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>

				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles['list-he ading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					<li className={styles['list-item']}>Первый элемент</li>
				</ul>
			</div>
		</div>
	);
};
