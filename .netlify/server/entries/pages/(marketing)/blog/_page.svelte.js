import { a0 as ensure_array_like, Z as head, W as escape_html, X as attr, S as pop, Q as push } from "../../../../chunks/index.js";
import { s as sortedBlogPosts, b as blogInfo } from "../../../../chunks/posts.js";
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(sortedBlogPosts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(blogInfo.name)}</title>`;
    $$payload2.out += `<meta name="description" content="Our blog posts.">`;
  });
  $$payload.out += `<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto"><div class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"><div class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">${escape_html(blogInfo.name)}</div> <a href="/blog/rss.xml" target="_blank" rel="noreferrer"><img class="flex-none w-5 h-5 object-contain" src="/images/rss.svg" alt="rss feed"></a></div> <div class="text-lg text-center">A demo blog with sample content.</div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<a${attr("href", post.link)}><div class="card my-6 bg-white shadow-xl flex-row overflow-hidden"><div class="flex-none w-6 md:w-32 bg-secondary"></div> <div class="py-6 px-6"><div class="text-xl">${escape_html(post.title)}</div> <div class="text-sm text-accent">${escape_html(post.parsedDate?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }))}</div> <div class="text-slate-500">${escape_html(post.description)}</div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
