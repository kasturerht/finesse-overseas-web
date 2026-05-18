import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import * as z from 'zod/v4';
import { e as renderElement, g as generateCspDigest, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, f as removeBase, a as isRemotePath, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, p as prependForwardSlash, h as createHeadAndContent, d as renderComponent } from './entrypoint_WwU-oxN3.mjs';
import { c as createComponent } from './astro-component_PqBCz97v.mjs';
import 'clsx';
import { V as VALID_INPUT_FORMATS } from './consts_Bd-1c2lz.mjs';
import 'piccolore';
import * as devalue from 'devalue';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function renderScriptElement({ props, children }) {
  return renderElement("script", {
    props,
    children
  });
}
function renderUniqueStylesheet(result, sheet) {
  if (sheet.type === "external") {
    if (Array.from(result.styles).some((s) => s.props.href === sheet.src)) return "";
    return renderElement("link", { props: { rel: "stylesheet", href: sheet.src }, children: "" });
  }
  if (sheet.type === "inline") {
    if (Array.from(result.styles).some((s) => s.children.includes(sheet.content))) return "";
    return renderElement("style", { props: {}, children: sheet.content });
  }
}

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BeOJqdCt.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DTm3Fvqf.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DTm3Fvqf.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_virtual_astro_get-image_CYrenbHL.mjs');
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...{}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_ChVXyhpl.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

function LeadCaptureModal({ pdfUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NMC_2026_Checklist.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setName("");
      setWhatsapp("");
    }, 3e3);
  };
  const modalContent = isOpen ? /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[99999] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-[#030712]/90 backdrop-blur-md animate-in fade-in duration-300",
        onClick: () => !isSubmitting && setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0a0f1c] shadow-[0_0_50px_rgba(16,185,129,0.1)] animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ jsx("div", { className: "h-1 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600" }),
      /* @__PURE__ */ jsx("div", { className: "p-8", children: isSuccess ? /* @__PURE__ */ jsxs("div", { className: "py-10 text-center animate-in slide-in-from-bottom-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20", children: /* @__PURE__ */ jsx("svg", { className: "h-10 w-10", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", d: "M5 13l4 4L19 7" }) }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: "Access Granted!" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-400", children: "Your download has started automatically." })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif text-white font-bold tracking-tight", children: "Unlock Checklist" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-400 font-medium", children: "Verify your details to get the NMC approved matrix." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "Parent / Student Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                className: "w-full rounded-xl border border-slate-700/80 bg-slate-900/50 px-4 py-3.5 text-white outline-none transition-all focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-2 focus:ring-emerald-500/20",
                placeholder: "Enter full name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1", children: "WhatsApp Number" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold", children: "+91" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  required: true,
                  pattern: "[0-9]{10}",
                  value: whatsapp,
                  onChange: (e) => setWhatsapp(e.target.value.replace(/\D/g, "").slice(0, 10)),
                  className: "w-full rounded-xl border border-slate-700/80 bg-slate-900/50 pl-14 pr-4 py-3.5 text-white outline-none transition-all focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-2 focus:ring-emerald-500/20",
                  placeholder: "10-digit number"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting || whatsapp.length < 10,
              className: "group relative mt-4 w-full overflow-hidden rounded-xl bg-emerald-600 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500 disabled:opacity-50",
              children: isSubmitting ? "Processing..." : "Get PDF Now"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600", children: "100% Secure • No Spam" })
        ] })
      ] }) }),
      !isSubmitting && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(false),
          className: "absolute top-6 right-6 text-slate-500 hover:text-white transition-colors",
          children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] })
  ] }) : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "group relative w-full overflow-hidden rounded-xl bg-emerald-500 p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
        children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center gap-3 rounded-xl bg-[#0a0f1c] px-6 py-4 transition-all duration-300 group-hover:bg-transparent", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[12px] font-bold uppercase tracking-widest text-emerald-400 group-hover:text-white transition-colors", children: "Download PDF Checklist" }),
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-emerald-500 group-hover:text-white transition-all group-hover:translate-x-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) })
        ] })
      }
    ),
    mounted && typeof document !== "undefined" && createPortal(
      modalContent,
      document.body
    )
  ] });
}

export { LeadCaptureModal as L, renderUniqueStylesheet as a, renderScriptElement as b, getCollection as g, renderEntry as r };
