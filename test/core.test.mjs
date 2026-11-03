import test from 'node:test';import assert from 'node:assert/strict';import {parseVtt,SAMPLE_VTT,present} from '../public/core.js';
test('retains timestamps and supports source navigation',()=>{const segments=parseVtt(SAMPLE_VTT);assert.equal(segments.length,3);assert.equal(segments[1].start,4);assert.equal(present(segments,'grandmother').sections[0].rows.length,1);});
test('rejects overlapping and reversed source segments',()=>{assert.throws(()=>parseVtt(SAMPLE_VTT.replace('00:00:04.000 -->','00:00:03.000 -->')));assert.throws(()=>parseVtt('invalid'));});
test('preserves multilingual source text',()=>{const segments=parseVtt(SAMPLE_VTT.replace('My grandmother','Mi abuela'));assert.equal(present(segments,'abuela','Spanish').sections[0].rows.length,1);});
