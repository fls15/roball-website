---
templateEngineOverride: njk,md
sort: 1
tags: [concept]
---

# Online-Media Strategie

<script>
  function openMiroFullscreen() {
    document.getElementById("miro-fullscreen").style.display = "block";
  }

  function closeMiroFullscreen() {
    document.getElementById("miro-fullscreen").style.display = "none";
  }
</script>

<!-- Normale Einbettung -->
<div style="width:768px; height:432px; border:1px solid #ccc;">
  <iframe
    id="miro-embed"
    src="https://miro.com/app/live-embed/BOARD-ID/"
    width="100%"
    height="100%"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Fullscreen Button -->
<button onclick="openMiroFullscreen()" style="margin-top:10px;">
  Fullscreen anzeigen
</button>

<!-- Fullscreen Overlay -->
<div id="miro-fullscreen"
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
  <button onclick="closeMiroFullscreen()"
          style="
            position:absolute;
            top:5px;
            right:5px;
            padding:5px 10px;
          ">
    X
  </button>
</div>


