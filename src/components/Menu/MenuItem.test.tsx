import MenuItem from './MenuItem';
//sample

describe('[components] - Cart', () => {
  const setup = () => {
    return (
        <MenuItem title='Test' to='/test'/>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});