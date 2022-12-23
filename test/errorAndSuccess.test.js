import { html, fixture, expect } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import Sinon, { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  let el;
  before(async () => {
    el = await fixture(html`<loan-success></loan-success>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it("_toHome() - called Router's go() to navigate to home", () => {
    const spy = Sinon.spy(Router, 'go');
    el._toHome();
    expect(spy).to.have.called;
    expect(spy.firstCall.args[0]).to.equal('/')
    spy.restore();
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  let el;
  before(async () => {
    el = await fixture(html`<loan-error></loan-error>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it("_toHome() - called Router's go() to navigate to home", () => {
    const spy = Sinon.spy(Router, 'go');
    el._toHome();
    expect(spy).to.have.called;
    expect(spy.firstCall.args[0]).to.equal('/')
    spy.restore();
  });
});
