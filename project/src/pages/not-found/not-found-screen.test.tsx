import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';

const mockStore = configureMockStore();

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
