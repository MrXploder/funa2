import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/Default/Default.component'
import SimpleLayout from './layouts/Simple/Simple.component'

import ProtectedRoute from './router/Protected.component'

import './App.css'

const LandingPage = React.lazy(() => import('./pages/Landing/Landing.page'))
const HomePage = React.lazy(() => import('./pages/Home/Home.page'))

export default () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<SimpleLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      <Route path="/home" element={<DefaultLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
)