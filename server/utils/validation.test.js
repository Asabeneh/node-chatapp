const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString',()=>{
  it('should reject non-string values',()=>{
    var res = isRealString();
    expect(res).toBe(false);
  });
  it('should reject string with only spaces',()=>{
    var res = isRealString('        ');
    expect(res).toBe(false);


  });
  it('should all string with non-space character',()=>{
    var res = isRealString(' Asabeneh    ');
    expect(res).toBe(true);
  });
});
