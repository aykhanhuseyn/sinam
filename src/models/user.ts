import Roles from './roles';
import Login from './login';

interface User extends Login, Roles {
	id: string;
	firstname: string;
	lastname: string;
}

export default User;
