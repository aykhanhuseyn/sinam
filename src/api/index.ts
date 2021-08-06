import users from '../data/users';
import Login from '../models/login';
import User from '../models/user';
import Response from '../models/response';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorModel from '../models/error';
import Question from '../models/question';
import Answer from '../models/answer';
import questions from '../data/questions';

export function login(user: Login) {
	return new Promise(
		(
			resolve: (value: Response<User>) => void,
			reject: (reason: Response<ErrorModel>) => void
		) => {
			setTimeout(() => {
				const authorized: User | undefined = users.find(
					(u) => u.email === user.email && u.password === user.password
				);
				if (authorized) {
					localStorage.setItem('user', JSON.stringify(authorized));
					const response: Response<User> = { status: 200, data: authorized };
					resolve(response);
				} else {
					const response: Response<ErrorModel> = {
						status: 404,
						data: { error: 'Username or password are incorrect.' },
					};
					reject(response);
				}
			}, 500);
		}
	);
}

export function getUser(id: string) {
	return new Promise(
		(
			resolve: (value: Response<User>) => void,
			reject: (reason: Response<ErrorModel>) => void
		) => {
			setTimeout(() => {
				const user: User | undefined = users.find((u) => u.id === id);
				if (user) {
					const response: Response<User> = { status: 200, data: user };
					resolve(response);
				} else {
					const response: Response<ErrorModel> = {
						status: 404,
						data: { error: 'User not found.' },
					};
					reject(response);
				}
			}, 200);
		}
	);
}

const map = new Map();
export function cachedGetUser(id: string) {
	if (map.has(id)) return map.get(id);

	(async () => {
		try {
			const r: Response<User> = await getUser(id);
			map.set(id, r.data);
		} catch (e: Response<ErrorModel> | any) {
			throw new Error(e.data.error || 'Internal error occured');
		}
	})();
}

export function getQuestions(id?: number) {
	return new Promise(
		(
			resolve: (value: Response<Question | Array<Question>>) => void,
			reject: (reason: Response<ErrorModel>) => void
		) => {
			setTimeout(() => {
				if (id === undefined) {
					const response: Response<Array<Question>> = {
						status: 200,
						data: questions,
					};
					resolve(response);
					return;
				}

				const question: Question | undefined = questions.find((u) => u.ID === id);
				if (question) {
					const response: Response<Question> = { status: 200, data: question };
					resolve(response);
				} else {
					const response: Response<ErrorModel> = {
						status: 404,
						data: { error: 'Question not found.' },
					};
					reject(response);
				}
			}, 2000);
		}
	);
}

export function createAnswer(id: number, answer: Answer) {
	return new Promise(
		(
			resolve: (value: Response<Question>) => void,
			reject: (reason: Response<ErrorModel>) => void
		) => {
			setTimeout(() => {
				const question: Question | undefined = questions.find((u) => u.ID === id);
				if (question) {
					question.Answers.push(answer);
					const response: Response<Question> = { status: 200, data: question };
					resolve(response);
				} else {
					const response: Response<ErrorModel> = {
						status: 404,
						data: { error: 'Question not found.' },
					};
					reject(response);
				}
			}, 200);
		}
	);
}
