import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  waitFor,
  logRoles
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

import GetPost from './GetPost';

describe('Should check changing values and events resulting from clicks', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make a single call to json placeholder API when the Load data button is clicked. Should display a single post after the click', async () => {

    const data = {
      userId: 1,
      id: 1,
      title: 'Mock title',
      body: 'Mock body text',
    }

    const mockAxios = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    
    render(<GetPost />);

    // Click the button to trigger the request for the post
    userEvent.click(
      screen.getByRole('button', { name: 'Load data'})
    );

    // Waits for the mock API call to resolve
    await waitFor(() => expect(mockAxios).toHaveBeenCalledTimes(1));

    expect(mockAxios).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );

    screen.getByRole('heading', { name: 'Title: Mock title' });
    screen.getByRole('heading', { name: 'Body: Mock body text' });

  })
});