import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import { useAuth } from "../AuthProvider";
import Chatbot from "react-chatbot-kit";
import ChatbotUi from "../components/Chatbot/Chatbot";

const Router = () => {
  const {isAuthenticated} = useAuth();
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      {isAuthenticated && (<ChatbotUi />)}
      <Footer />
    </Suspense>
  );
};

export default Router;
