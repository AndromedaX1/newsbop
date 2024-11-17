import './UserAvatar.css';

const UserAvatar = ({ size = 'large' }) => {
  return (
    <div className={`user-avatar ${size}`}>
      <i className="fas fa-user"></i>
    </div>
  );
};

export default UserAvatar;
