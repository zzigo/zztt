import { e as createAstro, c as createComponent, r as renderComponent, b as renderHead, d as addAttribute, u as unescapeHTML, a as renderTemplate } from '../chunks/astro/server_BMBmnVw6.mjs';
import 'piccolore';
import { a as getCollection } from '../chunks/_astro_content_DZkXTkxE.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CxdBQmyz.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zztt.org");
const prerender = false;
const $$ListOfWorks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListOfWorks;
  const { searchParams } = Astro2.url;
  const view = searchParams.get("view") || "chronological";
  const works = await getCollection("works");
  const events = await getCollection("events");
  const parseWikilink = (link) => typeof link === "string" ? link.replace(/\[\[|\]\]/g, "") : "";
  const processedWorks = works.map((work) => {
    const performedByArray = Array.isArray(work.data.performedBy) ? work.data.performedBy : work.data.performedBy ? [work.data.performedBy] : [];
    let performersDisplay = "unknown performers";
    if (work.data.listPerformers) {
      performersDisplay = work.data.listPerformers;
    } else if (performedByArray.length > 0) {
      performersDisplay = parseWikilink(performedByArray[0]);
    }
    const workEvents = events.filter((event) => {
      const workTitle = work.data.title.toLowerCase();
      const eventWorks = event.data.work;
      if (Array.isArray(eventWorks)) {
        return eventWorks.some((w) => w.toLowerCase() === workTitle);
      } else if (typeof eventWorks === "string") {
        return eventWorks.toLowerCase() === workTitle;
      }
      return false;
    });
    const firstPerformanceYear = work.data.pubDate ? new Date(work.data.pubDate).getFullYear() : null;
    const firstPerformanceEvent = workEvents.length > 0 ? workEvents[0].data.venue : null;
    const isUpcoming = work.data.pubDate && new Date(work.data.pubDate) > /* @__PURE__ */ new Date();
    return {
      ...work,
      performersDisplay,
      firstPerformanceYear,
      firstPerformanceEvent,
      isUpcoming
    };
  });
  const chronologicalWorks = [...processedWorks].sort((a, b) => {
    if (a.firstPerformanceYear && b.firstPerformanceYear) {
      if (b.firstPerformanceYear !== a.firstPerformanceYear) {
        return b.firstPerformanceYear - a.firstPerformanceYear;
      }
    }
    if (a.firstPerformanceYear) return -1;
    if (b.firstPerformanceYear) return 1;
    return a.data.title.localeCompare(b.data.title);
  });
  const worksByYear = chronologicalWorks.reduce((acc, work) => {
    const year = work.firstPerformanceYear ?? "Undated";
    if (!acc[year]) acc[year] = [];
    acc[year].push(work);
    return acc;
  }, {});
  const sortedYears = Object.keys(worksByYear).sort((a, b) => {
    if (a === "Undated") return 1;
    if (b === "Undated") return -1;
    return b - a;
  });
  const worksByType = processedWorks.reduce((acc, work) => {
    const tags = work.data.tags?.length ? work.data.tags : ["Untagged"];
    tags.forEach((tag) => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(work);
    });
    return acc;
  }, {});
  const sortedTypes = Object.keys(worksByType).sort(
    (a, b) => a.localeCompare(b)
  );
  sortedTypes.forEach((type) => {
    worksByType[type] = [...worksByType[type]].sort((a, b) => {
      if (a.firstPerformanceYear && b.firstPerformanceYear) {
        return b.firstPerformanceYear - a.firstPerformanceYear;
      }
      return a.data.title.localeCompare(b.data.title);
    });
  });
  return renderTemplate`<html lang="en" data-theme="dark" data-astro-cid-t2c7cnbw> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "List of Works", "description": "Complete list of works by Luciano Azzigotti", "data-astro-cid-t2c7cnbw": true })}${renderHead()}</head> <body data-astro-cid-t2c7cnbw> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-t2c7cnbw": true })} <main data-astro-cid-t2c7cnbw> <h1 data-astro-cid-t2c7cnbw>List of Works</h1> <div class="view-options" data-astro-cid-t2c7cnbw> <a href="/list-of-works" data-astro-reload${addAttribute({ active: view === "chronological" }, "class:list")} data-astro-cid-t2c7cnbw>
chronological
</a> <a href="/list-of-works?view=year" data-astro-reload${addAttribute({ active: view === "year" }, "class:list")} data-astro-cid-t2c7cnbw>
by year
</a> <a href="/list-of-works?view=type" data-astro-reload${addAttribute({ active: view === "type" }, "class:list")} data-astro-cid-t2c7cnbw>
by type
</a> </div> ${view === "chronological" && renderTemplate`<ul class="works-list" data-astro-cid-t2c7cnbw> ${chronologicalWorks.map((work) => renderTemplate`<li class="work-item" data-astro-cid-t2c7cnbw> <div class="work-content" data-astro-cid-t2c7cnbw>${unescapeHTML(`
                  <strong style="color: orange;">${work.data.title}</strong>
                  <em>${work.data.description}</em>
                  (${work.firstPerformanceYear ?? "\u2014"})
                  ${work.isUpcoming ? '<span class="upcoming-label">Upcoming</span>' : ""}
                  <br>
                  <small>
                    premiered by ${work.performersDisplay}
                    at ${work.firstPerformanceEvent ?? "unknown event"}
                    ${work.data.tags?.length ? ` - <em style="opacity:0.2;">${work.data.tags.join(", ")}</em>` : ""}
                  </small>
                `)}</div> </li>`)} </ul>`} ${view === "year" && renderTemplate`<div class="grouped-works" data-astro-cid-t2c7cnbw> ${sortedYears.map((year) => renderTemplate`<section data-astro-cid-t2c7cnbw> <h2 data-astro-cid-t2c7cnbw>${year}</h2> <ul class="works-list" data-astro-cid-t2c7cnbw> ${worksByYear[year].map((work) => renderTemplate`<li class="work-item" data-astro-cid-t2c7cnbw> <div class="work-content" data-astro-cid-t2c7cnbw>${unescapeHTML(`
                        <strong style="color: orange;">${work.data.title}</strong>
                        <em>${work.data.description}</em>
                        (${work.firstPerformanceYear ?? "\u2014"})
                        ${work.isUpcoming ? '<span class="upcoming-label">Upcoming</span>' : ""}
                        <br>
                        <small>
                          premiered by ${work.performersDisplay}
                          at ${work.firstPerformanceEvent ?? "unknown event"}
                          ${work.data.tags?.length ? ` - <em style="opacity:0.2;">${work.data.tags.join(", ")}</em>` : ""}
                        </small>
                      `)}</div> </li>`)} </ul> </section>`)} </div>`} ${view === "type" && renderTemplate`<div class="grouped-works" data-astro-cid-t2c7cnbw> ${sortedTypes.map((type) => renderTemplate`<section data-astro-cid-t2c7cnbw> <h2 data-astro-cid-t2c7cnbw>${type}</h2> <ul class="works-list" data-astro-cid-t2c7cnbw> ${worksByType[type].map((work) => renderTemplate`<li class="work-item" data-astro-cid-t2c7cnbw> <div class="work-content" data-astro-cid-t2c7cnbw>${unescapeHTML(`
                        <strong style="color: orange;">${work.data.title}</strong>
                        <em>${work.data.description}</em>
                        (${work.firstPerformanceYear ?? "\u2014"})
                        ${work.isUpcoming ? '<span class="upcoming-label">Upcoming</span>' : ""}
                        <br>
                        <small>
                          premiered by ${work.performersDisplay}
                          at ${work.firstPerformanceEvent ?? "unknown event"}
                          ${work.data.tags?.length ? ` - <em style="opacity:0.2;">${work.data.tags.join(", ")}</em>` : ""}
                        </small>
                      `)}</div> </li>`)} </ul> </section>`)} </div>`} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-t2c7cnbw": true })} </body></html>`;
}, "/Users/zztt/projects/25-zztt/zzttp/src/pages/list-of-works.astro", void 0);

const $$file = "/Users/zztt/projects/25-zztt/zzttp/src/pages/list-of-works.astro";
const $$url = "/list-of-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListOfWorks,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
