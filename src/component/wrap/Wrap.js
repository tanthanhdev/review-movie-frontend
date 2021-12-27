// import { FC } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export const Wrap = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
