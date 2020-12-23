import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TodoContainer } from './todo-container';

describe('#TodoContainer', function () {
  it('should add item', async function () {
    const { container, getByLabelText, getByRole } = render(<TodoContainer />);

    const inputText = 'Item 42';

    fireEvent.change(getByLabelText('Add items'), {
      target: { value: inputText },
    });
    fireEvent.click(getByRole('button'));

    expect(container).toHaveTextContent(inputText);
  });
});
