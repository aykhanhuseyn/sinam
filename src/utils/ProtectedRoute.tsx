import { FC, Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import User from '../models/user';
import Roles from '../models/roles';

interface Props extends Component<RouteProps<string>, any>, Roles {}

const ProtectedRoute: FC<Props> = ({ role, ...rest }) => {
  const user: User = JSON.parse(localStorage.getItem('user')!);
  if(user?.role === role) return <Route {...rest} />;
  return <Redirect to='/404' />
};

export default ProtectedRoute;
