import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, ItemDetailPage, NotFoundPage } from '../pages/index'
import { PrivateRoute } from './PrivateRoute'

export function UserRouter () {
  return (
      <main>
        <Routes>
          <Route
            path='/Dashboard'
            element={
              //<PrivateRoute>
                <DashboardPage />
              //</PrivateRoute>
            }
          />
          <Route
            path='/movie/:id'
            element={
              // <PrivateRoute>
                <ItemDetailPage />
              // </PrivateRoute>
          }
          />
          <Route
            path='/*'
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
  )
}