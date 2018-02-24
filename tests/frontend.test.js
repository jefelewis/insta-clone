// Requirements: React
import React from 'react';

// Requirements: Enzyme
import {shallow, mount, render}  from 'enzyme';

// Requirements: Components
import App from '../client/public/App.jsx';


// Tests: App Component
describe('<App />', () => {

  it('Should include the Banner component', () => {
  });

  it('Should include the View component', () => {
  });

  it('Should include the Postlist component', () => {
  });
});




// Tests: Banner Component
describe('<Banner />', () => {

  it('Should include the TopshelfPic component', () => {
  });

  it('Should include the Search component', () => {
  });

  it('Should include the Detail component', () => {
  });
});




// Tests: TopshelfPic Component
describe('<TopshelfPic />', () => {

  it('Should include the image tag', () => {
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