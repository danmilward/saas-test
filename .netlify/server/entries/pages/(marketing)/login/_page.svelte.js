import { Z as head } from "../../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Log In</title>`;
  });
  $$payload.out += `<div><h1 class="text-xl font-bold">Get Started</h1> <a href="/login/sign_up"><button class="btn btn-primary mt-3 btn-wide">Sign Up</button></a> <h1 class="text-xl mt-6">Already have an account?</h1> <a href="/login/sign_in"><button class="btn btn-outline btn-primary mt-3 btn-wide">Sign In</button></a></div>`;
}
export {
  _page as default
};
