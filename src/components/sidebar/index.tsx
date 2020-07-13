import React from 'react';
import { Link } from 'react-router-dom';
import SidebarStyles from './sidebar.module.scss';

export interface SidebarPropsType {
  brand: string;
  links: {
    name: string;
    isActive: boolean;
    pathname: string;
    icon?: string;
  }[];
}

const Sidebar: React.SFC<SidebarPropsType> = ({ brand = 'sidebar', links = [] }) => {
  return (
    <div className={SidebarStyles.sidebar}>
      <h4 className={SidebarStyles.sidebar_brand}>{brand}</h4>
      <div className={SidebarStyles.sidebar_items_container}>
        {links.map((l, i) => (
          <Link
            className={`${SidebarStyles.sidebar_item} ${
              (l.isActive && SidebarStyles.sidebar_item_active) || ''
            }`.trim()}
            key={`${l.name.toLowerCase()}_${i}`}
            to={l.pathname}
          >
            {l.icon && <i className={l.icon}></i>}
            <span>{l.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
