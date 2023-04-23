import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
    it('Renders hello world', () => {
        // ARRANGE
        render(<Home />);
        // ACT
        // EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello world!');
    });
});
