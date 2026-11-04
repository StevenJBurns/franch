import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import ProtectedRoute from "../../routes/ProtectedRoute.jsx";

import { UserContext } from "./App.jsx";
import PageHome from "../../pages/PageHome.jsx";
import PageRegister from "../../pages/PageRegister.jsx";
import PageLogin from "../../pages/PageLogin.jsx";
import PageFranchiseList from "../../pages/PageFranchiseList.jsx";
import PageFranchiseDetail from "../../pages/PageFranchiseDetail.jsx"
import PageFavorites from "../../pages/PageFavorites.jsx";
import Page404 from "../../pages/Page404.jsx";

const AppMain = (props) => {
  const {updateUser, changeFranchise, setFavoritesList} = React.useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>>
      <Route exact path="/login">
        <PageLogin updateUser={props.updateUser} />
      </Route>
      <Route exact path="/register">
        <PageRegister />
      </Route>
      <Route exact path="/franchises">
        <PageFranchiseList {...props}  />
      </Route>>
      <Route path="/franchises/:slug">
        <PageFranchiseDetail {...props} changeFranchise={changeFranchise} setFavoritesList={setFavoritesList} />
      </Route>
      <ProtectedRoute path="/favorites" component={PageFavorites} />
      <Route component={Page404} />
    </Switch>
  );
};

export default withRouter(AppMain);