import { FC, useState } from 'react';
import { getUser } from '../../api';
import Question from '../../models/question';

import style from './question.module.scss';

interface Props extends Question {}

const QuestionListItem: FC<Props> = (props) => {
	const [user, setUser] = useState('Anonymous');

	getUser(props.User).then((x) => setUser(x.data.firstname));

	return (
		<div className={style._listitem}>
			<h3 className={style._listitem__title}>{props.Title}</h3>
			<p className={style._listitem__content}>{props.qContent}</p>
			<span className={style._listitem__author}>{user}</span>
		</div>
	);
};

export default QuestionListItem;
