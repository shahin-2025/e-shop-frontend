import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSiteSettings } from '../redux/slices/siteSettingsSlice';

const CoustomerLayout = () => {
 const dispatch = useDispatch();
  const { settings, loading } = useSelector((state) => state.siteSettings);
  console.log(settings)
  useEffect(() => {
    dispatch(fetchSiteSettings());
  }, [dispatch]);
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default CoustomerLayout