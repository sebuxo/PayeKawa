import React from 'react';
import { render, waitFor } from '../../node_modules/@testing-library/react-native';
import ProductScreen from '../../screens/ProductScreen';

describe('ProductScreen', () => {
  test('renders loading text when data is not available', async () => {

    const { getByText } = render(<ProductScreen />);

    const loadingText = getByText('Loading data...');
    expect(loadingText).toBeTruthy();
  });

  test('renders product data when data is available', async () => {
    const mockData = [
        {
            _id: '0',
            name: "Carmela Alvarado",
            createdAt: "2018-03-24T05:53:15 -01:00",
            stock: 3841,
            details: {
                price: 10359.32,
                description: "Officia deserunt ad cillum aliqua.",
                color: "magenta"
            },
          },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockData),
      });
  
      const { getByText, getByTestId } = render(<ProductScreen />);


    await waitFor(() => {
      const product1Name = getByText('Carmela Alvarado');
      expect(product1Name).toBeTruthy();
    });
  });
});
