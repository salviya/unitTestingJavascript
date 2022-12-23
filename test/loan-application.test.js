import { html, fixture, expect } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import Sinon, { stub } from 'sinon';
import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  let el;
  it(' constructor initializes values', () => {
    expect(el.title).to.equal('Hey there');
  });
  it(' constructor initializes values', () => {
    expect(el.counter).to.equal(5);
  });
});
