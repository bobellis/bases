describe ("changeBase", function(){
  it("will take a number and base then return the number after converting the new base", function(){
    expect(changeBase(5, 2)).to.equal('101');
  });

  it("will take a number and base then return the number after converting the new base", function(){
    expect(changeBase(140, 8)).to.equal('214');
  });
});

describe ("toBaseTen", function(){
  it("will take a number and a base and return the base 10 conversion", function(){
    expect(toBaseTen("235", 8)).to.equal(157);
  })
})
