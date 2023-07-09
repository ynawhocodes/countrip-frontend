import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ----------------------------------------common----------------------------------------
// sign up
import SelectUserTypeView from './pages/signUp/SelectUserTypeView'
import TermsOfUseAgreeView from './pages/signUp/traveler/TermsOfUseAgreeView'
import TermsOfUseView from './pages/signUp/traveler/TermsOfUseView'
import IdentityVerificationView from './pages/signUp/traveler/IdentityVerificationView'
import SignUpCompleteView from './pages/signUp/SignUpCompleteView'
// sign in
import SignInView from './pages/signIn/SignInView'
// ----------------------------------------traveler----------------------------------------
// home
import TravelerHomeView from './pages/home/traveler/TravelerHomeView'
import SearchResultView from './pages/home/traveler/SearchResultView';
// course
import TravelCourseListView from './pages/course/TravelCourseListView';
import TravelCourseView from './pages/course/TravelCourseView'
// magazine
import MagazineHomeView from './pages/magazine/traveler/MagazineHomeView';
import MagazineListView from './pages/magazine/traveler/MagazineListView';
import MagazineSearchView from './pages/magazine/traveler/MagazineSearchView';
import MagazineSearchResultView from './pages/magazine/traveler/MagazineSearchResultView';
// ----------------------------------------guide----------------------------------------
// home
import GuideHomeView from './pages/home/guide/GuideHomeView';

import TravelerTypeSignUpRouter from './pages/signUp/traveler/TravelerTypeSignUpRouter';
const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/signup/*" element={<TravelerTypeSignUpRouter />}/>
      <Route path="/signup/complete" element={<SignUpCompleteView />} />
      <Route path="/signin" element={<SignInView />} />
      {/* traveler 일 경우 */}
      <Route path="/" element={<TravelerHomeView />} />
      <Route path="/" element={<SearchResultView />} />
      <Route path="/" element={<TravelCourseListView />} />
      <Route path="/course" element={<TravelCourseView />} />
      <Route path="/" element={<MagazineHomeView />} />
      <Route path="/" element={<MagazineListView />} />
      <Route path="/" element={<MagazineSearchView />} />
      <Route path="/" element={<MagazineSearchResultView />} />
      {/* guide 일 경우 */}
      <Route path="/" element={<GuideHomeView />} />
    </Routes>
  </BrowserRouter>
);
export default Router;