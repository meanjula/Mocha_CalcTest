"use strict";

const expect = require("chai").expect;

const { sum, subtract } = require("../calclibrary");

//checking the typeof
describe("Test if function are defined", function () {
  it("sum is a function", function () {
    expect(sum).to.be.a("function");
  });
  it("sum is a function", function () {
    expect(subtract).to.be.a("function");
  });
  it("2 is a string", function () {
    expect("2").to.be.a("string");
  });
  it("2 is a number", function () {
    expect(2).to.be.a("number");
  });
});
