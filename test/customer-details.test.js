import { html, fixture, expect } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import { localize } from '@lion/localize';
import Sinon, { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  let el;
  before(async () => {
    el = await fixture(html`<customer-details></customer-details>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it("_toEmidetails() - called Router's go() to navigate to EMI Details", () => {
    const spy = Sinon.spy(Router, 'go');
    el._toEmidetails();
    expect(spy).to.have.called;
    expect(spy.firstCall.args[0]).to.equal('/emidetails')
    spy.restore();
  });
  it('checks for handlers', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('#nextbtn').click();
  });  
  it('should contain valid characters in FirstName', async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });
  it('should contain valid characters in LastName', async()=>{
    const el=await fixture(html`<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`);
    await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });
  it('should contain valid characters in Email', async()=>{
    const el=await fixture(html`<lion-input-email label="${localize.msg('change-language:email')}"></lion-input-email>`);
    await expect(el.label).to.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);
  });
  it('should contain valid characters in mobile', async()=>{
    const el= await fixture(html`<lion-input label="${localize.msg('change-language:mobilenumber')}"></lion-input>`);
    await expect(el.label).to.match(/6|7|8|9|/);
  });
  it('should contain the amount field',async()=>{
    const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:monthlysalary')}"></lion-input-amount>`);
    await expect(el.label).to.equal('Monthly Salary');
  }); 
  it('should contain the amount field',async()=>{
    const el=await fixture(html`<lion-input-amount label="${localize.msg('change-language:previousemi')}"></lion-input-amount>`);
    await expect(el.label).to.equal('Previous EMIs Amount');
  });
  it('checks for emi details', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('.backbg-btn-color').click();
  });
});
