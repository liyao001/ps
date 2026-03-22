"use strict";
(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["app"],{

/***/ "./src/application/app.js":
/*!********************************!*\
  !*** ./src/application/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pubcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pubcard */ "./src/components/pubcard.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _fontsource_mali__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/mali */ "./node_modules/@fontsource/mali/index.css");
/* harmony import */ var _fontsource_carattere__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/carattere */ "./node_modules/@fontsource/carattere/index.css");
/* harmony import */ var _fontsource_handlee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/handlee */ "./node_modules/@fontsource/handlee/index.css");
/* harmony import */ var _fontsource_caveat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/caveat */ "./node_modules/@fontsource/caveat/index.css");
/* harmony import */ var _fontsource_Parisienne__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/Parisienne */ "./node_modules/@fontsource/Parisienne/index.css");
/* harmony import */ var _fontsource_satisfy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/satisfy */ "./node_modules/@fontsource/satisfy/index.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");















window.document.addEventListener("DOMContentLoaded", function () {
  console.log(three__WEBPACK_IMPORTED_MODULE_13__);
  const paper_authors = document.querySelectorAll(".card-view .notepad .paper-authors");
  paper_authors.forEach(element => {
    element.innerHTML = element.innerHTML.replaceAll("=", '<a href="#" data-bs-toggle="tooltip" data-bs-title="Co-first author"><sup><svg class="bi"><use xlink:href="#icon-co-first"></use></svg></sup></a>');
    element.innerHTML = element.innerHTML.replaceAll("*", '<a href="#" data-bs-toggle="tooltip" data-bs-title="Co-corresponding author"><sup><svg class="bi"><use xlink:href="#icon-co-corresponding"></use></svg></sup></a>');
  });
  const list_paper_authors = document.querySelectorAll(".list-view .paper-authors");
  list_paper_authors.forEach(element => {
    element.innerHTML = element.innerHTML.replaceAll("=", '<a href="#" data-bs-toggle="tooltip" data-bs-title="Co-first author"><sup><i class="fa-solid fa-2xs fa-puzzle-piece"></i></sup></a>');
    element.innerHTML = element.innerHTML.replaceAll("*", '<a href="#" data-bs-toggle="tooltip" data-bs-title="Co-corresponding author"><sup><i class="fa-solid fa-2xs fa-envelope-open-text"></i></sup></a>');
  });
  aos__WEBPACK_IMPORTED_MODULE_2___default().init();
  //
  (0,_components_pubcard__WEBPACK_IMPORTED_MODULE_3__.trigger_card_view)("triggerPubCardView");
  (0,_components_header__WEBPACK_IMPORTED_MODULE_4__.render_header_animation)("#researchHeader");
  (0,_components_header__WEBPACK_IMPORTED_MODULE_4__.render_header_animation)("#funHeader");
  // citation
  // (async () => {
  //     let pmids = Array.from(document.querySelectorAll(".cite-num-box")).map(ele => ele.dataset.pubmedId);
  //     if (pmids.length > 0) {
  //         let pmid_str = pmids.join(",");
  //         let response = await fetch(`https://icite.od.nih.gov/api/pubs?pmids=${pmid_str}`).then(
  //                 response => response.json()).then(
  //                     r => {
  //                         r.data.forEach(pubmed_obj => {
  //                             if (pubmed_obj.citation_count > 0) {
  //                                 document.querySelector(`#pubmed-badge-${pubmed_obj.pmid}`).href = "https://www.ncbi.nlm.nih.gov/pubmed/?term="+pubmed_obj.cited_by.join('+');
  //                                 document.querySelector(`#pubmed-citation-${pubmed_obj.pmid}`).innerText = "PubMed cites: " + pubmed_obj.citation_count;
  //                             } else {
  //                                 document.querySelector(`#pubmed-badge-${pubmed_obj.pmid}`).remove();
  //                             }
  //                         });
  //                     }
  //                 ).catch(reason => {
  //                     document.querySelector(`#pubmed-badge-${pubmed_obj.pmid}`).remove();
  //                 });
  //     }
  //  })();

  // (async () => {
  //     document.querySelectorAll(".dimensions-cite-num-box").forEach(async(obj) => {
  //         await fetch(`https://metrics-api.dimensions.ai/doi/${obj.dataset.doi}`).then(
  //             response => response.json()).then(
  //                 r => {
  //                     if (r.times_cited != null && r.times_cited > 0) {
  //                         obj.innerText = `Cited by ${r.times_cited} studies`;
  //                     } else {
  //                         obj.parentNode.parentNode.remove();
  //                     }
  //                 }
  //             ).catch(reason => {
  //                 obj.parentNode.remove();
  //         });
  //     });
  // })();

  // (async () => {
  //     document.querySelectorAll(".altmetric-num-box").forEach(async(obj) => {
  //         await fetch(`https://api.altmetric.com/v1/doi/${obj.dataset.doi}`).then(
  //             response => response.json()).then(
  //                 r => {
  //                     if (r.score != null && r.score > 0) {
  //                         obj.innerText = Math.ceil(r.score);
  //                         obj.parentNode.href = r.details_url;
  //                     } else {
  //                         obj.parentNode.remove();
  //                     }
  //                 }
  //             ).catch(reason => {
  //                 obj.parentNode.remove();
  //         });
  //     });
  // })();
  // enable tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_1__.Tooltip(tooltipTriggerEl));
});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/components/pubcard.js":
/*!***********************************!*\
  !*** ./src/components/pubcard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render_pub_ordinal: () => (/* binding */ render_pub_ordinal),
