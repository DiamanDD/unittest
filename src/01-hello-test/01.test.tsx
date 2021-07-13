import {sum} from "./01";

test("new test sum", ()=>{
const a=1;
const b=2;
const c=3;

const result = sum(a,b)
    expect(result).toBe(3)
})