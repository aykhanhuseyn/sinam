import style from './loading.module.scss';

const Loading = () => {
	return (
		<div className={style._root}>
			<div className={style._ellipsis}>
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

export default Loading;
