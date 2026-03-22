(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["me"],{

/***/ "./src/application/me.js":
/*!*******************************!*\
  !*** ./src/application/me.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _intranet_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../intranet/index.scss */ "./src/intranet/index.scss");
/* harmony import */ var _components_htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/htm */ "./src/components/htm.js");
/* harmony import */ var _components_htm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_htm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");


// import {trigger_card_view} from "../components/treenav";


var Masonry = __webpack_require__(/*! masonry-layout */ "../../../../node_modules/masonry-layout/masonry.js");

// Copyright 2021-2023 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/tree
function Tree(data, {
  // data is either tabular (array of objects) or hierarchy (nested objects)
  path,
  // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
  id = Array.isArray(data) ? d => d.id : null,
  // if tabular data, given a d in data, returns a unique identifier (string)
  parentId = Array.isArray(data) ? d => d.parentId : null,
  // if tabular data, given a node d, returns its parent’s identifier
  children,
  // if hierarchical data, given a d in data, returns its children
  tree = d3__WEBPACK_IMPORTED_MODULE_2__.tree,
  // layout algorithm (typically d3.tree or d3.cluster)
  sort,
  // how to sort nodes prior to layout (e.g., (a, b) => d3.descending(a.height, b.height))
  label,
  // given a node d, returns the display name
  title,
  // given a node d, returns its hover text
  link,
  // given a node d, its link (if any)
  linkTarget = "_blank",
  // the target attribute for links (if any)
  width = 640,
  // outer width, in pixels
  height,
  // outer height, in pixels
  r = 3,
  // radius of nodes
  padding = 1,
  // horizontal padding for first and last column
  fill = "#999",
  // fill for nodes
  fillOpacity,
  // fill opacity for nodes
  stroke = "#555",
  // stroke for links
  strokeWidth = 1.5,
  // stroke width for links
  strokeOpacity = 0.4,
  // stroke opacity for links
  strokeLinejoin,
  // stroke line join for links
  strokeLinecap,
  // stroke line cap for links
  halo = "#fff",
  // color of label halo
  haloWidth = 3,
  // padding around the labels
  curve = d3__WEBPACK_IMPORTED_MODULE_2__.curveBumpX // curve for the link
} = {}) {
  // If id and parentId options are specified, or the path option, use d3.stratify
  // to convert tabular data to a hierarchy; otherwise we assume that the data is
  // specified as an object {children} with nested objects (a.k.a. the “flare.json”
  // format), and use d3.hierarchy.
  const root = path != null ? d3__WEBPACK_IMPORTED_MODULE_2__.stratify().path(path)(data) : id != null || parentId != null ? d3__WEBPACK_IMPORTED_MODULE_2__.stratify().id(id).parentId(parentId)(data) : d3__WEBPACK_IMPORTED_MODULE_2__.hierarchy(data, children);

  // Sort the nodes.
  if (sort != null) root.sort(sort);

  // Compute labels and titles.
  const descendants = root.descendants();
  const L = label == null ? null : descendants.map(d => label(d.data, d));

  // Compute the layout.
  const dx = 10;
  const dy = width / (root.height + padding);
  tree().nodeSize([dx, dy])(root);

  // Center the tree.
  let x0 = Infinity;
  let x1 = -x0;
  root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

  // Compute the default height.
  if (height === undefined) height = x1 - x0 + dx * 2;

  // Use the required curve
  if (typeof curve !== "function") throw new Error(`Unsupported curve`);
  const svg = d3__WEBPACK_IMPORTED_MODULE_2__.create("svg").attr("viewBox", [-dy * padding / 2, x0 - dx, width, height]).attr("width", width).attr("height", height).attr("style", "max-width: 100%; height: auto; height: intrinsic;").attr("font-family", "sans-serif").attr("font-size", 10);
  svg.append("g").attr("fill", "none").attr("fillOpacity", fillOpacity).attr("stroke", stroke).attr("stroke-opacity", strokeOpacity).attr("stroke-linecap", strokeLinecap).attr("stroke-linejoin", strokeLinejoin).attr("stroke-width", strokeWidth).selectAll("path").data(root.links()).join("path").attr("d", d3__WEBPACK_IMPORTED_MODULE_2__.link(curve).x(d => d.y).y(d => d.x));
  const node = svg.append("g").selectAll("a").data(root.descendants()).join("a").attr("xlink:href", link == null ? null : d => link(d.data, d)).attr("target", link == null ? null : linkTarget).attr("transform", d => `translate(${d.y},${d.x})`);
  node.append("circle").attr("fill", d => d.children ? stroke : fill).attr("r", r);
  if (title != null) node.append("title").text(d => title(d.data, d));
  if (L) node.append("text").attr("dy", "0.32em").attr("x", d => d.children ? -6 : 6).attr("text-anchor", d => d.children ? "end" : "start").attr("paint-order", "stroke").attr("stroke", halo).attr("stroke-width", haloWidth).text((d, i) => L[i]);
  return svg.node();
}
window.document.addEventListener("DOMContentLoaded", function () {
  (0,_components_header__WEBPACK_IMPORTED_MODULE_3__.render_header_animation)("#funHeader");
  const chartContainer = document.getElementById("tree-container");
  if (aircraftData !== undefined) {
    chartContainer.appendChild(Tree(aircraftData, {
      // label: d => d.name,
      label: d => {
        if (d.count !== undefined) {
          return `${d.name} (${d.count})`;
        } else {
          return d.name;
        }
      },
      title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}`,
      // hover text
      width: 1152
    }));
  }
});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render_header_animation: () => (/* binding */ render_header_animation)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var vanta_src_vanta_birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanta/src/vanta.birds */ "./node_modules/vanta/src/vanta.birds.js");
/* harmony import */ var vanta_src_vanta_cells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanta/src/vanta.cells */ "./node_modules/vanta/src/vanta.cells.js");



function render_header_animation(elementId) {
  console.log(three__WEBPACK_IMPORTED_MODULE_2__);
  if (elementId === "#researchHeader") {
    (0,vanta_src_vanta_cells__WEBPACK_IMPORTED_MODULE_1__["default"])({
      el: elementId,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      color1: 0x2aeb00,
      color2: 0x6e6e2e
    });
  } else if (elementId === "#funHeader") {
    (0,vanta_src_vanta_birds__WEBPACK_IMPORTED_MODULE_0__["default"])({
      el: elementId,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  }
}

// export default {
//   async mounted() {
//     // window is only avaiable on browser
//     if (process.browser) {
//       window.THREE = THREE;
//       const { default: VantaCells } = await import("vanta/src/vanta.cells");
//       VantaCells({
//         el: "#researchHeader",
//         mouseControls: true,
//         touchControls: true,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         xOffset: -0.17,
//         size: 2.1,
//         THREE: window.THREE
//       });
//     }
//   }
// };

/***/ }),

/***/ "./src/components/htm.js":
/*!*******************************!*\
  !*** ./src/components/htm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window.htmx = __webpack_require__(/*! htmx.org */ "../../../../node_modules/htmx.org/dist/htmx.esm.js");

/***/ }),

/***/ "./src/intranet/index.scss":
/*!*********************************!*\
  !*** ./src/intranet/index.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vanta_src_vanta_birds_js-node_modules_vanta_src_vanta_cells_js-node_modu-54fe20","vendors-node_modules_htmx_org_dist_htmx_esm_js-node_modules_masonry-layout_masonry_js-node_mo-add2dc"], () => (__webpack_exec__("./src/application/me.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7TUFDbkJDLGFBQWEsRUFBRSxJQUFJO01BQ25CQyxZQUFZLEVBQUUsS0FBSztNQUNuQkksU0FBUyxFQUFFLE1BQU07TUFDakJDLFFBQVEsRUFBRSxNQUFNO01BQ2hCSixLQUFLLEVBQUUsSUFBSTtNQUNYSyxXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7RUFDTjtBQUVKO0FBRStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkRBM0IsTUFBTSxDQUFDNEIsSUFBSSxHQUFHdEYsbUJBQU8sQ0FBQyxvRUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7QUNBakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9hcHBsaWNhdGlvbi9tZS5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL2h0bS5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbnRyYW5ldC9pbmRleC5zY3NzPzhhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vaW50cmFuZXQvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odG1cIjtcbi8vIGltcG9ydCB7dHJpZ2dlcl9jYXJkX3ZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL3RyZWVuYXZcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHtyZW5kZXJfaGVhZGVyX2FuaW1hdGlvbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbnZhciBNYXNvbnJ5ID0gcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKTtcblxuLy8gQ29weXJpZ2h0IDIwMjEtMjAyMyBPYnNlcnZhYmxlLCBJbmMuXG4vLyBSZWxlYXNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3RyZWVcbmZ1bmN0aW9uIFRyZWUoZGF0YSwgeyAvLyBkYXRhIGlzIGVpdGhlciB0YWJ1bGFyIChhcnJheSBvZiBvYmplY3RzKSBvciBoaWVyYXJjaHkgKG5lc3RlZCBvYmplY3RzKVxuICBwYXRoLCAvLyBhcyBhbiBhbHRlcm5hdGl2ZSB0byBpZCBhbmQgcGFyZW50SWQsIHJldHVybnMgYW4gYXJyYXkgaWRlbnRpZmllciwgaW1wdXRpbmcgaW50ZXJuYWwgbm9kZXNcbiAgaWQgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZCA9PiBkLmlkIDogbnVsbCwgLy8gaWYgdGFidWxhciBkYXRhLCBnaXZlbiBhIGQgaW4gZGF0YSwgcmV0dXJucyBhIHVuaXF1ZSBpZGVudGlmaWVyIChzdHJpbmcpXG4gIHBhcmVudElkID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGQgPT4gZC5wYXJlbnRJZCA6IG51bGwsIC8vIGlmIHRhYnVsYXIgZGF0YSwgZ2l2ZW4gYSBub2RlIGQsIHJldHVybnMgaXRzIHBhcmVudOKAmXMgaWRlbnRpZmllclxuICBjaGlsZHJlbiwgLy8gaWYgaGllcmFyY2hpY2FsIGRhdGEsIGdpdmVuIGEgZCBpbiBkYXRhLCByZXR1cm5zIGl0cyBjaGlsZHJlblxuICB0cmVlID0gZDMudHJlZSwgLy8gbGF5b3V0IGFsZ29yaXRobSAodHlwaWNhbGx5IGQzLnRyZWUgb3IgZDMuY2x1c3RlcilcbiAgc29ydCwgLy8gaG93IHRvIHNvcnQgbm9kZXMgcHJpb3IgdG8gbGF5b3V0IChlLmcuLCAoYSwgYikgPT4gZDMuZGVzY2VuZGluZyhhLmhlaWdodCwgYi5oZWlnaHQpKVxuICBsYWJlbCwgLy8gZ2l2ZW4gYSBub2RlIGQsIHJldHVybnMgdGhlIGRpc3BsYXkgbmFtZVxuICB0aXRsZSwgLy8gZ2l2ZW4gYSBub2RlIGQsIHJldHVybnMgaXRzIGhvdmVyIHRleHRcbiAgbGluaywgLy8gZ2l2ZW4gYSBub2RlIGQsIGl0cyBsaW5rIChpZiBhbnkpXG4gIGxpbmtUYXJnZXQgPSBcIl9ibGFua1wiLCAvLyB0aGUgdGFyZ2V0IGF0dHJpYnV0ZSBmb3IgbGlua3MgKGlmIGFueSlcbiAgd2lkdGggPSA2NDAsIC8vIG91dGVyIHdpZHRoLCBpbiBwaXhlbHNcbiAgaGVpZ2h0LCAvLyBvdXRlciBoZWlnaHQsIGluIHBpeGVsc1xuICByID0gMywgLy8gcmFkaXVzIG9mIG5vZGVzXG4gIHBhZGRpbmcgPSAxLCAvLyBob3Jpem9udGFsIHBhZGRpbmcgZm9yIGZpcnN0IGFuZCBsYXN0IGNvbHVtblxuICBmaWxsID0gXCIjOTk5XCIsIC8vIGZpbGwgZm9yIG5vZGVzXG4gIGZpbGxPcGFjaXR5LCAvLyBmaWxsIG9wYWNpdHkgZm9yIG5vZGVzXG4gIHN0cm9rZSA9IFwiIzU1NVwiLCAvLyBzdHJva2UgZm9yIGxpbmtzXG4gIHN0cm9rZVdpZHRoID0gMS41LCAvLyBzdHJva2Ugd2lkdGggZm9yIGxpbmtzXG4gIHN0cm9rZU9wYWNpdHkgPSAwLjQsIC8vIHN0cm9rZSBvcGFjaXR5IGZvciBsaW5rc1xuICBzdHJva2VMaW5lam9pbiwgLy8gc3Ryb2tlIGxpbmUgam9pbiBmb3IgbGlua3NcbiAgc3Ryb2tlTGluZWNhcCwgLy8gc3Ryb2tlIGxpbmUgY2FwIGZvciBsaW5rc1xuICBoYWxvID0gXCIjZmZmXCIsIC8vIGNvbG9yIG9mIGxhYmVsIGhhbG9cbiAgaGFsb1dpZHRoID0gMywgLy8gcGFkZGluZyBhcm91bmQgdGhlIGxhYmVsc1xuICBjdXJ2ZSA9IGQzLmN1cnZlQnVtcFgsIC8vIGN1cnZlIGZvciB0aGUgbGlua1xufSA9IHt9KSB7XG5cbiAgLy8gSWYgaWQgYW5kIHBhcmVudElkIG9wdGlvbnMgYXJlIHNwZWNpZmllZCwgb3IgdGhlIHBhdGggb3B0aW9uLCB1c2UgZDMuc3RyYXRpZnlcbiAgLy8gdG8gY29udmVydCB0YWJ1bGFyIGRhdGEgdG8gYSBoaWVyYXJjaHk7IG90aGVyd2lzZSB3ZSBhc3N1bWUgdGhhdCB0aGUgZGF0YSBpc1xuICAvLyBzcGVjaWZpZWQgYXMgYW4gb2JqZWN0IHtjaGlsZHJlbn0gd2l0aCBuZXN0ZWQgb2JqZWN0cyAoYS5rLmEuIHRoZSDigJxmbGFyZS5qc29u4oCdXG4gIC8vIGZvcm1hdCksIGFuZCB1c2UgZDMuaGllcmFyY2h5LlxuICBjb25zdCByb290ID0gcGF0aCAhPSBudWxsID8gZDMuc3RyYXRpZnkoKS5wYXRoKHBhdGgpKGRhdGEpXG4gICAgICA6IGlkICE9IG51bGwgfHwgcGFyZW50SWQgIT0gbnVsbCA/IGQzLnN0cmF0aWZ5KCkuaWQoaWQpLnBhcmVudElkKHBhcmVudElkKShkYXRhKVxuICAgICAgOiBkMy5oaWVyYXJjaHkoZGF0YSwgY2hpbGRyZW4pO1xuXG4gIC8vIFNvcnQgdGhlIG5vZGVzLlxuICBpZiAoc29ydCAhPSBudWxsKSByb290LnNvcnQoc29ydCk7XG5cbiAgLy8gQ29tcHV0ZSBsYWJlbHMgYW5kIHRpdGxlcy5cbiAgY29uc3QgZGVzY2VuZGFudHMgPSByb290LmRlc2NlbmRhbnRzKCk7XG4gIGNvbnN0IEwgPSBsYWJlbCA9PSBudWxsID8gbnVsbCA6IGRlc2NlbmRhbnRzLm1hcChkID0+IGxhYmVsKGQuZGF0YSwgZCkpO1xuXG4gIC8vIENvbXB1dGUgdGhlIGxheW91dC5cbiAgY29uc3QgZHggPSAxMDtcbiAgY29uc3QgZHkgPSB3aWR0aCAvIChyb290LmhlaWdodCArIHBhZGRpbmcpO1xuICB0cmVlKCkubm9kZVNpemUoW2R4LCBkeV0pKHJvb3QpO1xuXG4gIC8vIENlbnRlciB0aGUgdHJlZS5cbiAgbGV0IHgwID0gSW5maW5pdHk7XG4gIGxldCB4MSA9IC14MDtcbiAgcm9vdC5lYWNoKGQgPT4ge1xuICAgIGlmIChkLnggPiB4MSkgeDEgPSBkLng7XG4gICAgaWYgKGQueCA8IHgwKSB4MCA9IGQueDtcbiAgfSk7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgZGVmYXVsdCBoZWlnaHQuXG4gIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCkgaGVpZ2h0ID0geDEgLSB4MCArIGR4ICogMjtcblxuICAvLyBVc2UgdGhlIHJlcXVpcmVkIGN1cnZlXG4gIGlmICh0eXBlb2YgY3VydmUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBjdXJ2ZWApO1xuXG4gIGNvbnN0IHN2ZyA9IGQzLmNyZWF0ZShcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFstZHkgKiBwYWRkaW5nIC8gMiwgeDAgLSBkeCwgd2lkdGgsIGhlaWdodF0pXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgLmF0dHIoXCJzdHlsZVwiLCBcIm1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBoZWlnaHQ6IGludHJpbnNpYztcIilcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMCk7XG5cbiAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgIC5hdHRyKFwiZmlsbE9wYWNpdHlcIiwgZmlsbE9wYWNpdHkpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBzdHJva2UpXG4gICAgICAuYXR0cihcInN0cm9rZS1vcGFjaXR5XCIsIHN0cm9rZU9wYWNpdHkpXG4gICAgICAuYXR0cihcInN0cm9rZS1saW5lY2FwXCIsIHN0cm9rZUxpbmVjYXApXG4gICAgICAuYXR0cihcInN0cm9rZS1saW5lam9pblwiLCBzdHJva2VMaW5lam9pbilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIHN0cm9rZVdpZHRoKVxuICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAuZGF0YShyb290LmxpbmtzKCkpXG4gICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmsoY3VydmUpXG4gICAgICAgICAgICAueChkID0+IGQueSlcbiAgICAgICAgICAgIC55KGQgPT4gZC54KSk7XG5cbiAgY29uc3Qgbm9kZSA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLnNlbGVjdEFsbChcImFcIilcbiAgICAuZGF0YShyb290LmRlc2NlbmRhbnRzKCkpXG4gICAgLmpvaW4oXCJhXCIpXG4gICAgICAuYXR0cihcInhsaW5rOmhyZWZcIiwgbGluayA9PSBudWxsID8gbnVsbCA6IGQgPT4gbGluayhkLmRhdGEsIGQpKVxuICAgICAgLmF0dHIoXCJ0YXJnZXRcIiwgbGluayA9PSBudWxsID8gbnVsbCA6IGxpbmtUYXJnZXQpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICBub2RlLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4gZC5jaGlsZHJlbiA/IHN0cm9rZSA6IGZpbGwpXG4gICAgICAuYXR0cihcInJcIiwgcik7XG5cbiAgaWYgKHRpdGxlICE9IG51bGwpIG5vZGUuYXBwZW5kKFwidGl0bGVcIilcbiAgICAgIC50ZXh0KGQgPT4gdGl0bGUoZC5kYXRhLCBkKSk7XG5cbiAgaWYgKEwpIG5vZGUuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuMzJlbVwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4gZC5jaGlsZHJlbiA/IC02IDogNilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgZCA9PiBkLmNoaWxkcmVuID8gXCJlbmRcIiA6IFwic3RhcnRcIilcbiAgICAgIC5hdHRyKFwicGFpbnQtb3JkZXJcIiwgXCJzdHJva2VcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGhhbG8pXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBoYWxvV2lkdGgpXG4gICAgICAudGV4dCgoZCwgaSkgPT4gTFtpXSk7XG5cbiAgcmV0dXJuIHN2Zy5ub2RlKCk7XG59XG5cbndpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlcl9oZWFkZXJfYW5pbWF0aW9uKFwiI2Z1bkhlYWRlclwiKTtcbiAgY29uc3QgY2hhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyZWUtY29udGFpbmVyXCIpO1xuICBpZiAoYWlyY3JhZnREYXRhICE9PSB1bmRlZmluZWQpe1xuICAgICAgY2hhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoVHJlZShhaXJjcmFmdERhdGEsIHtcbiAgICAgIC8vIGxhYmVsOiBkID0+IGQubmFtZSxcbiAgICAgIGxhYmVsOiBkID0+IHtcbiAgICAgICAgICBpZiAoZC5jb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBgJHtkLm5hbWV9ICgke2QuY291bnR9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQubmFtZTtcbiAgICAgICAgICB9fSxcbiAgICAgIHRpdGxlOiAoZCwgbikgPT4gYCR7bi5hbmNlc3RvcnMoKS5yZXZlcnNlKCkubWFwKGQgPT4gZC5kYXRhLm5hbWUpLmpvaW4oXCIuXCIpfWAsIC8vIGhvdmVyIHRleHRcbiAgICAgIHdpZHRoOiAxMTUyXG4gICAgfSkpO1xuICB9XG59KTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBCaXJkcyBmcm9tIFwidmFudGEvc3JjL3ZhbnRhLmJpcmRzXCI7XG5pbXBvcnQgVmFudGFDZWxscyBmcm9tIFwidmFudGEvc3JjL3ZhbnRhLmNlbGxzXCI7XG5cblxuZnVuY3Rpb24gcmVuZGVyX2hlYWRlcl9hbmltYXRpb24oZWxlbWVudElkKSB7XG4gICAgY29uc29sZS5sb2coVEhSRUUpO1xuICAgIGlmIChlbGVtZW50SWQgPT09XCIjcmVzZWFyY2hIZWFkZXJcIikge1xuICAgICAgICBWYW50YUNlbGxzKHtcbiAgICAgICAgICAgIGVsOiBlbGVtZW50SWQsXG4gICAgICAgICAgICBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZTogMS4wLFxuICAgICAgICAgICAgY29sb3IxOiAweDJhZWIwMCxcbiAgICAgICAgICAgIGNvbG9yMjogMHg2ZTZlMmUsXG4gICAgICAgIH0pO1xuICAgIH1lbHNlIGlmIChlbGVtZW50SWQgPT09XCIjZnVuSGVhZGVyXCIpIHtcbiAgICAgICAgQmlyZHMoe1xuICAgICAgICAgIGVsOiBlbGVtZW50SWQsXG4gICAgICAgICAgbW91c2VDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgbWluSGVpZ2h0OiAyMDAuMDAsXG4gICAgICAgICAgbWluV2lkdGg6IDIwMC4wMCxcbiAgICAgICAgICBzY2FsZTogMS4wMCxcbiAgICAgICAgICBzY2FsZU1vYmlsZTogMS4wMFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtyZW5kZXJfaGVhZGVyX2FuaW1hdGlvbn07XG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIGFzeW5jIG1vdW50ZWQoKSB7XG4vLyAgICAgLy8gd2luZG93IGlzIG9ubHkgYXZhaWFibGUgb24gYnJvd3NlclxuLy8gICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbi8vICAgICAgIHdpbmRvdy5USFJFRSA9IFRIUkVFO1xuLy8gICAgICAgY29uc3QgeyBkZWZhdWx0OiBWYW50YUNlbGxzIH0gPSBhd2FpdCBpbXBvcnQoXCJ2YW50YS9zcmMvdmFudGEuY2VsbHNcIik7XG4vLyAgICAgICBWYW50YUNlbGxzKHtcbi8vICAgICAgICAgZWw6IFwiI3Jlc2VhcmNoSGVhZGVyXCIsXG4vLyAgICAgICAgIG1vdXNlQ29udHJvbHM6IHRydWUsXG4vLyAgICAgICAgIHRvdWNoQ29udHJvbHM6IHRydWUsXG4vLyAgICAgICAgIG1pbkhlaWdodDogMjAwLjAsXG4vLyAgICAgICAgIG1pbldpZHRoOiAyMDAuMCxcbi8vICAgICAgICAgeE9mZnNldDogLTAuMTcsXG4vLyAgICAgICAgIHNpemU6IDIuMSxcbi8vICAgICAgICAgVEhSRUU6IHdpbmRvdy5USFJFRVxuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuIiwid2luZG93Lmh0bXggPSByZXF1aXJlKCdodG14Lm9yZycpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImQzIiwicmVuZGVyX2hlYWRlcl9hbmltYXRpb24iLCJNYXNvbnJ5IiwicmVxdWlyZSIsIlRyZWUiLCJkYXRhIiwicGF0aCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiZCIsInBhcmVudElkIiwiY2hpbGRyZW4iLCJ0cmVlIiwic29ydCIsImxhYmVsIiwidGl0bGUiLCJsaW5rIiwibGlua1RhcmdldCIsIndpZHRoIiwiaGVpZ2h0IiwiciIsInBhZGRpbmciLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZUxpbmVjYXAiLCJoYWxvIiwiaGFsb1dpZHRoIiwiY3VydmUiLCJjdXJ2ZUJ1bXBYIiwicm9vdCIsInN0cmF0aWZ5IiwiaGllcmFyY2h5IiwiZGVzY2VuZGFudHMiLCJMIiwibWFwIiwiZHgiLCJkeSIsIm5vZGVTaXplIiwieDAiLCJJbmZpbml0eSIsIngxIiwiZWFjaCIsIngiLCJ1bmRlZmluZWQiLCJFcnJvciIsInN2ZyIsImNyZWF0ZSIsImF0dHIiLCJhcHBlbmQiLCJzZWxlY3RBbGwiLCJsaW5rcyIsImpvaW4iLCJ5Iiwibm9kZSIsInRleHQiLCJpIiwid2luZG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhcnRDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImFpcmNyYWZ0RGF0YSIsImFwcGVuZENoaWxkIiwiY291bnQiLCJuYW1lIiwibiIsImFuY2VzdG9ycyIsInJldmVyc2UiLCJUSFJFRSIsIkJpcmRzIiwiVmFudGFDZWxscyIsImVsZW1lbnRJZCIsImNvbnNvbGUiLCJsb2ciLCJlbCIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwic2NhbGUiLCJjb2xvcjEiLCJjb2xvcjIiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInNjYWxlTW9iaWxlIiwiaHRteCJdLCJzb3VyY2VSb290IjoiIn0=