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

import GetPosts from './GetPosts';

describe('Should make a call to the json placeholder API and display the posts', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should load the posts', async () => {

    render(<GetPosts />);

    screen.getByRole('button', { name: 'Load posts'});

    const data = [
      {
        userId: 1,
        id: 1,
        title: "mock title 1",
        body: "mock body 1"
      },
      {
        userId: 2,
        id: 2,
        title: "mock title 2",
        body: "mock body 2"
      }
    ];

    const mockAxios = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    userEvent.click(
      screen.getByRole('button', { name: 'Load posts'})
    )

    await waitFor(() => expect(mockAxios).toHaveBeenCalledTimes(1));

    expect(mockAxios).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

    screen.getByRole('heading', { name: 'Title 1: mock title 1' });
    screen.getByRole('heading', { name: 'Title 2: mock title 2' });
  });

});