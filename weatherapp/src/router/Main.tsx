// import Community from 'community/Community';
import ChatBox from 'components/Chatting/ChatBox';
import WritingCreate from 'components/Community/WritingCreate';
import Footer from 'layouts/Footer';
import Nav from 'layouts/Nav';
import Community from 'page/community/Community';
import MainPage from 'page/main/MainPage';
import Profile from 'page/profile/Profile';
import { Route, Routes } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <div style={{ width: '100%', height: '0' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Chatting" element={<ChatBox />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
