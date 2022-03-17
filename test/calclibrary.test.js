"use strict";

const expect = require("chai").expect;

const { sum, subtract } = require("../calclibrary");

describe("Test if function are defined", function () {
  it("sum is afunction", function () {
    expect(sum).to.be.a("function");
  });
});
