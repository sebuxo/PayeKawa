import React from 'react';
import { render, waitFor } from '../../node_modules/@testing-library/react-native';

import CustomersScreen from '../../screens/CustomersScreen';
describe('CustomersScreen', () => {
  test('renders loading text when data is not available', async () => {
    const { getByText } = render(<CustomersScreen />);

    const loadingText = getByText('Loading data...');
    expect(loadingText).toBeTruthy();
  });

  test('renders customer data when data is available', async () => {
    const mockData = [
      { _id: '1', createdAt: '2017-06-27T08:56:14 -02:00', name: 'Jill Weeks' },
    ];
    
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const { getByText, getByTestId } = render(<CustomersScreen />);

    await waitFor(() => {
      const customer1Name = getByText('Jill Weeks');
      expect(customer1Name).toBeTruthy();
    });
  });
});
