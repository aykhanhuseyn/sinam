import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { getQuestions } from '../../api';
import QuestionListItem from '../question-list/question';
import Question from '../../models/question';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Response from '../../models/response';
import routes from '../../utils/appRoutes';
import Answer from '../../models/answer';
import AnswerView from '../answer/view';
import AnswerCreate from '../answer/create';

type Params = {
	id: string;
};

const QuestionSingle = () => {
	const { id } = useParams<Params>();
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();
	const [question, setQuestion] = useState<Question>();
	const [answers, setAnswers] = useState<Array<Answer>>([]);

	useEffect(() => {
		(async () => {
			try {
				const response: Response<Question> = (await getQuestions(
					Number(id)
				)) as Response<Question>;
				setQuestion(response.data);
				setAnswers(response.data.Answers || []);
			} catch (e) {
				enqueueSnackbar('Page not found.', { variant: 'error' });
				history.push(routes.notfound);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
	return (
		<div>
			{question ? <QuestionListItem {...question} /> : null}
			{console.log('answers', answers)}
			{answers && answers?.length
				? answers.map((a, i) => <AnswerView key={i} {...a} />)
				: null}
			<AnswerCreate id={Number(id)} />
		</div>
	);
};

export default QuestionSingle;
