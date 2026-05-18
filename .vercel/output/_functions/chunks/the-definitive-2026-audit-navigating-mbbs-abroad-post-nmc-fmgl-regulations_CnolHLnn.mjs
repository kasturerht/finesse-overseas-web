import { c as createComponent } from './astro-component_B6zmqKgi.mjs';
import 'piccolore';
import { O as isHTMLString, d as renderComponent, r as renderTemplate, u as unescapeHTML, h as createHeadAndContent } from './entrypoint_C4bLIvE5.mjs';
import Markdoc from '@markdoc/markdoc';
import { a as renderUniqueStylesheet, b as renderScriptElement } from './LeadCaptureModal_DdGjsXwU.mjs';
import Slugger from 'github-slugger';
import { a as $$Image } from './_astro_assets_ZxdNyy_H.mjs';

function renderTreeNodeToFactoryResult(result, treeNode) {
  if (Array.isArray(treeNode)) {
    return Promise.all(
      treeNode.map(
        (node) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: node })
      )
    );
  }
  if (treeNode.type === "text") return renderTemplate`${treeNode.content}`;
  const slots = {
    default: () => renderTemplate`${treeNode.children.map(
      (child) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: child })
    )}`
  };
  if (treeNode.type === "component") {
    let styles = "", links = "", scripts = "";
    if (Array.isArray(treeNode.collectedStyles)) {
      styles = treeNode.collectedStyles.map(
        (style) => renderUniqueStylesheet(result, {
          type: "inline",
          content: style
        })
      ).join("");
    }
    if (Array.isArray(treeNode.collectedLinks)) {
      links = treeNode.collectedLinks.map((link) => {
        return renderUniqueStylesheet(result, {
          type: "external",
          src: link[0] === "/" ? link : "/" + link
        });
      }).join("");
    }
    if (Array.isArray(treeNode.collectedScripts)) {
      scripts = treeNode.collectedScripts.map((script) => renderScriptElement(script)).join("");
    }
    const head = unescapeHTML(styles + links + scripts);
    let headAndContent = createHeadAndContent(
      head,
      renderTemplate`${renderComponent(
        result,
        treeNode.component.name,
        treeNode.component,
        treeNode.props,
        slots
      )}`
    );
    result._metadata.propagators.add({
      init() {
        return headAndContent;
      }
    });
    return headAndContent;
  }
  return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
}
const ComponentNode = createComponent({
  factory(result, { treeNode }) {
    return renderTreeNodeToFactoryResult(result, treeNode);
  },
  propagation: "self"
});
async function createTreeNode(node) {
  if (Array.isArray(node)) {
    return Promise.all(node.map((child) => createTreeNode(child)));
  } else if (isHTMLString(node)) {
    return { type: "text", content: node };
  } else if (typeof node === "string" || typeof node === "number") {
    return { type: "text", content: String(node) };
  } else if (node === null || typeof node !== "object" || !Markdoc.Tag.isTag(node)) {
    return { type: "text", content: "" };
  }
  const children = await Promise.all(node.children.map((child) => createTreeNode(child)));
  if (typeof node.name === "function") {
    const component = node.name;
    const props = node.attributes;
    return {
      type: "component",
      component,
      props,
      children
    };
  } else if (isPropagatedAssetsModule(node.name)) {
    const { collectedStyles, collectedLinks, collectedScripts } = node.name;
    const component = (await node.name.getMod()).default;
    const props = node.attributes;
    return {
      type: "component",
      component,
      collectedStyles,
      collectedLinks,
      collectedScripts,
      props,
      children
    };
  } else {
    return {
      type: "element",
      tag: node.name,
      attributes: node.attributes,
      children
    };
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Renderer;
  const { stringifiedAst, config } = Astro2.props;
  const ast = Markdoc.Ast.fromJSON(stringifiedAst);
  const content = await Markdoc.transform(ast, config);
  const treeNode = await createTreeNode(content);
  return renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": treeNode })}`;
}, "F:/Finesse/Website/Website/finesse-overseas/node_modules/@astrojs/markdoc/components/Renderer.astro", void 0);