/* harmony export */   render_pub_preview: () => (/* binding */ render_pub_preview),
/* harmony export */   trigger_card_view: () => (/* binding */ trigger_card_view)
/* harmony export */ });
/* harmony import */ var rough_notation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rough-notation */ "./node_modules/rough-notation/lib/rough-notation.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);


const pubOrdNumAnnotations = {};
const pubPrevAnnotations = {};
function render_pub_ordinal() {
  const pub_ords = document.querySelectorAll(".pub-ordinal-number");
  pub_ords.forEach(element => {
    // Check if the element already has an annotation object
    const existingAnnotation = pubOrdNumAnnotations[element.id];
    if (!existingAnnotation) {
      // Create a RoughNotation for each element
      const annotation = (0,rough_notation__WEBPACK_IMPORTED_MODULE_0__.annotate)(element, {
        type: 'underline',
        iterations: 3,
        padding: [5, 5, 5, 5]
      });
      // Save the annotation object in the dictionary with the element's ID as the key
      pubOrdNumAnnotations[element.id] = annotation;
      // Show the annotation
      annotation.show();
    } else {
      existingAnnotation.show();
    }
  });
}
function render_pub_preview() {
  const img_sketch_colors = ["#f1e3f3", "#c2bbf0", "#8fb8ed", "#62bfed", "#3590f3", "#f7c59f"];
  const pub_img_sketches = document.querySelectorAll(".pub-fig-sketch");
  pub_img_sketches.forEach(element => {
    // Check if the element already has an annotation object
    const existingAnnotation = pubPrevAnnotations[element.id];
    if (!existingAnnotation) {
      const annotation = (0,rough_notation__WEBPACK_IMPORTED_MODULE_0__.annotate)(element, {
        type: 'box',
        padding: [1, 1, 1, 1],
        strokeWidth: 2,
        iterations: 3,
        color: img_sketch_colors[Math.floor(Math.random() * img_sketch_colors.length)],
        animate: true
      });
      // Save the annotation object in the element's data attribute
      pubPrevAnnotations[element.id] = annotation;
      annotation.show();
    } else {
      pubPrevAnnotations[element.id].show();
    }
  });
}
function trigger_card_view(elementId) {
  let checkbox = document.getElementById(elementId);
  if (!checkbox) {
    console.error('Element with ID ' + elementId + ' not found.');
    return;
  }
  function f() {
    let cards = document.getElementById("pubCardView");
    let lists = document.getElementById("pubListView");
    if (cards && lists) {
      if (checkbox.checked) {
        lists.classList.add("visually-hidden");
        cards.classList.remove("visually-hidden");
        aos__WEBPACK_IMPORTED_MODULE_1___default().init();
        render_pub_ordinal();
        render_pub_preview();
      } else {
        cards.classList.add("visually-hidden");
        lists.classList.remove("visually-hidden");
        aos__WEBPACK_IMPORTED_MODULE_1___default().init();
        render_pub_ordinal();
        render_pub_preview();
      }
    }
  }
  checkbox.addEventListener('change', f);
  f();
}

