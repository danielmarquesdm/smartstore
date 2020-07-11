import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/carrinho" component={Cart} />
      <Route path="/pagamento" component={Payment} />
    </Switch>
  );
}
