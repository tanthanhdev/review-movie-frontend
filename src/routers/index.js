// import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $authStore } from '../services';
import {
  HomePage,
  LoginPage,
  FilterPage,
  MoviePage,
  SingUpPage,
  VerificationPage,
  ProfilePage,
  // SignUpPage,
  // JobsPage,
} from '../views';

import { NotFound, } from '../templates'

export const useRoutes = () => {
  const authToken = localStorage.getItem('access_token');
  const authStore = useStore($authStore);

  const protectedRouteProfile = (Component) => {
    return authToken || authStore.access_token ? Component : <Route path="/profile" element={<Navigate to="/" />} />;
  };

  const protectedRouteLogin = (Component) => {
    return authToken || authStore.access_token ? Component : <Route path="/login" element={<Navigate to="/" />} />;
  };

  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/movie/:slug" element={<MoviePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/active-account" element={<VerificationPage />} />
        {/* <Route path="/signup" render={() => <SignUpPage />} /> */}
        {/* <Route path="/create-job-ssuccess" render={() => <CreateJobSuccessPage />} /> */}
        {/* <Route path="/create-jobs/:name/:id" render={() => <CreateJobPage />} /> */}
        {/* <Route path="/jobs" render={() => <JobsPage />} /> */}
        {/* <Route path="/company/:name/:id" render={() => <CompanyPage />} /> */}
        {/* <Route path="/messages" render={() => <MessagesPage />} /> */}
        {/* <Route path="/rating" render={() => <RatingPage />} /> */}
        {/* <Route path="/price-list/:category" render={() => <TopPerformersPage />} /> */}
        {/* <Route path="/price-list" render={() => <PriceListPage />} /> */}
        {protectedRouteLogin(<Route path="/login" element={<HomePage />} />)}
        {protectedRouteProfile(<Route path="/profile" element={<ProfilePage />} />)}
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

