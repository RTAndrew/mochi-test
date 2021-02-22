import { renderHook } from '@testing-library/react-hooks';

import useGoogleSignIn from './use-google-sign-in';

const DIV = document.createElement('div');

const UseGoogleSignInProps = {
  buttonId: 'google-signin-button',
  onSuccess: () => {},
  onFailure: () => {},
};

function createHtmlElement(div) {
  div.id = UseGoogleSignInProps.buttonId;
  document.body.appendChild(div);
}

describe('useGoogleSignIn hook', () => {
  beforeEach(() => {
    createHtmlElement(DIV);
  });

  afterEach(() => {
    document.body.removeChild(DIV);
  });

  it('it should create a script element for the google script', () => {
    const { result } = renderHook(() => useGoogleSignIn(UseGoogleSignInProps));
    expect(document.querySelectorAll('script').length).toBe(1);
  });
});
