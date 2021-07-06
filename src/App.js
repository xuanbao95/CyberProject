
import React from "react"
import { BrowserRouter, Route, Suspence, Switch } from "react-router-dom";
import { routerHome } from "./routers"
import Home from './Tix/Home';
import HomeTemplate from './Template/HomeTemplate';
import { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import Loading from "./component/Loading";
import DetailMovie from "./component/DetailMovie";
import TicketBooking from "./component/TicketBooking";
import UserTemplate from './Template/UserTemplate';
import AdminTemplate from './Template/AdminTemplate';
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory();
// import Detail from './Tix/Detail';
function App() {

  const showMenuHome = (routers) => {
    if (routers && routers.length > 0) {
      return routers.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}

          />

        )

      })
    }
  }
  var Snow = require("react-snow-effect")
  return (
    <BrowserRouter history={history}>
      <Snow />
      <Switch>
        <Suspense fallback={Loading}>
          {showMenuHome(routerHome)}
          <Route exact path="/detail/:id" Component={DetailMovie} />
          <Route path="/admin" exact component={AdminTemplate}></Route>
          <Route path="/user" exact component={UserTemplate}></Route>

        </Suspense>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
