import { R as setContext, W as escape_html, X as attr, S as pop, Q as push } from "../../../../../chunks/index.js";
/* empty css                        */
import { w as writable } from "../../../../../chunks/index3.js";
import { a as WebsiteName } from "../../../../../chunks/config.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  const adminSectionStore = writable("");
  setContext("adminSection", adminSectionStore);
  let adminSection = void 0;
  adminSectionStore.subscribe((value) => {
    adminSection = value;
  });
  $$payload.out += `<div class="drawer lg:drawer-open"><input id="admin-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content"><div class="navbar bg-base-100 lg:hidden"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl" href="/">${escape_html(WebsiteName)}</a></div> <div class="flex-none"><div class="dropdown dropdown-end"><label for="admin-drawer" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label></div></div></div> <div class="container px-6 lg:px-12 py-3 lg:py-6">`;
  children?.($$payload);
  $$payload.out += `<!----></div></div> <div class="drawer-side"><label for="admin-drawer" class="drawer-overlay"></label> <ul class="menu menu-lg p-4 w-80 min-h-full bg-base-100 lg:border-r text-primary"><li><div class="normal-case menu-title text-xl font-bold text-primary flex flex-row"><a href="/" class="grow">${escape_html(WebsiteName)}</a> <label for="admin-drawer" class="lg:hidden ml-3">✕</label></div></li> <li><a href="/account"${attr("class", adminSection === "home" ? "active" : "")}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home</a></li> <li><a href="/account/billing"${attr("class", adminSection === "billing" ? "active" : "")}><svg class="h-5 w-5" viewBox="0 0 24 24" stroke="none" fill="currentColor"><path d="M18,1H6A3,3,0,0,0,3,4V22a1,1,0,0,0,1.8.6L6.829,19.9l1.276,2.552a1,1,0,0,0,.8.549.981.981,0,0,0,.89-.4L12,19.667,14.2,22.6a.983.983,0,0,0,.89.4,1,1,0,0,0,.8-.549L17.171,19.9,19.2,22.6a1,1,0,0,0,.8.4,1,1,0,0,0,1-1V4A3,3,0,0,0,18,1Zm1,18-1.2-1.6a.983.983,0,0,0-.89-.4,1,1,0,0,0-.8.549l-1.276,2.552L12.8,17.4a1,1,0,0,0-1.6,0L9.171,20.105,7.9,17.553A1,1,0,0,0,7.09,17a.987.987,0,0,0-.89.4L5,19V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1ZM17,9a1,1,0,0,1-1,1H8A1,1,0,0,1,8,8h8A1,1,0,0,1,17,9Zm-4,4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,13Z"></path></svg> Billing</a></li> <li><a href="/account/settings"${attr("class", adminSection === "settings" ? "active" : "")}><svg class="h-5 w-5" viewBox="0 0 24 24" stroke="none" fill="none"><g id="Interface / Settings"><g id="Vector"><path d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg> Settings</a></li> <li class="mt-auto"><a href="/account/sign_out" class="mt-auto text-base">Sign Out</a></li></ul></div></div>`;
  pop();
}
export {
  _layout as default
};
