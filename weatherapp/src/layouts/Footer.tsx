import { isLoginState } from 'atoms/atom';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';

export default function Footer() {
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);
  const navigate = useNavigate();

  const handleProfileButton = () => {
    if (!isLogin) {
      Swal.fire({
        text: '로그인을 한 후 이용 가능합니다.',
        width: 350,
        padding: 10,
        confirmButtonText: '확인',
      });
    } else {
      navigate('/Profile');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 antialiased">
      <div
        className="flex flex-col shadow-xl bg-white overflow-scroll"
        style={{ width: '411px' }}
      >
        <div className="flex flex-col">
          <div className="sticky pt-2 pb-4 bg-white bottom-0 flex flex-row justify-between px-5 border-t border-gray-300">
            <div className="flex-col flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p className="text-xxsm font-semibold text-gray-800">Explore</p>
            </div>
            <div className="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
              <p className="text-xxsm font-regular">Whislists</p>
            </div>
            <div className="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"></path>
                <path d="M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"></path>
                <path d="M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"></path>
                <path d="M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"></path>
                <path d="m7 17-5 5"></path>
              </svg>
              <p className="text-xxsm font-regular">Trips</p>
            </div>
            <div className="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p className="text-xxsm font-regular">Inbox</p>
            </div>
            <button
              className="flex-col flex items-center text-gray-400"
              onClick={handleProfileButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <p className="text-xxsm font-regular">Profile</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
