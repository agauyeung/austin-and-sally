import React from 'react';
import { render } from '@testing-library/react';
import OurStory from './OurStory';

test('renders learn react link', () => {
  const { getByText } = render(<OurStory />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
