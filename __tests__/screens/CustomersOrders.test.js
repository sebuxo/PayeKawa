import React from 'react';
import { render, waitFor } from '../../node_modules/@testing-library/react-native';
import CustomersOrders from '../../screens/CustomersOrders';


describe('CustomersOrders', () => {
  test('renders loading text when orders data is not available', async () => {
    const { getByText } = render(<CustomersOrders />);

    const loadingText = getByText('Loading data...');
    expect(loadingText).toBeTruthy();
  });

  test('renders orders data when data is available', async () => {
    const mockData = [
      {
        _id: '0',
        createdAt: '2020-05-19T08:17:30 -02:00',
        customerId: '0',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockData),
      });

    const { getByText } = render(<CustomersOrders />);

    await waitFor(() => {
      const CustomerId = getByText('0');
      expect(CustomerId).toBeTruthy();
    });
  });
});
