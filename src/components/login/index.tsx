import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import * as yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { login } from '../../api';
import Login from '../../models/login';

import style from './login.module.scss';
import illustration from '../../assets/illustrations/login.svg';
import routes from '../../utils/appRoutes';
import User from '../../models/user';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorModel from '../../models/error';
import Response from '../../models/response';

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

const LoginForm = () => {
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values: Login) => {
			try {
				const response: Response<User> = await login(values);
				enqueueSnackbar(
					`Hello, ${response.data.firstname}. \nYou are now logged in successfully`,
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
		<div className={style._row}>
			<div className={style._container}>
				<img className={style._illustration} src={illustration} alt='Login' />
				<div className={style._formWrapper}>
					<form className={style._form} onSubmit={formik.handleSubmit}>
						<h3 className={style._form__title}>Login</h3>
						<TextField
							fullWidth
							id='email'
							name='email'
							label='Email'
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
							autoComplete='email'
							style={{ marginBottom: '2rem' }}
						/>
						<TextField
							fullWidth
							id='password'
							name='password'
							label='Password'
							type='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
							autoComplete='current-password'
							style={{ marginBottom: '2rem' }}
						/>
						<Button color='primary' variant='contained' fullWidth type='submit'>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
