describe("function drinkAbout", function() {
 
  it("should exist", function() {
    expect (drinkAbout).toBeDefined();
  });

  it("should be defined w/ one argument", function() {
    expect (drinkAbout.length).toBe(1);
  });

  it("should return a string", function() {
    expect (typeof drinkAbout()).toBe("string");
  });

  /*Lo mismo de arriba pero mas semantico
  it("should return a string", function() {
    var returnedValue = drinkAbout();
    expect (typeof returnedValue()).toBe("string");
  });*/

  it("should return 'drink toddy' when drinkAbout(13)", function() {
    expect (drinkAbout(13)).toBe('drink toddy');
  });

  /*Lo mismo de arriba pero mas semantico
  it("should return a string", function() {
    var returnedValue = drinkAbout(13);
    expect (returnedValue).toBe("drink toddy");
  });*/
  it("should return 'drink coke' when drinkAbout(17)", function() {
    expect (drinkAbout(17)).toBe('drink coke');
  });
  it("should return 'drink beer' when drinkAbout(18)", function() {
    expect (drinkAbout(18)).toBe('drink beer');
  });
  it("should return 'drink wisky' when drinkAbout(30)", function() {
    expect (drinkAbout(30)).toBe('drink wisky');
  });

});
