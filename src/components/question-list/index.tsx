import { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { getQuestions } from '../../api';
import Question from '../../models/question';
import QuestionListItem from './question';
import style from './question.module.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Response from '../../models/response';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorModel from '../../models/error';

const Questions = () => {
	const [questions, setQuestions] = useState<Array<Question>>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const result = await getQuestions();
				setQuestions(result.data as Array<Question>);
			} catch (e: Response<ErrorModel> | any) {
				console.log(e?.data?.error);
				setQuestions([]);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<>
			<h3 className={style._title}>Questions list</h3>

			{loading ? (
				[1, 2, 3].map((_, i) => (
					<Skeleton
						key={i}
						variant='rect'
						height={91}
						animation='pulse'
						style={{ width: '100%', borderRadius: '20px', marginBottom: '20px' }}
					/>
				))
			) : questions.length ? (
				questions.map((v, i) => <QuestionListItem key={i} {...v} />)
			) : (
				<div>Empty</div>
			)}
		</>
	);
};

export default Questions;
