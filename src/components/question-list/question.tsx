import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../api';
import Question from '../../models/question';
import routes from '../../utils/appRoutes';

import style from './question.module.scss';

interface Props extends Question {}

const QuestionListItem: FC<Props> = (props) => {
	const history = useHistory();
	const [user, setUser] = useState('Anonymous');

	getUser(props.User).then((x) => setUser(x.data.firstname));

	const handleClick = (id: string) => {
		history.push(routes.single(id));
	};

	return (
		<div
			className={style._listitem}
			onClick={() => handleClick(String(props.ID))}
		>
			<h3 className={style._listitem__title}>{props.Title}</h3>
			<p className={style._listitem__content}>{props.qContent}</p>
			<span className={style._listitem__author}>{user}</span>
		</div>
	);
};

export default QuestionListItem;
