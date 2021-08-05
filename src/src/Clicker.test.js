import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  waitFor,
  logRoles
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Clicker from './Clicker';

describe('Should check changing values and events resulting from clicks', () => {

  it('Should check that header and buttons are being clicked and the counter is changing', () => {

    const { container } = render(<Clicker />);
    logRoles(container);

    screen.getByRole('heading', { name: 'Counter: 0' });

    // click the increment button
    userEvent.click(
      screen.getByRole('button', { name: 'increment' })
    );

    screen.getByRole('heading', { name: 'Counter: 1' });

    // click the decrement button
    userEvent.click(
      screen.getByRole('button', { name: 'decrement' })
    );

    screen.getByRole('heading', { name: 'Counter: 0' });

  });

});