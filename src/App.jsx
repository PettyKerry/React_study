import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
	const [currentValue, setCurrentValue] = useState('');
	const [items, setItems] = useState([]);
	const [error, setError] = useState('');

	const handleNewInput = () => {
		console.log('Кнопка нажата!'); // Проверка срабатывания кнопки

		try {
			console.log('Пытаемся вызвать prompt...');
			const userInput = window.alert('Введите новое значение:');
			console.log('Результат prompt:', userInput);

			if (userInput === null) {
				console.log('Пользователь отменил ввод');
				return;
			}

			if (userInput.length < 3) {
				console.log('Введено слишком короткое значение');
				setError('Введенное значение должно содержать минимум 3 символа');
				setCurrentValue('');
			} else {
				console.log('Введено корректное значение');
				setCurrentValue(userInput);
				setError('');
			}
		} catch (e) {
			console.error('Ошибка при вызове prompt:', e);
			setError('Произошла ошибка при вводе');
		}
	};

	const handleAddItem = () => {
		if (currentValue.length < 3) return;

		setItems([
			...items,
			{
				id: Date.now(),
				value: currentValue,
				date: new Date().toLocaleString(),
			},
		]);
		setCurrentValue('');
	};

	return (
		<div className="app">
			<h1>Ввод значения</h1>

			<div className="value-display">
				Текущее значение: "<span>{currentValue}</span>"
			</div>

			{error && <div className="error-message">{error}</div>}

			<div className="buttons">
				<button onClick={handleNewInput} className="action-button">
					Ввести новое
				</button>

				<button
					onClick={handleAddItem}
					disabled={currentValue.length < 3}
					className={`action-button ${currentValue.length < 3 ? 'disabled' : ''}`}
				>
					Добавить в список
				</button>
			</div>

			<div className="list-container">
				<h2>Список:</h2>
				{items.length === 0 ? (
					<p className="empty-message">Нет добавленных элементов</p>
				) : (
					<ul className="items-list">
						{items.map((item) => (
							<li key={item.id}>
								{item.value} <small>({item.date})</small>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default App;
