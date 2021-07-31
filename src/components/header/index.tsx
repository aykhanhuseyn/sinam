import styles from './header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {
	return (
		<header className={styles._row}>
			<div className={styles._container}>
				<img className={styles._logo} src={logo} alt='Questionary' />
				<div className={styles._user}>
					<span className={styles._user__name}>User</span>
					<img src='' alt='avatar' className={styles._user__avatar} />
				</div>
			</div>
		</header>
	);
};

export default Header;
