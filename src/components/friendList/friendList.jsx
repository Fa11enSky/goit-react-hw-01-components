import css from './friendList.module.css';
import FriendListItem from 'components/friendListItem/friendListItem';

const FriendList = ({ friends }) => {
  const items = friends.map(friend => {
    return <FriendListItem key={friend.id} {...friend} />;
  });
  return <ul className={css.friend_list}>{items}</ul>;
};
export default FriendList;
