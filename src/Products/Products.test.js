import renderer from 'react-test-renderer';
import Products from './Products';

test('renders when there are no items', () => {
    const tree = renderer.create(<Products/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders when there is one item', () => {
    const tree = renderer.create(<Products items={["Earth"]}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders when there are multiple item', () => {
    const tree = renderer.create(<Products items={['Earth', 'Sun', 'Moon', 'Saturn']}/>).toJSON();
    expect(tree).toMatchSnapshot();
})