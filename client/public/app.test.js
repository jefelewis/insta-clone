import React from 'react';
import App from './App.jsx';
import { mount, shallow } from 'enzyme';

describe('<App />', () => {
  it('Renders the App component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});