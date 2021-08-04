import QList from '../../components/question-list/index';

import style from './question.module.scss';

const QuestionsList = () => {
	return (
		<div className={style._row}>
			<div className={style._container}>
				<QList />
			</div>
		</div>
	);
};

export default QuestionsList;
