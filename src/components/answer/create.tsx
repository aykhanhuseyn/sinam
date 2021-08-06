import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import * as yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Response from '../../models/response';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorModel from '../../models/error';
import style from './answer.module.scss';
import routes from '../../utils/appRoutes';
import User from '../../models/user';
import { createAnswer } from '../../api';
import Question from '../../models/question';

const validationSchema = yup.object({
	aContent: yup
		.string()
		.max(128, 'Content characters count have to be less than or equal to 128')
		.required('Answer content is required'),
	Vote_score: yup.number().required('Vote score is required'),
	User: yup.string(),
});

interface Props {
	id: number;
}

const CreateQuestion: FC<Props> = ({ id }) => {
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();

	const formik = useFormik({
		initialValues: {
			aContent: '',
			Vote_score: 0,
			User: '',
		},
		validationSchema,
		onSubmit: async (values: { aContent: string; Vote_score: number }) => {
			const user = JSON.parse(localStorage.getItem('user') as string) as User;

			try {
				const response: Response<Question> = await createAnswer(id, {
					...values,
					User: user.id,
				});
				enqueueSnackbar(
					`You have now successfully added new answer to question: ${response.data.ID}`,
					{ variant: 'success' }
				);
				history.push(routes.home);
				window.location.replace(routes.home);
			} catch (e: Response<ErrorModel> | any) {
				const message: string = e?.data?.error || 'Internal error was happened';
				enqueueSnackbar(message, { variant: 'error' });
			}
		},
	});

	return (
		<form className={style._form} onSubmit={formik.handleSubmit}>
			<h4 className={style._title}>Create Answer</h4>
			<TextField
				fullWidth
				id='aContent'
				name='aContent'
				label='Answer content'
				value={formik.values.aContent}
				onChange={formik.handleChange}
				error={formik.touched.aContent && Boolean(formik.errors.aContent)}
				helperText={formik.touched.aContent && formik.errors.aContent}
				style={{ marginBottom: '2rem' }}
			/>
			<TextField
				fullWidth
				id='Vote_score'
				name='Vote_score'
				label='Vote score'
				type='number'
				value={formik.values.Vote_score}
				onChange={formik.handleChange}
				error={formik.touched.Vote_score && Boolean(formik.errors.Vote_score)}
				helperText={formik.touched.Vote_score && formik.errors.Vote_score}
				style={{ marginBottom: '2rem' }}
			/>
			<Button color='primary' variant='contained' fullWidth type='submit'>
				Submit
			</Button>
		</form>
	);
};

export default CreateQuestion;