class MarkdocError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "MarkdocError";
  constructor(props, ...params) {
    super(...params);
    const { title = "MarkdocError", message, stack, location, hint, frame } = props;
    this.title = title;
    if (message) this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
}

function getSlug(attributes, children, headingSlugger) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const textContent = attributes.content ?? getTextContent(children);
  return headingSlugger.slug(textContent);
}
const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const { level, ...attributes } = node.transformAttributes(config);
    const children = node.transformChildren(config);
    if (!config.ctx?.headingSlugger) {
      throw new MarkdocError({
        message: "Unexpected problem adding heading IDs to Markdoc file. Did you modify the `ctx.headingSlugger` property in your Markdoc config?"
      });
    }
    const slug = getSlug(attributes, children, config.ctx.headingSlugger);
    const render = config.nodes?.heading?.render ?? `h${level}`;
    const tagProps = (
      // For components, pass down `level` as a prop,
      // alongside `__collectHeading` for our `headings` collector.
      // Avoid accidentally rendering `level` as an HTML attribute otherwise!
      typeof render === "string" ? { ...attributes, id: slug } : { ...attributes, id: slug, __collectHeading: true, level }
    );
    return new Markdoc.Tag(render, tagProps, children);
  }
};
function setupHeadingConfig() {
  const headingSlugger = new Slugger();
  return {
    ctx: {
      headingSlugger
    },
    nodes: {
      heading
    }
  };
}

