import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import User from '../../models/user';

const Header = () => {
	const user: User = JSON.parse(localStorage.getItem('user')!);

	return (
		<header className={styles._row}>
			<div className={styles._container}>
				<img className={styles._logo} src={logo} alt='Questionary' />
				<div className={styles._user}>
					<span className={styles._user__name}>User</span>
					<img
						alt='avatar'
						src={`https://ui-avatars.com/api/?name=${user?.firstname}+${user?.lastname}`}
						className={styles._user__avatar}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
