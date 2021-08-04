const routes = {
	home: '/',
	login: '/login',
	list: '/questions',
	single: (id: string) => `/questions/${id}`,
	create: '/questions/new',
	edit: (id: string) => `/questions/edit/${id}`,
	notfound: '*',
};

export default routes;