async function setupConfig(userConfig = {}, options) {
  let defaultConfig = setupHeadingConfig();
  if (userConfig.extends) {
    for (let extension of userConfig.extends) {
      if (extension instanceof Promise) {
        extension = await extension;
      }
      defaultConfig = mergeConfig(defaultConfig, extension);
    }
  }
  let merged = mergeConfig(defaultConfig, userConfig);
  syncTagNodeAttributes(merged);
  return merged;
}
function setupConfigSync(userConfig = {}, options) {
  const defaultConfig = setupHeadingConfig();
  let merged = mergeConfig(defaultConfig, userConfig);
  syncTagNodeAttributes(merged);
  return merged;
}
function mergeConfig(configA, configB) {
  return {
    ...configA,
    ...configB,
    ctx: {
      ...configA.ctx,
      ...configB.ctx
    },
    tags: {
      ...configA.tags,
      ...configB.tags
    },
    nodes: {
      ...configA.nodes,
      ...configB.nodes
    },
    functions: {
      ...configA.functions,
      ...configB.functions
    },
    variables: {
      ...configA.variables,
      ...configB.variables
    },
    partials: {
      ...configA.partials,
      ...configB.partials
    },
    validation: {
      ...configA.validation,
      ...configB.validation
    }
  };
}
function syncTagNodeAttributes(config) {
  const builtinTags = Markdoc.tags;
  const builtinNodes = Markdoc.nodes;
  for (const name of Object.keys(builtinTags)) {
    if (!(name in builtinNodes)) continue;
    const tagSchema = config.tags[name];
    const nodeSchema = config.nodes[name];
    const tagAttrs = tagSchema?.attributes;
    const nodeAttrs = nodeSchema?.attributes;
    if (!tagAttrs && !nodeAttrs) continue;
    const mergedAttrs = { ...tagAttrs, ...nodeAttrs };
    if (tagSchema) {
      config.tags[name] = { ...tagSchema, attributes: mergedAttrs };
    } else {
      config.tags[name] = { ...builtinTags[name], attributes: mergedAttrs };
    }
    if (nodeSchema) {
      config.nodes[name] = { ...nodeSchema, attributes: mergedAttrs };
    } else {
      config.nodes[name] = { ...builtinNodes[name], attributes: mergedAttrs };
    }
  }
}
function transformRespectsRender(transform, configKey) {
  const source = transform.toString();
  return source.includes(`config.nodes?.${configKey}?.render`) || source.includes(`config.tags?.${configKey}?.render`);
}
function resolveComponentImports(markdocConfig, tagComponentMap, nodeComponentMap) {
  for (const [tag, render] of Object.entries(tagComponentMap)) {
    const config = markdocConfig.tags[tag];
    if (config) {
      config.render = render;
      if (config.transform && !transformRespectsRender(config.transform, tag)) {
        delete config.transform;
      }
    }
  }
  for (const [node, render] of Object.entries(nodeComponentMap)) {
    const config = markdocConfig.nodes[node];
    if (config) {
      config.render = render;
      if (config.transform && !transformRespectsRender(config.transform, node)) {
        delete config.transform;
      }
    }
  }
  return markdocConfig;
}
function getTextContent(childNodes) {
  let text = "";
  for (const node of childNodes) {
    if (typeof node === "string" || typeof node === "number") {
      text += node;
    } else if (typeof node === "object" && Markdoc.Tag.isTag(node)) {
      text += getTextContent(node.children);
    }
  }
  return text;
}
const headingLevels = [1, 2, 3, 4, 5, 6];
function collectHeadings(children, collectedHeadings) {
  for (const node of children) {
    if (typeof node !== "object" || !Markdoc.Tag.isTag(node)) continue;
    if (node.attributes.__collectHeading === true && typeof node.attributes.level === "number") {
      collectedHeadings.push({
        slug: node.attributes.id,
        depth: node.attributes.level,
        text: getTextContent(node.children)
      });
      continue;
    }
    for (const level of headingLevels) {
      if (node.name === "h" + level) {
        collectedHeadings.push({
          slug: node.attributes.id,
          depth: level,
          text: getTextContent(node.children)
        });
      }
    }
    collectHeadings(node.children, collectedHeadings);
  }
}
function createGetHeadings(stringifiedAst, userConfig, options) {
  return function getHeadings() {
    const config = setupConfigSync(userConfig);
    const ast = Markdoc.Ast.fromJSON(stringifiedAst);
    const content = Markdoc.transform(ast, config);
    let collectedHeadings = [];
    collectHeadings(Array.isArray(content) ? content : [content], collectedHeadings);
    return collectedHeadings;
  };
}
function createContentComponent(Renderer, stringifiedAst, userConfig, options, tagComponentMap, nodeComponentMap) {
  return createComponent({
    async factory(result, props) {
      const withVariables = mergeConfig(userConfig, { variables: props });
      const config = resolveComponentImports(
        await setupConfig(withVariables),
        tagComponentMap,
        nodeComponentMap
      );
      return renderComponent(result, Renderer.name, Renderer, { stringifiedAst, config }, {});
    },
    propagation: "self"
  });
}