// const sketch_links = document.querySelectorAll(".sketch-link");
// sketch_links.forEach((element) => {
//     const annotation = annotate(element, {
//         type: 'underline',
//         color: 'yellow'
//     });
//     annotation.show();
// });


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vanta_src_vanta_birds_js-node_modules_vanta_src_vanta_cells_js-node_modu-54fe20","vendors-node_modules_aos_dist_aos_js-node_modules_bootstrap_dist_js_bootstrap_bundle_js-node_-c89f25"], () => (__webpack_exec__("./src/application/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9hcHBsaWNhdGlvbi9hcHAuanMiLCJ3ZWJwYWNrOi8vcHl0aG9uLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcHl0aG9uLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9wdWJjYXJkLmpzIiwid2VicGFjazovL3B5dGhvbi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzBiODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGVcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7dHJpZ2dlcl9jYXJkX3ZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL3B1YmNhcmRcIjtcbmltcG9ydCB7cmVuZGVyX2hlYWRlcl9hbmltYXRpb259IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCAnQGZvbnRzb3VyY2UvbWFsaSc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2NhcmF0dGVyZSc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2hhbmRsZWUnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9jYXZlYXQnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9QYXJpc2llbm5lJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvc2F0aXNmeSc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG5cblxud2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhUSFJFRSk7XG4gICAgY29uc3QgcGFwZXJfYXV0aG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZC12aWV3IC5ub3RlcGFkIC5wYXBlci1hdXRob3JzXCIpO1xuICAgIHBhcGVyX2F1dGhvcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZUFsbChcIj1cIiwgJzxhIGhyZWY9XCIjXCIgZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1icy10aXRsZT1cIkNvLWZpcnN0IGF1dGhvclwiPjxzdXA+PHN2ZyBjbGFzcz1cImJpXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tY28tZmlyc3RcIj48L3VzZT48L3N2Zz48L3N1cD48L2E+Jyk7XG4gICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlQWxsKFwiKlwiLCAnPGEgaHJlZj1cIiNcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiQ28tY29ycmVzcG9uZGluZyBhdXRob3JcIj48c3VwPjxzdmcgY2xhc3M9XCJiaVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNvLWNvcnJlc3BvbmRpbmdcIj48L3VzZT48L3N2Zz48L3N1cD48L2E+Jyk7XG4gICAgfSk7XG4gICAgY29uc3QgbGlzdF9wYXBlcl9hdXRob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LXZpZXcgLnBhcGVyLWF1dGhvcnNcIik7XG4gICAgbGlzdF9wYXBlcl9hdXRob3JzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTC5yZXBsYWNlQWxsKFwiPVwiLCAnPGEgaHJlZj1cIiNcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiQ28tZmlyc3QgYXV0aG9yXCI+PHN1cD48aSBjbGFzcz1cImZhLXNvbGlkIGZhLTJ4cyBmYS1wdXp6bGUtcGllY2VcIj48L2k+PC9zdXA+PC9hPicpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2VBbGwoXCIqXCIsICc8YSBocmVmPVwiI1wiIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtYnMtdGl0bGU9XCJDby1jb3JyZXNwb25kaW5nIGF1dGhvclwiPjxzdXA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS0yeHMgZmEtZW52ZWxvcGUtb3Blbi10ZXh0XCI+PC9pPjwvc3VwPjwvYT4nKTtcbiAgICB9KTtcbiAgICBBT1MuaW5pdCgpO1xuICAgIC8vXG4gICAgdHJpZ2dlcl9jYXJkX3ZpZXcoXCJ0cmlnZ2VyUHViQ2FyZFZpZXdcIik7XG4gICAgcmVuZGVyX2hlYWRlcl9hbmltYXRpb24oXCIjcmVzZWFyY2hIZWFkZXJcIik7XG4gICAgcmVuZGVyX2hlYWRlcl9hbmltYXRpb24oXCIjZnVuSGVhZGVyXCIpO1xuICAgIC8vIGNpdGF0aW9uXG4gICAgLy8gKGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgbGV0IHBtaWRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdGUtbnVtLWJveFwiKSkubWFwKGVsZSA9PiBlbGUuZGF0YXNldC5wdWJtZWRJZCk7XG4gICAgLy8gICAgIGlmIChwbWlkcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgICBsZXQgcG1pZF9zdHIgPSBwbWlkcy5qb2luKFwiLFwiKTtcbiAgICAvLyAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ljaXRlLm9kLm5paC5nb3YvYXBpL3B1YnM/cG1pZHM9JHtwbWlkX3N0cn1gKS50aGVuKFxuICAgIC8vICAgICAgICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEuZm9yRWFjaChwdWJtZWRfb2JqID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB1Ym1lZF9vYmouY2l0YXRpb25fY291bnQgPiAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHVibWVkLWJhZGdlLSR7cHVibWVkX29iai5wbWlkfWApLmhyZWYgPSBcImh0dHBzOi8vd3d3Lm5jYmkubmxtLm5paC5nb3YvcHVibWVkLz90ZXJtPVwiK3B1Ym1lZF9vYmouY2l0ZWRfYnkuam9pbignKycpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B1Ym1lZC1jaXRhdGlvbi0ke3B1Ym1lZF9vYmoucG1pZH1gKS5pbm5lclRleHQgPSBcIlB1Yk1lZCBjaXRlczogXCIgKyBwdWJtZWRfb2JqLmNpdGF0aW9uX2NvdW50O1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B1Ym1lZC1iYWRnZS0ke3B1Ym1lZF9vYmoucG1pZH1gKS5yZW1vdmUoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICApLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHVibWVkLWJhZGdlLSR7cHVibWVkX29iai5wbWlkfWApLnJlbW92ZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICB9KSgpO1xuXG4gICAgLy8gKGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaW1lbnNpb25zLWNpdGUtbnVtLWJveFwiKS5mb3JFYWNoKGFzeW5jKG9iaikgPT4ge1xuICAgIC8vICAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vbWV0cmljcy1hcGkuZGltZW5zaW9ucy5haS9kb2kvJHtvYmouZGF0YXNldC5kb2l9YCkudGhlbihcbiAgICAvLyAgICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXG4gICAgLy8gICAgICAgICAgICAgICAgIHIgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHIudGltZXNfY2l0ZWQgIT0gbnVsbCAmJiByLnRpbWVzX2NpdGVkID4gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbm5lclRleHQgPSBgQ2l0ZWQgYnkgJHtyLnRpbWVzX2NpdGVkfSBzdHVkaWVzYDtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICkuY2F0Y2gocmVhc29uID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSkoKTtcblxuICAgIC8vIChhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWx0bWV0cmljLW51bS1ib3hcIikuZm9yRWFjaChhc3luYyhvYmopID0+IHtcbiAgICAvLyAgICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hbHRtZXRyaWMuY29tL3YxL2RvaS8ke29iai5kYXRhc2V0LmRvaX1gKS50aGVuKFxuICAgIC8vICAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihcbiAgICAvLyAgICAgICAgICAgICAgICAgciA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoci5zY29yZSAhPSBudWxsICYmIHIuc2NvcmUgPiAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmlubmVyVGV4dCA9IE1hdGguY2VpbChyLnNjb3JlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5ocmVmID0gci5kZXRhaWxzX3VybDtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICApLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pKCk7XG4gICAgLy8gZW5hYmxlIHRvb2x0aXBzXG4gICAgY29uc3QgdG9vbHRpcFRyaWdnZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpO1xuICAgIFsuLi50b29sdGlwVHJpZ2dlckxpc3RdLm1hcCh0b29sdGlwVHJpZ2dlckVsID0+IG5ldyBUb29sdGlwKHRvb2x0aXBUcmlnZ2VyRWwpKTtcbn0pO1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IEJpcmRzIGZyb20gXCJ2YW50YS9zcmMvdmFudGEuYmlyZHNcIjtcbmltcG9ydCBWYW50YUNlbGxzIGZyb20gXCJ2YW50YS9zcmMvdmFudGEuY2VsbHNcIjtcblxuXG5mdW5jdGlvbiByZW5kZXJfaGVhZGVyX2FuaW1hdGlvbihlbGVtZW50SWQpIHtcbiAgICBjb25zb2xlLmxvZyhUSFJFRSk7XG4gICAgaWYgKGVsZW1lbnRJZCA9PT1cIiNyZXNlYXJjaEhlYWRlclwiKSB7XG4gICAgICAgIFZhbnRhQ2VsbHMoe1xuICAgICAgICAgICAgZWw6IGVsZW1lbnRJZCxcbiAgICAgICAgICAgIG1vdXNlQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgICB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlOiAxLjAsXG4gICAgICAgICAgICBjb2xvcjE6IDB4MmFlYjAwLFxuICAgICAgICAgICAgY29sb3IyOiAweDZlNmUyZSxcbiAgICAgICAgfSk7XG4gICAgfWVsc2UgaWYgKGVsZW1lbnRJZCA9PT1cIiNmdW5IZWFkZXJcIikge1xuICAgICAgICBCaXJkcyh7XG4gICAgICAgICAgZWw6IGVsZW1lbnRJZCxcbiAgICAgICAgICBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICBtaW5XaWR0aDogMjAwLjAwLFxuICAgICAgICAgIHNjYWxlOiAxLjAwLFxuICAgICAgICAgIHNjYWxlTW9iaWxlOiAxLjAwXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQge3JlbmRlcl9oZWFkZXJfYW5pbWF0aW9ufTtcbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgYXN5bmMgbW91bnRlZCgpIHtcbi8vICAgICAvLyB3aW5kb3cgaXMgb25seSBhdmFpYWJsZSBvbiBicm93c2VyXG4vLyAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuLy8gICAgICAgd2luZG93LlRIUkVFID0gVEhSRUU7XG4vLyAgICAgICBjb25zdCB7IGRlZmF1bHQ6IFZhbnRhQ2VsbHMgfSA9IGF3YWl0IGltcG9ydChcInZhbnRhL3NyYy92YW50YS5jZWxsc1wiKTtcbi8vICAgICAgIFZhbnRhQ2VsbHMoe1xuLy8gICAgICAgICBlbDogXCIjcmVzZWFyY2hIZWFkZXJcIixcbi8vICAgICAgICAgbW91c2VDb250cm9sczogdHJ1ZSxcbi8vICAgICAgICAgdG91Y2hDb250cm9sczogdHJ1ZSxcbi8vICAgICAgICAgbWluSGVpZ2h0OiAyMDAuMCxcbi8vICAgICAgICAgbWluV2lkdGg6IDIwMC4wLFxuLy8gICAgICAgICB4T2Zmc2V0OiAtMC4xNyxcbi8vICAgICAgICAgc2l6ZTogMi4xLFxuLy8gICAgICAgICBUSFJFRTogd2luZG93LlRIUkVFXG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4iLCJpbXBvcnQge2Fubm90YXRlfSBmcm9tIFwicm91Z2gtbm90YXRpb25cIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmNvbnN0IHB1Yk9yZE51bUFubm90YXRpb25zID0ge307XG5jb25zdCBwdWJQcmV2QW5ub3RhdGlvbnMgPSB7fTtcblxuZnVuY3Rpb24gcmVuZGVyX3B1Yl9vcmRpbmFsKCkge1xuICAgIGNvbnN0IHB1Yl9vcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wdWItb3JkaW5hbC1udW1iZXJcIik7XG4gICAgcHViX29yZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBhbHJlYWR5IGhhcyBhbiBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICBjb25zdCBleGlzdGluZ0Fubm90YXRpb24gPSBwdWJPcmROdW1Bbm5vdGF0aW9uc1tlbGVtZW50LmlkXTtcbiAgICAgICAgaWYgKCFleGlzdGluZ0Fubm90YXRpb24pIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIFJvdWdoTm90YXRpb24gZm9yIGVhY2ggZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IGFubm90YXRlKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndW5kZXJsaW5lJywgaXRlcmF0aW9uczogMywgcGFkZGluZzogWzUsIDUsIDUsIDVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGFubm90YXRpb24gb2JqZWN0IGluIHRoZSBkaWN0aW9uYXJ5IHdpdGggdGhlIGVsZW1lbnQncyBJRCBhcyB0aGUga2V5XG4gICAgICAgICAgICBwdWJPcmROdW1Bbm5vdGF0aW9uc1tlbGVtZW50LmlkXSA9IGFubm90YXRpb247XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAgICBhbm5vdGF0aW9uLnNob3coKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBleGlzdGluZ0Fubm90YXRpb24uc2hvdygpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3B1Yl9wcmV2aWV3KCkge1xuICAgIGNvbnN0IGltZ19za2V0Y2hfY29sb3JzID0gW1wiI2YxZTNmM1wiLCBcIiNjMmJiZjBcIiwgXCIjOGZiOGVkXCIsIFwiIzYyYmZlZFwiLCBcIiMzNTkwZjNcIiwgXCIjZjdjNTlmXCJdO1xuICAgIGNvbnN0IHB1Yl9pbWdfc2tldGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnB1Yi1maWctc2tldGNoXCIpO1xuICAgIHB1Yl9pbWdfc2tldGNoZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBhbHJlYWR5IGhhcyBhbiBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICBjb25zdCBleGlzdGluZ0Fubm90YXRpb24gPSBwdWJQcmV2QW5ub3RhdGlvbnNbZWxlbWVudC5pZF07XG4gICAgICAgIGlmICghZXhpc3RpbmdBbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uID0gYW5ub3RhdGUoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFsxLCAxLCAxLCAxXSxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAzLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbWdfc2tldGNoX2NvbG9yc1soTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1nX3NrZXRjaF9jb2xvcnMubGVuZ3RoKSldLFxuICAgICAgICAgICAgICAgIGFuaW1hdGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgYW5ub3RhdGlvbiBvYmplY3QgaW4gdGhlIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZVxuICAgICAgICAgICAgcHViUHJldkFubm90YXRpb25zW2VsZW1lbnQuaWRdID0gYW5ub3RhdGlvbjtcbiAgICAgICAgICAgIGFubm90YXRpb24uc2hvdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHB1YlByZXZBbm5vdGF0aW9uc1tlbGVtZW50LmlkXS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlcl9jYXJkX3ZpZXcoZWxlbWVudElkKSB7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcblxuICAgIGlmICghY2hlY2tib3gpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCB3aXRoIElEICcgKyBlbGVtZW50SWQgKyAnIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHViQ2FyZFZpZXdcIik7XG4gICAgICAgIGxldCBsaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHViTGlzdFZpZXdcIik7XG4gICAgICAgIGlmIChjYXJkcyAmJiBsaXN0cykge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0cy5jbGFzc0xpc3QuYWRkKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGNhcmRzLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJfcHViX29yZGluYWwoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJfcHViX3ByZXZpZXcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZChcInZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBsaXN0cy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIEFPUy5pbml0KCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyX3B1Yl9vcmRpbmFsKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyX3B1Yl9wcmV2aWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZik7XG4gICAgZigpO1xufVxuXG4vLyBjb25zdCBza2V0Y2hfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNrZXRjaC1saW5rXCIpO1xuLy8gc2tldGNoX2xpbmtzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICBjb25zdCBhbm5vdGF0aW9uID0gYW5ub3RhdGUoZWxlbWVudCwge1xuLy8gICAgICAgICB0eXBlOiAndW5kZXJsaW5lJyxcbi8vICAgICAgICAgY29sb3I6ICd5ZWxsb3cnXG4vLyAgICAgfSk7XG4vLyAgICAgYW5ub3RhdGlvbi5zaG93KCk7XG4vLyB9KTtcbmV4cG9ydCB7cmVuZGVyX3B1Yl9vcmRpbmFsLCByZW5kZXJfcHViX3ByZXZpZXcsIHRyaWdnZXJfY2FyZF92aWV3fTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJUSFJFRSIsIlRvb2x0aXAiLCJBT1MiLCJ0cmlnZ2VyX2NhcmRfdmlldyIsInJlbmRlcl9oZWFkZXJfYW5pbWF0aW9uIiwid2luZG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInBhcGVyX2F1dGhvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZXBsYWNlQWxsIiwibGlzdF9wYXBlcl9hdXRob3JzIiwiaW5pdCIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJCaXJkcyIsIlZhbnRhQ2VsbHMiLCJlbGVtZW50SWQiLCJlbCIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwic2NhbGUiLCJjb2xvcjEiLCJjb2xvcjIiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInNjYWxlTW9iaWxlIiwiYW5ub3RhdGUiLCJwdWJPcmROdW1Bbm5vdGF0aW9ucyIsInB1YlByZXZBbm5vdGF0aW9ucyIsInJlbmRlcl9wdWJfb3JkaW5hbCIsInB1Yl9vcmRzIiwiZXhpc3RpbmdBbm5vdGF0aW9uIiwiaWQiLCJhbm5vdGF0aW9uIiwidHlwZSIsIml0ZXJhdGlvbnMiLCJwYWRkaW5nIiwic2hvdyIsInJlbmRlcl9wdWJfcHJldmlldyIsImltZ19za2V0Y2hfY29sb3JzIiwicHViX2ltZ19za2V0Y2hlcyIsInN0cm9rZVdpZHRoIiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhbmltYXRlIiwiY2hlY2tib3giLCJnZXRFbGVtZW50QnlJZCIsImVycm9yIiwiZiIsImNhcmRzIiwibGlzdHMiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==