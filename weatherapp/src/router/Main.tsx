import Community from 'community/Community';
import Footer from 'layouts/Footer';
import Nav from 'layouts/Nav';
import MainPage from 'page/main/MainPage';
import Profile from 'page/profile/Profile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <div style={{ width: '100%', height: '0' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
