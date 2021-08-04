import React from 'react';
import questions from '../../data/questions';
import QuestionListItem from './question';
import style from './question.module.scss';

const Questions = () => {
	return (
		<>
			<h3 className={style._title}>Questions list</h3>
			{questions.map((v, i) => (
				<QuestionListItem key={i} {...v} />
			))}
		</>
	);
};

export default Questions;
