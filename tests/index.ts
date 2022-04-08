import * as assert from "assert";
import {SmokeTest} from "../dist";

describe("index", ()=> {
    it("should say 'hello shawty'", ()=>{
        // console.log("hello shawty");
        SmokeTest.HelloWorld();
        assert.ok(true);
    });
});