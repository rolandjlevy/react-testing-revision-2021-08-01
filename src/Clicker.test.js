import React from 'react';
import { render, screen, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Clicker from './Clicker';

beforeEach(() => {
  configure({
    throwSuggestions: true,
  })
});

describe('Should check changing values and events resulting from clicks', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should check that header and buttons are being clicked and the counter is changing', () => {

    render(<Clicker />);

    screen.queryByRole('heading', { name: 'Counter: 0' });

    const buttons = screen.queryAllByRole('button');

    // click the increment button
    userEvent.click(buttons[0]);

    // WHY DOESN'T THIS WORK?
    // userEvent.click(
    //   screen.queryByRole('button', { name: 'increment' })
    // );

    screen.queryByRole('heading', { name: 'Counter: 1' });

    // click the decrement button
    userEvent.click(buttons[1]);

    screen.queryByRole('heading', { name: 'Counter: 0' });

    // expect(
    //   screen.queryByRole('heading')
    // ).toHaveTextContent(/counter: 1/i);

  });

  it('should load data from the jsonplaceholder API', async () => {

  })
});