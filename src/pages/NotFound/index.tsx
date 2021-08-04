import style from './notfound.module.scss';
import notfound from '../../assets/illustrations/404.svg';

const NotFound = () => {
	return (
		<div className={style._row}>
			<div className={style._container}>
				<img className={style._illustrate} src={notfound} alt='Page not found.' />
			</div>
		</div>
	);
};

export default NotFound;
