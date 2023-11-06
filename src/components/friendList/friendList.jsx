import css from './friendList.module.css';
import FriendListItem from 'components/friendListItem/friendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem def={friends} />
    </ul>
  );
};
export default FriendList;
