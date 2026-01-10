---
templateEngineOverride: njk,md
sort: 1
tags: [concept]
---

# Online-Media Strategie

## New Style

<!-- Normale Einbettung -->
<div style="width:768px; height:432px; border:1px solid #ccc;">
  <iframe width="768" height="432px" src="https://miro.com/app/live-embed/uXjVGS0_Zbk=/?embedMode=view_only_without_ui&moveToViewport=-3945,-669,1523,854&embedId=100906621121" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
</div>

<!-- Overlay Button -->
<button onclick="openMiroOverlay()" style="margin-top:10px;">
  Öffnen im Overlay
</button>

<!-- Overlay Overlay -->
<div id="miro-overlay"
     style="
       display:none;
       position:fixed;
       top:50%;
       left:50%;
       width:1024px;
       height:768px;
       transform:translate(-50%, -50%);
       background:white;
       border:2px solid #000;
       z-index:9999;
     ">
  <iframe width="100%" height="100%" src="https://miro.com/app/live-embed/uXjVGS0_Zbk=/?embedMode=view_only_without_ui&moveToViewport=-3945,-669,1523,854&embedId=100906621121" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

  <!-- Close Button -->
  <button onclick="closeMiroOverlay()"
          style="
            position:absolute;
            top:5px;
            right:5px;
            padding:5px 10px;
          ">
    X
  </button>
</div>


<script>
  function openMiroOverlay() {
    document.getElementById("miro-overlay").style.display = "block";
  }

  function closeMiroOverlay() {
    document.getElementById("miro-overlay").style.display = "none";
  }
</script>
