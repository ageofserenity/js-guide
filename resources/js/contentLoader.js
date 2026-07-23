const groups = {

                /* ==========================================================
     SECTION 2: MENTAL MODEL
     ========================================================== */

 "resources/js/content/mentalModel/": [
    "mentalModelPt1.js",
    "mentalModelPt2.js",
  ],


                  /* ==========================================================
     SECTION 3 PART 1: TOPIC GUIDES LESSONS 3.1 - 3.9
     ========================================================== */

  "resources/js/content/topicBasicContent/": [
    "topicBasicContentPt1.js",
    "topicBasicContentPt2.js",
    "topicBasicContentPt3.js",
    "topicBasicContentPt4.js",
    "topicBasicContentPt5.js",
    "topicBasicContentPt6.js",
  ],


                    /* ==========================================================
     SECTION 3 PART 2: TOPIC GUIDES LESSONS 3.10 - 3.18
     ========================================================== */

    "resources/js/content/topicAdvancedContent/": [
    "topicAdvancedContentPt1.js",
    "topicAdvancedContentPt2.js",
    "topicAdvancedContentPt3.js",
    "topicAdvancedContentPt4.js",
    "topicAdvancedContentPt5.js",
    "topicAdvancedContentPt6.js",
  ],


                      /* ==========================================================
     SECTION 4: COMBOS
     ========================================================== */
 
  "resources/js/content/": [
    "combosPt1.js",
  ],
  


                      /* ==========================================================
     SECTION 5: METHOD/SNIPPET REFERENCE
     ========================================================== */
 
  "resources/js/content/methodContent/": [
    "methodContentPt1.js",
    "methodContentPt2.js",
    "methodContentPt3.js",
    "methodContentPt4.js",
    "methodContentPt5.js",
    "methodContentPt6.js",
    "methodContentPt7.js",
  ],




                      /* ==========================================================
     SECTION 7: DEBUG/ERRORS
     ========================================================== */
 
  "resources/js/content/debugContent/": [
    "debugContentPt1.js",
    "debugContentPt2.js",
    "debugContentPt3.js",
    "debugContentPt4.js",
  ],
};

Object.entries(groups).forEach(([folder, files]) => {
  files.forEach(file => {
    const script = document.createElement("script");
    script.src = folder + file;
    script.async = false;
    document.head.appendChild(script);
  });
});