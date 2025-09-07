import React from 'react'
import { routePaths } from '@/shared';


const HomePage = React.lazy(() => import('@/pages').then(message => ({ default: message.HomePage })));
const SignUpPage = React.lazy(() => import('@/pages').then(message => ({ default: message.SignUpPage})));
const SignInPage = React.lazy(() => import('@/pages').then(message => ({ default: message.SignInPage})));
const SettingsProfilePage = React.lazy(() => import('@/pages').then(message => ({default: message.SettingsProfilePage})))
const ProfilePage = React.lazy(() => import('@/pages').then(message => ({default: message.ProfilePage})))
const CreateArticlePage = React.lazy(() => import('@/pages').then(message => ({default: message.CreateArticlePage})))
const ArticlePage = React.lazy(() => import('@/pages').then(message => ({default: message.ArticlePage})))
const EditArticlePage = React.lazy(() => import('@/pages').then(message => ({default: message.EditArticlePage})))



const routes = [
  {path: routePaths.HOME, element: <HomePage />},
  {path: routePaths.SIGNUP, element: <SignUpPage />},
  {path: routePaths.SIGNIN, element: <SignInPage />},
  {path: routePaths.SETTINGS_PROFILE, element: <SettingsProfilePage />},
  {path: routePaths.PROFILE, element: <ProfilePage />},
  {path: routePaths.CREATE_ARTICLE, element: <CreateArticlePage />},
  {path: routePaths.ARTICLE, element: <ArticlePage />},
  {path: routePaths.EDIT_ARTICLE, element: <EditArticlePage />}
]

export default routes