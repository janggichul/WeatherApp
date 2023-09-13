import MainPage from 'page/main/MainPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import LoginPage from 'page/login/LoginPage';
import SignUpPage from 'page/login/SignUpPage';
import ResetPassword from 'page/login/ResetPassword';
import WritingCreate from 'components/Community/WritingCreate';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Create" element={<WritingCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
