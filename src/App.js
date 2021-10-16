import Section from "./Components/Section/Section";

import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

import AppBar from "./Components/AppBar";
import { operations } from "./redux/Auth";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactViews = lazy(() => import("./views/ContactView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <AppBar />

      <Switch>
        <Suspense fallback={null}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactViews />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Section>
  );
}
