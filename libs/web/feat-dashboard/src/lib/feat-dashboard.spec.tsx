import { render } from '@testing-library/react';

import FeatDashboard from './feat-dashboard';

describe('FeatDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