const assetsConfig = {
  nodes: {
    image: {
      attributes: {
        ...Markdoc.nodes.image.attributes,
        __optimizedSrc: { type: "Object" }
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (node.type === "image" && "__optimizedSrc" in node.attributes) {
          const { __optimizedSrc, ...rest } = node.attributes;
          return new Markdoc.Tag($$Image, { ...rest, src: __optimizedSrc }, children);
        } else {
          return new Markdoc.Tag("img", attributes, children);
        }
      }
    }
  }
};

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\"StartFragmentThe dream of becoming a doctor is often met with the harsh reality of cut-throat competition and skyrocketing costs in India. This leads thousands of students toward international shores. However, as of 2026, the landscape of MBBS abroad has fundamentally changed.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,17],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":17}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,17],\"inline\":true,\"attributes\":{\"content\":\"This audit is not a marketing brochure. It is a data-backed investigation into the risks, rewards, and hidden realities of studying medicine outside India.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":17}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":17}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":17}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[18,19],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[18,19],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[18,19],\"inline\":true,\"attributes\":{\"content\":\"Chapter 1: The NMC FMGL 2021/24 Legacy\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":18},\"end\":{\"line\":19}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":18},\"end\":{\"line\":19}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":18},\"end\":{\"line\":19}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[20,21],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[20,21],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[20,21],\"inline\":true,\"attributes\":{\"content\":\"The National Medical Commission (NMC) introduced the Foreign Medical Graduate Licensure (FMGL) Regulations which acted as a 'Quality Filter'. Many students who went abroad before these rules are now finding their degrees invalid.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":20},\"end\":{\"line\":21}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":20},\"end\":{\"line\":21}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":20},\"end\":{\"line\":21}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":true,\"attributes\":{\"content\":\"The Core Pillars of Validity\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":true,\"attributes\":{\"content\":\"To be eligible to practice in India, your foreign medical degree must satisfy these four non-negotiable conditions:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,31],\"inline\":false,\"attributes\":{\"ordered\":true,\"marker\":\".\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":true,\"attributes\":{\"content\":\"Duration:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":true,\"attributes\":{\"content\":\" The course must be of at least 54 months (4.5 years).\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[27,28],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[27,28],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[27,28],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[27,28],\"inline\":true,\"attributes\":{\"content\":\"Internship:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":27},\"end\":{\"line\":28}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":27},\"end\":{\"line\":28}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[27,28],\"inline\":true,\"attributes\":{\"content\":\" A mandatory 12-month internship in the same foreign university/hospital.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":27},\"end\":{\"line\":28}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":27},\"end\":{\"line\":28}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":27},\"end\":{\"line\":28}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":true,\"attributes\":{\"content\":\"Medium:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":true,\"attributes\":{\"content\":\" The entire education (theory and clinical) must be in English.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,31],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"content\":\"Registration:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"content\":\" The student must be registered with the local medical council of that country.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":31}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":31}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":true,\"attributes\":{\"content\":\"Audit Note: If a consultant tells you that you can do a 'Bilingual' course or a 4-year course and 'manage' the rest in India, they are leading you into a legal trap. The NMC does not offer 'Ex Post Facto' approvals.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}}],\"type\":\"blockquote\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[33,34],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[33,34],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[33,34],\"inline\":true,\"attributes\":{\"content\":\"Chapter 2: The Global Benchmarking (2026 Parameters)\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":33},\"end\":{\"line\":34}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":33},\"end\":{\"line\":34}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":33},\"end\":{\"line\":34}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,37],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,37],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,37],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":37}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,37],\"inline\":true,\"attributes\":{\"content\":\"Not all countries are created equal. Here is our audit of the top destinations:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":37}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":37}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":37}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,43],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,39],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,39],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,39],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,39],\"inline\":true,\"attributes\":{\"content\":\"Russia:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":39}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":39}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[38,39],\"inline\":true,\"attributes\":{\"content\":\" 6 Years course. High clinical exposure in State Hospitals. 100% NMC Compliance in selected English-medium universities. Budget: 25 - 45 Lakhs.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":39}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":39}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":39}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":true,\"attributes\":{\"content\":\"Georgia:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":true,\"attributes\":{\"content\":\" 6 Years course. Medium clinical exposure but high compliance. Budget: 35 - 50 Lakhs.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41],\"inline\":true,\"attributes\":{\"content\":\"Uzbekistan:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41],\"inline\":true,\"attributes\":{\"content\":\" 5.5 to 6 Years course. Improving infrastructure and high compliance. Budget: 20 - 30 Lakhs.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,43],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":true,\"attributes\":{\"content\":\"Philippines:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":true,\"attributes\":{\"content\":\" 5.5 Years new BS-MD course. Very high clinical exposure and 100% compliant with new rules. Budget: 35 - 55 Lakhs.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":43}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":38},\"end\":{\"line\":43}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[43,44],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[43,44],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[43,44],\"inline\":true,\"attributes\":{\"content\":\"Chapter 3: The Financial Audit - Beyond Tuition Fees\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":43},\"end\":{\"line\":44}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":43},\"end\":{\"line\":44}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":43},\"end\":{\"line\":44}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,47],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":47}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,47],\"inline\":true,\"attributes\":{\"content\":\"When a parent sees a \\\"15 Lakh Tuition Fee\\\" advertisement, they often assume the total budget is 20 Lakhs. Our audit of over 500 student ledgers shows the 'Hidden Overheads' often increase the budget by 40%.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":47}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":47}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":47}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[48,49],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[48,49],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[48,49],\"inline\":true,\"attributes\":{\"content\":\"The Invisible Costs Checklist\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":48},\"end\":{\"line\":49}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":48},\"end\":{\"line\":49}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":48},\"end\":{\"line\":49}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,54],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,51],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,51],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,51],\"inline\":true,\"attributes\":{\"content\":\"Visa Extension & Medical Insurance ($200 - $500 annually).\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":51}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":51}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":51}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":true,\"attributes\":{\"content\":\"Hostel 'Renovation' Charges (Private dorms charge extra for basic maintenance).\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[52,54],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[52,53],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[52,53],\"inline\":true,\"attributes\":{\"content\":\"Living Inflation (Food and travel costs in countries like Georgia have risen by 15% in the last 18 months).\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":52},\"end\":{\"line\":53}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":52},\"end\":{\"line\":53}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":52},\"end\":{\"line\":54}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":54}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":true,\"attributes\":{\"content\":\"Chapter 4: The \\\"Agent\\\" vs \\\"Consultant\\\" Distinction\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,58],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,58],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,58],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":58}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,58],\"inline\":true,\"attributes\":{\"content\":\"In our audit, we categorized 90% of the industry as 'Agents' (driven by university commissions) and only 10% as 'Consultants' (driven by student outcomes).\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":58}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":58}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":58}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":true,\"attributes\":{\"content\":\"\\\"The biggest mistake a parent can make is trusting a person whose income depends on the university they choose, rather than the quality of education provided.\\\" - Rohit Kasture\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"blockquote\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[61,62],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[61,62],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[61,62],\"inline\":true,\"attributes\":{\"content\":\"Red Flags to Watch For:\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":61},\"end\":{\"line\":62}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":61},\"end\":{\"line\":62}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":61},\"end\":{\"line\":62}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[63,67],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[63,64],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[63,64],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[63,64],\"inline\":true,\"attributes\":{\"content\":\"Guaranteed 'Pass' in FMGE/NExT.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":63},\"end\":{\"line\":64}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":63},\"end\":{\"line\":64}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":63},\"end\":{\"line\":64}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[64,65],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[64,65],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[64,65],\"inline\":true,\"attributes\":{\"content\":\"Claims that \\\"Hostel is optional\\\" in the first year.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":64},\"end\":{\"line\":65}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":64},\"end\":{\"line\":65}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":64},\"end\":{\"line\":65}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,67],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":true,\"attributes\":{\"content\":\"Refusal to show the official University Fee Portal.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":67}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":63},\"end\":{\"line\":67}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[67,68],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[67,68],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[67,68],\"inline\":true,\"attributes\":{\"content\":\"Conclusion: Your 30-Lakh Decision\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":67},\"end\":{\"line\":68}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":67},\"end\":{\"line\":68}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":67},\"end\":{\"line\":68}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":true,\"attributes\":{\"content\":\"Choosing an MBBS abroad destination is a 6-year commitment and a 30 to 50 Lakh investment. It is not a decision that should be made based on a glossy brochure or a 30-second Instagram reel. \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[69,73],\"inline\":true,\"attributes\":{\"content\":\"At Finesse Overseas, we believe in the power of 'Audit'. We don't just send students; we vet institutions. Your child’s future deserves a research-backed foundation.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":69},\"end\":{\"line\":73}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":false,\"attributes\":{},\"children\":[],\"type\":\"hr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,78],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,78],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,78],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":78}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,78],\"inline\":true,\"attributes\":{\"marker\":\"**\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,78],\"inline\":true,\"attributes\":{\"content\":\"Disclaimer: This audit report is based on the data available as of May 2026 and is subject to changes in NMC regulations.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":78}}}],\"type\":\"strong\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":78}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":78}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":78}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
	options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
