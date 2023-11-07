import clsx from 'clsx';
import css from './index.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, isOnline ? css.online : css.offline)}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
