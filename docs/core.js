export const SAMPLE_VTT=`WEBVTT

00:00:00.000 --> 00:00:04.000
The shop was quiet when we opened the shutters.

00:00:04.000 --> 00:00:08.000
My grandmother taught me to welcome every visitor.

00:00:08.000 --> 00:00:13.000
I still keep her notebook beside the counter.`;
export const CONFIG={title:'Riwayat',slug:'bilingual-story-archive',action:'Explore the transcript',audio:true,localLabel:'Local transcript parser / use audio below for ASR',fields:[{id:'transcript',label:'Timestamped source transcript (WebVTT)',type:'textarea',value:SAMPLE_VTT,rows:13},{id:'query',label:'Search the source text',type:'text',value:'grandmother'},{id:'language',label:'Transcript language label',type:'text',value:'English'}]};
export function parseVtt(text){if(typeof text!=='string'||text.length>100000)throw new Error('Use a transcript below 100 KB.');const clock=value=>{const [h,m,s]=value.replace(',','.').split(':').map(Number);if(!Number.isFinite(s)||m>59||s>=60)throw new Error('Invalid timestamp.');return h*3600+m*60+s;};const blocks=text.replace(/\r/g,'').split(/\n\s*\n/);const segments=[];for(const block of blocks){const match=block.match(/(\d{2}:\d{2}:\d{2}[.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[.,]\d{3})[^\n]*\n([\s\S]+)/);if(!match)continue;const start=clock(match[1]),end=clock(match[2]),content=match[3].trim();if(end<=start||!content||start<(segments.at(-1)?.end||0))throw new Error('Segments must be nonempty, ordered, and nonoverlapping.');segments.push({id:`S${segments.length+1}`,start,end,text:content});}if(!segments.length)throw new Error('No valid WebVTT segments were found.');return segments;}
export function present(segments,query='',language='Not specified',runtime='BROWSER TRANSCRIPT SEARCH'){const words=query.toLowerCase().split(/\s+/).filter(Boolean);const matches=segments.filter(item=>words.every(word=>item.text.toLowerCase().includes(word)));return {title:'A story you can trace back to its voice',status:runtime,message:'The included story is a fictional script. Text in a second language is preserved as supplied; automatic translation is not claimed.',metrics:[['Source segments',segments.length,language],['Matches',matches.length,'Exact text search']],sections:[{title:'Search results',headers:['Source','Time','Exact words'],rows:matches.map(item=>[item.id,`${item.start.toFixed(1)}–${item.end.toFixed(1)}s`,item.text])},{title:'Source timeline',headers:['Segment','Start','End','Transcript'],rows:segments.map(item=>[item.id,item.start,item.end,item.text])}],data:{segments,language,query}};}
export function runDemo(input){return present(parseVtt(input.transcript),input.query,input.language);}
