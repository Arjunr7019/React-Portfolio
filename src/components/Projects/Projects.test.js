import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
    test('renders each project with accessible images and links', () => {
        render(<Projects />);

        expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
        expect(screen.getAllByRole('article')).toHaveLength(9);
        expect(screen.getAllByText('View Project')).toHaveLength(9);

        screen.getAllByRole('img').forEach((image) => {
            expect(image).toHaveAccessibleName();
            expect(image).toHaveAttribute('loading', 'lazy');
        });

        expect(screen.getByRole('link', { name: 'View Online Code Editor' })).toHaveAttribute(
            'href',
            'https://arjunr7019.github.io/online-code-editor/',
        );
        expect(screen.getAllByRole('link', { name: /APK file/i })).toHaveLength(1);
    });
});
