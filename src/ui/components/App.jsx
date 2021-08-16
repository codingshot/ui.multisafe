import { Switch, Route } from 'react-router-dom';
import { Welcome } from './Welcome/Welcome';
import { ConnectWallet } from './ConnectWallet/ConnectWallet';
import { Main } from './Main/Main';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { Error } from './Error/Error';
import { routes } from '../config/routes';

export const App = () => (
  <>
    <Switch>
      <Route exact path={routes.welcome} component={Welcome} />
      <Route
        exact
        path={[routes.connectWallet, routes.connectLedger, routes.selectLedgerAccount]}
        component={ConnectWallet}
      />
      <Route
        exact
        path={[
          routes.getStarted,
          routes.createMultisafe,
          routes.loadMultisafe,
          routes.dashboard,
          routes.history,
          routes.members,
        ]}
        component={Main}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Error />
  </>
);
