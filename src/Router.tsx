import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { USER_TYPE } from "./constants";
// ----------------------------------------common----------------------------------------
// sign up
import SelectUserTypeView from "./pages/signUp/SelectUserTypeView";
import TermsOfUseAgreeView from "./pages/signUp/TermsOfUseAgreeView";
import TermsOfUseView from "./pages/signUp/TermsOfUseView";
import IdentityVerificationView from "./pages/signUp/IdentityVerificationView";
import SignUpCompleteView from "./pages/signUp/SignUpCompleteView";
import TravelerTypeSignUpRouter from "./pages/signUp/TravelerTypeSignUpRouter";
// sign in
import SignInView from "./pages/signIn/SignInView";
// ----------------------------------------traveler----------------------------------------
// home
import TravelerHomeView from "./pages/home/traveler/TravelerHomeView";
import SearchResultView from "./pages/home/traveler/SearchResultView";
// course
import TravelCourseListView from "./pages/course/TravelCourseListView";
import TravelCourseView from "./pages/course/TravelCourseView";
// magazine
import MagazineHomeView from "./pages/magazine/traveler/MagazineHomeView";
import MagazineListView from "./pages/magazine/traveler/MagazineListView";
import MagazineSearchView from "./pages/magazine/traveler/MagazineSearchView";
import MagazineSearchResultView from "./pages/magazine/traveler/MagazineSearchResultView";
import TravelSpotView from "./pages/course/TravelSpotView";
// ----------------------------------------guide----------------------------------------
// home
import GuideHomeView from "./pages/home/guide/GuideHomeView";
// myguide
import MyGuideView from "./pages/myguide/MyGuideView";
// mycourse
import MyCourseView from "./pages/mycourse/MyCourseView";
import MyTripView from "./pages/mytrip/MyTripView";
import WriteCoursesView from "./pages/mycourse/WriteCourseView";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // TODO: 변수명 수정
  const [USERTYPE, setUSERTYPE] = useState<string>("");

  useEffect(() => {
    (async () => {
      const accessToken: string | null = await localStorage.getItem(
        "accessToken"
      );
      if (accessToken == null || accessToken === "") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    })();
    (async () => {
      const userType: string | null = await localStorage.getItem("userType");
      if (userType == null || userType === "") {
        setUSERTYPE("");
      } else {
        setUSERTYPE(userType);
      }
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/" element={<SignInView />} />
              {/* TODO: Route 구조 변경 */}
              {/* <Route path="/signup/*" element={<TravelerTypeSignUpRouter />} /> */}
              <Route path="/signup" element={<SelectUserTypeView />} />
              <Route path="/signup/step2" element={<TermsOfUseAgreeView />} />
              <Route path="/signup/step2/detail" element={<TermsOfUseView />} />
              <Route
                path="/signup/step3"
                element={<IdentityVerificationView />}
              />
              <Route path="/signup/complete" element={<SignUpCompleteView />} />
            </>
          )}
          {isLoggedIn && (
            <>
              {USERTYPE === `${USER_TYPE.GUIDE}` && (
                <>
                  <Route path="/" element={<GuideHomeView />} />
                  <Route path="/home" element={<GuideHomeView />} />
                  <Route path="/myguide" element={<MyGuideView />} />
                  <Route path="/mycourse" element={<MyCourseView />} />
                  <Route path="/mycourse/write" element={<WriteCoursesView />}
                  />
                </>
              )}
              {USERTYPE === `${USER_TYPE.TRAVELER}` && (
                <>
                  <Route path="/" element={<TravelerHomeView />} />
                  <Route path="/home" element={<TravelerHomeView />} />
                  <Route path="/search" element={<SearchResultView />} />
                  <Route path="/magazine" element={<MagazineHomeView />} />
                  {/* <Route path="/magazine/all" element={<MagazineListView />} /> */}
                  {/* <Route path="/magazine/:id" element={<MagazineListView />} /> */}
                  <Route
                    path="/magazine/search"
                    element={<MagazineSearchView />}
                  />
                  <Route
                    path="/magazine/search/result"
                    element={<MagazineSearchResultView />}
                  />
                  <Route path="/magazine/:id" element={<TravelSpotView />} />
                  <Route path="/mytrip" element={<MyTripView />} />
                </>
              )}{" "}
              <Route path="/course/all" element={<TravelCourseListView />} />
              <Route path="/course/:courseId" element={<TravelCourseView />} />
              <Route path="/trip/:id" element={<MagazineListView />} />
              <Route path="/spot/:courseId" element={<TravelSpotView />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
