import { render } from '@testing-library/react';

import FeatAuth from './feat-auth';

describe('FeatAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatAuth />);
    expect(baseElement).toBeTruthy();
  });
});
