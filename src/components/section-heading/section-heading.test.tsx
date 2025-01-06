import { render, screen } from '@test-utils';
import { describe, expect, test } from 'bun:test';
import SectionHeading from './section-heading';

describe('<SectionHeading />', () => {
  test('Renders a heading', () => {
    render(<SectionHeading text="Section Heading" />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /Section Heading/i,
    });

    expect(heading).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<SectionHeading text="Section Heading" />);
    expect(asFragment).toMatchSnapshot();
  });
});
