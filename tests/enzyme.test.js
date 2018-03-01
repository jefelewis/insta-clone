// Requirements: React
import React from 'react';
import ReactDOM from 'react-dom';

// Requirements: Enzyme
import {mount, shallow} from 'enzyme'

// Requirements: Components
import { App } from '../client/public/App.jsx';
// import { Banner } from '../client/public/components/Banner.jsx';
// import { View } from '../client/public/components/View.jsx';
// import { Postlist } from '../client/public/components/views/Postlist.jsx';


// Tests: App Component
describe('<App />', () => {

  it('Should render correctly', () => {
    let component = shallow(<App />);
    expect(component).toHaveLength(1);
  });

  it('Should have the default state as active', () => {
    let component = shallow(< App/>);

  });  

  it('Should include the Banner component', () => {
    let component = shallow(<App />);
    expect(component.contains('Banner').toBe(true));
  });

  it('Should include the View component', () => {
    let component = shallow(<App />);
    expect(component.contains('View').toBe(true));
  });

  it('Should include the Postlist component', () => {
    let component = shallow(<App />);
    expect(component.contains('Postlist').toBe(true));
  });
});


// Tests: Banner Component
describe('<Banner />', () => {

  it('Should include the TopshelfPic component', () => {
    let component = shallow(Banner);
    expect(component.contains('TopshelfPic').toBe(true));
  });

  it('Should include the Search component', () => {
    let component = shallow(Banner);
    expect(component.contains('Search').toBe(true));
  });

  it('Should include the Detail component', () => {
    let component = shallow(Banner);
    expect(component.contains('Detail').toBe(true));
  });
});


// Tests: TopshelfPic Component
describe('<TopshelfPic />', () => {

  it('Should include the image with the correct path', () => {
    expect(component.find('img').attr('src')).toEqual(IMAGE_PATH); 
  });

  it('Should render the logo image', () => {

  });

});


// Tests: Details Component
describe('<Details />', () => {

  it('Should include the link to Homepage', () => {

  });

  it('Should include the link to User', () => {

  });

  it('Should include the logout button if logged in', () => {

  });

  it('Should not include the logout button if logged out', () => {

  });
});


// Tests: Search Component
describe('<Search />', () => {

  it('Should include the input field', () => {

  });

  it('Should include the Submit button', () => {
    
  });
});