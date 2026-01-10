---
templateEngineOverride: njk,md
sort: 1
tags: [concept]
---

# Online-Media-Strategie

## Miro Boards

Ich habe meine Online-Strategie mit [Miro](https://miro.com) entworfen und geplant. Mit diesem beliebten Collaboration-Tools kann ich meinen Ideen vom Brainstorming bis zum fertigen Produkt freien Lauf lassen.

<!-- Normale -->
<div class="miro-responsive">
  <iframe 
    src="https://miro.com/app/live-embed/uXjVGS0_Zbk=/?embedMode=view_only_without_ui&moveToViewport=-3945,-669,1523,854&embedId=100906621121" 
    frameborder="0" 
    scrolling="no" 
    allow="fullscreen; clipboard-read; clipboard-write" 
    allowfullscreen>
  </iframe>
</div>

<!-- Overlay
<button onclick="openMiroOverlay()" style="margin-top:10px;">
  Öffnen im Overlay
</button>

<div id="miro-overlay" class="miro-responsive">
  <iframe src="https://miro.com/app/live-embed/uXjVGS0_Zbk=/?embedMode=view_only_without_ui&moveToViewport=-3945,-669,1523,854&embedId=100906621121" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

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
 -->


<style>
   .miro-responsive { 
      position: relative; 
      width: 100%; 
      padding-bottom: 56.25%; /* 16:9 Verhältnis */ 
      height: 0; 
      overflow: hidden; 
    }
    .miro-responsive iframe { 
      position: absolute; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      border: 0; 
    }
</style>

<script>
  function openMiroOverlay() {
    document.getElementById("miro-overlay").style.display = "block";
  }

  function closeMiroOverlay() {
    document.getElementById("miro-overlay").style.display = "none";
  }
</script>
