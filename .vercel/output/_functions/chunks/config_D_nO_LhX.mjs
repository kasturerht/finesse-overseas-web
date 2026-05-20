const configYaml = "backend:\n  name: github\n  repo: kasturerht/finesse-overseas-web\n  branch: main\n  base_url: https://finesseoverseas.com\n  auth_endpoint: oauth/callback\ncollections:\n  - name: intelligence\n    label: Intelligence Hub (Blogs)\n    folder: src/content/intelligence\n    create: true\n    slug: '{{year}}-{{month}}-{{slug}}'\n    fields:\n      - label: Blog Title\n        name: title\n        widget: string\n      - label: Short Excerpt\n        name: excerpt\n        widget: text\n        hint: Keep it under 200 characters for the cards.\n      - label: Category\n        name: category\n        widget: select\n        options:\n          - Ground Report\n          - NMC Alert\n          - Financial Truth\n          - FMGE Data\n      - label: Author Name\n        name: author\n        widget: string\n        default: Finesse Audit Team\n      - label: Read Time\n        name: readTime\n        widget: string\n        default: 5 Min Read\n      - label: Publish Date\n        name: publishDate\n        widget: datetime\n        date_format: YYYY-MM-DD\n        time_format: false\n      - label: Cover Image\n        name: image\n        widget: image\n        required: false\n      - label: Blog Content\n        name: body\n        widget: markdown\nmedia_library:\n  name: cloudinary\n  config:\n    cloud_name: ''\n    api_key: ''\n";

const GET = () => {
  return new Response(configYaml, {
    headers: {
      "content-type": "text/yaml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
