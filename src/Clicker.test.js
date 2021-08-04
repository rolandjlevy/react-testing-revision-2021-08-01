import React from 'react';
import '@testing-library/jest-dom';
import {
  getByRole,
  queryByRole,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Clicker from './Clicker';

describe('Should check changing values and events resulting from clicks', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  xit('Should check that header and buttons are being clicked and the counter is changing', () => {

    render(<Clicker />);

    screen.queryByRole('heading', { name: 'Counter: 0' });

    // click the increment button
    userEvent.click(
      screen.queryByRole('button', { name: 'increment' })
    );

    screen.queryByRole('heading', { name: 'Counter: 1' });

    // click the decrement button
    userEvent.click(
      screen.queryByRole('button', { name: 'decrement' })
    );

    screen.queryByRole('heading', { name: 'Counter: 0' });

    // expect(
    //   screen.queryByRole('heading')
    // ).toHaveTextContent(/counter: 1/i);

  });

  it('should make a single call to json placeholder API when the Load data button is clicked. Should display a single post after the click', async () => {

    const data = {
      userId: 1,
      id: 1,
      title: 'Mock title',
      body: 'Mock body text',
    }

    const mockAxios = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    
    render(<Clicker />);

    // Click the button to trigger the request for the post
    userEvent.click(
      screen.getByRole('button', { name: /load-data/i })
    );

    // Waits for the mock API call to resolve
    await waitFor(() => expect(mockAxios).toHaveBeenCalledTimes(1));

    expect(mockAxios).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );

  })
});