import React from 'react';

import { SimpleButton } from './button';
import { render } from '@testing-library/react';

describe('<SimpleButton/>', function () {
  it('should render correctly', function () {
    const { container } = render(<SimpleButton onClick={() => null} />);

    expect(container).toMatchSnapshot();
  });
});
