describe('Bubble Sort', function () {
  beforeAll(function() {
    spyOn(funcsObject, 'counterIncreaser').and.callThrough(); 
  })
  it('handles an empty array', function () {
    expect(funcsObject.bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);

    expect(funcsObject.counterIncreaser.calls.count()).toEqual(6)
  });
});
