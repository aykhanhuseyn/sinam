import style from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={style._row}>
			<div>
				<p className={style._copy}>&copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
