/* 

pehele ham 
const express =  require('express'); krte the 

now in ts
we use import syntax to import modules
import express from 'express';

// and we use export syntax to export modules
// export const app = express();
*/

import express from 'express';
import {b} from "./imp";
import a from "./imp";
const app = express();

console.log(b); // 2
console.log(a); // 1

