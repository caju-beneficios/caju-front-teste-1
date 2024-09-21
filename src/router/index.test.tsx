import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import routes from './routes';

import RouterComponent from './index';

jest.mock('~/pages/Dashboard', () => () => <div>Dashboard Page</div>);
jest.mock('~/pages/NewUser', () => () => <div>New User Page</div>);

describe('Router Component', () => {
  const renderWithRouter = (initialRoute = routes.dashboard) => {
    const history = createMemoryHistory({ initialEntries: [initialRoute] });

    render(
      <Router history={history}>
        <RouterComponent />
      </Router>
    );
    return { history };
  };

  it('should render the DashboardPage when navigating to the dashboard route', () => {
    renderWithRouter(routes.dashboard);
    expect(screen.getByText(/Dashboard Page/i)).toBeInTheDocument();
  });

  it('should redirect to the DashboardPage when navigating to an unknown route', () => {
    renderWithRouter('/caju');
    expect(screen.getByText(/Dashboard Page/i)).toBeInTheDocument();
  });
});
