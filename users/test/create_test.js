const assert = require('assert');
const User = require('../src/user');

describe('Creating records',()=>{
    it('saves a user ',()=>{
       //assert(1+1==2);
       const joe = new User({name:'jhimy'}); 
       joe.save();
    });
});