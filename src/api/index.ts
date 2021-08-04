import users from '../data/users';
import Login from '../models/login';
import User from '../models/user';
import Response from '../models/response';
import Error from '../models/error';

export function login(user: Login) {
	return new Promise(
		(
			resolve: (value: Response<User>) => void,
			reject: (reason: Response<Error>) => void
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
					const response: Response<Error> = {
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
			reject: (reason: Response<Error>) => void
		) => {
			setTimeout(() => {
				const user: User | undefined = users.find((u) => u.id === id);
				if (user) {
					const response: Response<User> = { status: 200, data: user };
					resolve(response);
				} else {
					const response: Response<Error> = {
						status: 404,
						data: { error: 'User not found.' },
					};
					reject(response);
				}
			}, 200);
		}
	);
}
