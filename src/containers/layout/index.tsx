import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import UserBadge from '@components/userbadge';
import Sidebar from '@components/sidebar';
import Card from '@components/card';

import { RootState } from '@store/combineReducers';
import { ROUTES } from '~/routes';
import LayoutStyles from './layout.module.scss';

import { logoutActionRequest } from '@containers/login/actions';

export interface LayoutPropsType {
  children: React.ReactChild[];
}

const Layout: React.SFC<LayoutPropsType> = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userLogged = useSelector(({ auth: { user } }: RootState) => user);

  const cardLabel = {
    [ROUTES.DASHBOARD]: 'secret dashboard',
    [ROUTES.SETTINGS]: 'settings'
  };
  const iconLink = {
    [ROUTES.DASHBOARD]: 'far fa-check-circle',
    [ROUTES.SETTINGS]: 'fas fa-cog'
  };

  const links = [ROUTES.DASHBOARD, ROUTES.SETTINGS].map((r) => ({
    name: r.split('/')[1],
    isActive: location.pathname === r,
    pathname: r,
    icon: iconLink[r]
  }));
  const brand = links.find((l) => location.pathname === l.pathname);

  const onLogout = () => {
    dispatch(logoutActionRequest());
    history.replace(ROUTES.LOGIN);
  };

  return (
    <>
      <Sidebar brand={brand && brand.name} links={links} />
      <div className={LayoutStyles.layout_panel}>
        <div className={LayoutStyles.layout_panel_user}>
          <UserBadge
            onClick={onLogout}
            name={`${userLogged.firstname} ${userLogged.lastname}`}
            role={userLogged.role}
          />
        </div>
        <div className={LayoutStyles.layout_panel_card}>
          <Card label={cardLabel[brand.pathname]}>{children}</Card>
        </div>
      </div>
    </>
  );
};

export default Layout;
