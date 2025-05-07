import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      style={{
        display: 'inline-block',
        padding: '8px 24px',
        transition: 'background 0.2s ease',
        borderRadius: '9999px',
        cursor: 'pointer',   
      }}
      onClick={logoutHandler}
      onMouseEnter={(e) => (e.target.style.backgroundColor = '#d3d3d3')} // Darker gray on hover
      onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')} // Back to light gray
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
 