
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount:1000, years: 2, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual('42.10')

});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 100023, years: 5, rate:2.5};
  expect(calculateMonthlyPayment(values)).toEqual('1775.14')
});

/// etc
