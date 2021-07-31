import { FC } from 'react';
import Header from '../header';
import Footer from '../footer';

import style from './layout.module.scss';

const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<main className={style._main}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
