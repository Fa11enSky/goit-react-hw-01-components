import css from './friendList.module.css';
import FriendListItem from 'components/friendListItem/friendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
export default FriendList;
