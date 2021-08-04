import IUser from '../models/user';

const users: Array<IUser> = [
	{
		id: '001',
		firstname: 'Aykhan',
		lastname: 'Huseyn',
		role: 'admin',
		email: 'aykhan@mail.com',
		password: 'hashedpassword',
	},
	{
		id: '002',
		firstname: 'Juan',
		lastname: 'Pablo',
		role: 'user',
		email: 'juan@mail.com',
		password: 'hashedpassword',
	},
];

export default users;
