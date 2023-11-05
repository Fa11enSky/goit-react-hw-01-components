import Statistics from './statistic/statistic';
import Profile from './user_profile/profile';
import user from './user_profile/user.json';
import stats from './statistic/data.json';
import friends from './friendList/friends.json'
import FriendList from './friendList/friendList';
import transactions from './transactionHistory/transactions.json'
import TransactionHistory from './transactionHistory/transactionHistory';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '20px',
        backgroundColor:'rgb(220, 220, 220)'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
