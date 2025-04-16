import * as server from '../entries/pages/(admin)/account/(menu)/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/account/(menu)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/account/(menu)/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.DYCDitf5.js","_app/immutable/chunks/disclose-version.DT086MQk.js","_app/immutable/chunks/runtime.CvBy81IS.js","_app/immutable/chunks/legacy.UxiJqBbj.js","_app/immutable/chunks/svelte-head.D0gU9p0e.js","_app/immutable/chunks/lifecycle.Ce52nOpf.js"];
export const stylesheets = [];
export const fonts = [];
