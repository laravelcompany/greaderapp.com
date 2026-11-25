import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
const legacy = JSON.parse(await readFile(new URL('./legacy-headings.json',import.meta.url),'utf8'));
async function files(dir) { const entries=await readdir(dir,{withFileTypes:true}); return (await Promise.all(entries.map(e=>e.isDirectory()?files(join(dir,e.name)):[join(dir,e.name)]))).flat(); }
let failures=0, checked=0;
for (const file of (await files('dist')).filter(f=>f.endsWith('.html'))) {
 const html=await readFile(file,'utf8'), name=relative('dist',file), errors=[];
 const count=re=>(html.match(re)||[]).length;
 const headings=[...html.matchAll(/<h([1-6])\b/gi)].map(m=>Number(m[1]));
 const structural=[];
 if (headings.filter(h=>h===1).length!==1) structural.push('exactly one h1 required');
 if (headings.some((h,i)=>i>0&&h>headings[i-1]+1)) structural.push('heading level skipped');
 if (count(/<main\b/gi)!==1) errors.push('exactly one main required');
 if (count(/<link\b[^>]*rel="canonical"/gi)!==1) errors.push('exactly one canonical required');
 if (!/<meta\b[^>]*name="description"[^>]*content="[^"]+"/i.test(html)) errors.push('description required');
 const graphs=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
 if (graphs.length!==1) errors.push('exactly one JSON-LD script required');
 try { if(!Array.isArray(JSON.parse(graphs[0]?.[1]||'{}')['@graph'])) errors.push('JSON-LD graph required'); } catch { errors.push('invalid JSON-LD'); }
 if (Object.hasOwn(legacy,name) && structural.length) {
  if(JSON.stringify(headings)!==JSON.stringify(legacy[name])) errors.push('legacy headings changed; review rather than silently expand the baseline');
  console.warn(`LEGACY OPEN ${name}: ${structural.join('; ')}`);
 }
 else errors.push(...structural);
 const isHome = name === 'index.html';
 if (html.includes('id="lc-popup-card"') !== isHome) errors.push('LeadsCaptain promotion must appear on homepage only');
 if(errors.length) { failures++; console.error(`${name}: ${errors.join('; ')}`); }
 checked++;
}
console.log(`Checked ${checked} HTML pages; ${failures} failures. Ten retained legacy pages have explicit open heading exceptions, not acceptance.`);
if(failures) process.exit(1);
