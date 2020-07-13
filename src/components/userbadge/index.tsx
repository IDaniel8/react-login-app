import React from 'react';
import UserBadgeStyles from './userbadge.module.scss';

export interface UserBadgePropsType {
  name: string;
  role: string;
  onClick?: () => void;
}

const UserBadge: React.SFC<UserBadgePropsType> = ({ name, role, onClick }) => {
  return (
    <div className={UserBadgeStyles.user_container}>
      <div onClick={onClick} className={UserBadgeStyles.user_main} style={{ cursor: (onClick && 'pointer') || 'auto' }}>
        {name}
      </div>
      <div className={UserBadgeStyles.user_role}>{role}</div>
    </div>
  );
};

export default UserBadge;
