import { html, fixture, expect } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import Sinon, { stub } from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  // refer LoanEMIDetails.js files
  let el;
  before(async () => {
    el = await fixture(html`<loanemi-details></loanemi-details>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it(' constructor initializes values', () => {
    expect(el._data.interestRate).to.equal(10);
  });
  it("_toBasicDetails() - called Router's go() to navigate to details page", () => {
    const spy = Sinon.spy(Router, 'go');
    el._toBasicDetails();
    expect(spy).to.have.called;
    expect(spy.firstCall.args[0]).to.equal('/details')
    spy.restore();
  });
  it("_toCustomer() - called Router's go() to navigate to customer page", () => {
    const spy = Sinon.spy(Router, 'go');
    el._toCustomer();
    expect(spy).to.have.called;
    expect(spy.firstCall.args[0]).to.equal('/customer')
    spy.restore();
  });
  it('navigation to next ',async()=>{
    let btn=el.shadowRoot.querySelector('lion-button');
    let myspy=Sinon.spy(element,'_toCustomer');
    btn[1].click();
    expect(myspy).to.not.have.called;
  });
});
