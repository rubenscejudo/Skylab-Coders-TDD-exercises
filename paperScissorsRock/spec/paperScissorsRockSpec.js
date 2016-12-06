describe("function paperScissorsRock", function() {
 
  it("should exist", function() {
    expect (paperScissorsRock() ).toBeDefined();
  });

  it("should return a string", function(){
    expect(typeof paperScissorsRock() ).toBe("string");             
  });

  it("should return an erros when the parameters are not defined", function(){
    expect( paperScissorsRock() ).toBe("error"); 
    expect( paperScissorsRock(1)).toBe("error");      
  });

  it("should return It's a tie when parameters are the same", function(){
    expect( paperScissorsRock("PAPER", "PAPER") ).toBe("It's a tie");          
  });

  it("should return paper wins stone ", function(){
    expect( paperScissorsRock("PAPER", "STONE") ).toBe("PAPER WINS STONE");
  });

  it("should return scissors wins paper", function(){
    expect( paperScissorsRock("PAPER", "SCISSORS") ).toBe("SCISSORS WINS PAPER");
  });

  it("should return scissors wins paper ", function(){
    expect( paperScissorsRock("SCISSORS", "PAPER") ).toBe("SCISSORS WINS PAPER");          
  });

  it("should return stone wins scissors ", function(){
    expect( paperScissorsRock("SCISSORS", "STONE") ).toBe("STONE WINS SCISSORS");          
  });

  it("should return rock wins scissors ", function(){
    expect( paperScissorsRock("ROCK", "SCISSORS") ).toBe("ROCK WINS SCISSORS");          
  });

   it("should return papers wins rock ", function(){
    expect( paperScissorsRock("ROCK", "PAPER") ).toBe("PAPER WINS ROCK");          
  });


    
});