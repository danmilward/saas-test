export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/cm_logo.svg","images/example-home.png","images/rss.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BIbA5nUw.js","app":"_app/immutable/entry/app.B-99RPWo.js","imports":["_app/immutable/entry/start.BIbA5nUw.js","_app/immutable/chunks/entry.CptRFq6I.js","_app/immutable/chunks/runtime.CvBy81IS.js","_app/immutable/chunks/index.BgdBHqCQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.B-99RPWo.js","_app/immutable/chunks/22.86e8shJ1.js","_app/immutable/chunks/runtime.CvBy81IS.js","_app/immutable/chunks/render.C0i22yM6.js","_app/immutable/chunks/events.B21_hOK_.js","_app/immutable/chunks/svelte-head.D0gU9p0e.js","_app/immutable/chunks/disclose-version.DT086MQk.js","_app/immutable/chunks/if.F8N2GoW9.js","_app/immutable/chunks/proxy.BklHAb52.js","_app/immutable/chunks/props.BAB_Zfbe.js","_app/immutable/chunks/store.DoCktgCC.js","_app/immutable/chunks/index-client.BllgSRrE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js'))
		],
		routes: [
			{
				id: "/(marketing)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/account/api",
				pattern: /^\/account\/api\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing",
				pattern: /^\/account\/billing\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing/manage",
				pattern: /^\/account\/billing\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/account/create_profile",
				pattern: /^\/account\/create_profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(admin)/account/select_plan",
				pattern: /^\/account\/select_plan\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings",
				pattern: /^\/account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email_subscription",
				pattern: /^\/account\/settings\/change_email_subscription\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email",
				pattern: /^\/account\/settings\/change_email\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_password",
				pattern: /^\/account\/settings\/change_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/delete_account",
				pattern: /^\/account\/settings\/delete_account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/edit_profile",
				pattern: /^\/account\/settings\/edit_profile\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/reset_password",
				pattern: /^\/account\/settings\/reset_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(admin)/account/sign_out",
				pattern: /^\/account\/sign_out\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(admin)/account/subscribe/[slug]",
				pattern: /^\/account\/subscribe\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(marketing)/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(marketing)/auth/callback/_server.js'))
			},
			{
				id: "/(marketing)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(marketing)/blog/(posts)/awesome_post",
				pattern: /^\/blog\/awesome_post\/?$/,
				params: [],
				page: { layouts: [0,4,5,6,], errors: [1,,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(marketing)/blog/(posts)/example_blog_post",
				pattern: /^\/blog\/example_blog_post\/?$/,
				params: [],
				page: { layouts: [0,4,5,6,], errors: [1,,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website",
				pattern: /^\/blog\/how_we_built_our_41kb_saas_website\/?$/,
				params: [],
				page: { layouts: [0,4,5,6,], errors: [1,,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(marketing)/blog/rss.xml",
				pattern: /^\/blog\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(marketing)/blog/rss.xml/_server.ts.js'))
			},
			{
				id: "/(marketing)/contact_us",
				pattern: /^\/contact_us\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(marketing)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/current_password_error",
				pattern: /^\/login\/current_password_error\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/forgot_password",
				pattern: /^\/login\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_in",
				pattern: /^\/login\/sign_in\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_up",
				pattern: /^\/login\/sign_up\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(marketing)/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(marketing)/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(marketing)/search/api.json",
				pattern: /^\/search\/api\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(marketing)/search/api.json/_server.ts.js'))
			},
			{
				id: "/(marketing)/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(marketing)/sitemap.xml/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
