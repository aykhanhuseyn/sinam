import QuestionSingle from '../../components/question-single';
import style from './question.module.scss';

const SingleQuestion = () => {
	return (
		<div className={style._row}>
			<div className={style._container}>
				<QuestionSingle />
			</div>
		</div>
	);
};

export default SingleQuestion;
