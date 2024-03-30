import React, { useState } from 'react';

const Item = () => {
    const [answers, setAnswers] = useState([]);

    const content = [
        {
            'id': 1,
            'description': "Как зовут президента России?",
            'option1': "Владимир",
            'option2': "Сергей",
            'option3': "Иван",
            'option4': "Алексей",
            'correct': "1"
        },
        {
            'id': 2,
            'description': "Что из перечисленного не является фруктом?",
            'option1': "яблоко",
            'option2': "банан",
            'option3': "апельсин",
            'option4': "огурец",
            'correct': "4"
        },
        {
            'id': 3,
            'description': "Какой год был основан Рим?",
            'option1': "753 г. до н.э.",
            'option2': "476 г. н.э.",
            'option3': "1066 г.",
            'option4': "1945 г.",
            'correct': '1'
        }
    ];

    const handleAnswer = (questionId, selectedOption) => {
        const correctAnswer = content.find(item => item.id === questionId).correct;
        const isCorrect = selectedOption === correctAnswer;
        setAnswers([...answers, { questionId, isCorrect }]);
    };

    return (
        <div>
            {content.map((question) => (
                <div key={question.id}>
                    <h1>Вопрос №{question.id}</h1>
                    <p>{question.description}</p>
                    <button onClick={() => handleAnswer(question.id, '1')}>{question.option1}</button>
                    <button onClick={() => handleAnswer(question.id, '2')}>{question.option2}</button>
                    <button onClick={() => handleAnswer(question.id, '3')}>{question.option3}</button>
                    <button onClick={() => handleAnswer(question.id, '4')}>{question.option4}</button>
                </div>
            ))}
            <div>
                {answers.map((answer, index) => (
                    <p key={index}>{`Вопрос ${answer.questionId}: ${answer.isCorrect ? 'Правильно' : 'Неправильно'}`}</p>
                ))}
            </div>
        </div>
    );
};

export default Item;