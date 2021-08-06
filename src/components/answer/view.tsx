import { FC } from 'react';
import Answer from '../../models/answer';
import style from './answer.module.scss';

interface Props extends Answer {}

const QuestionView: FC<Props> = ({ aContent, User, Vote_score }) => {
	return (
		<div className={style._root}>
			<h3 className={style._content}>{aContent}</h3>
			<span className={style._user}>{User}</span>
			<span className={style._point}>{Vote_score}</span>
		</div>
	);
};

export default QuestionView;
