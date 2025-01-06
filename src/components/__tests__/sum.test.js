import { sum } from "../sum"

test("sum should check sum of two numbers",()=>{

    const result  = sum(1,2);
    expect(result).toBe(3);
}) 