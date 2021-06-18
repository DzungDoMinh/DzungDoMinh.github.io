// This example requires the Drawing library. Include the libraries=drawing
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">

function select_file (fileTyp) {
  // this function does not stop JS
  return new Promise(async function(resolve, reject) {
      var idna = "mdGetFile";
      var dlg = document.getElementById(idna);
      if (dlg == null)
      {
        dlg = document.createElement("input");
        dlg.type = "file";
        dlg.id = idna;
        if (fileTyp != null && fileTyp != "") dlg.accept = fileTyp;
        dlg.multiple = true;
        dlg.style.display = "none";

        document.body.appendChild(dlg);
      }

      const obj = await dlg.click();
      resolve(dlg.files);
  });
}

function initMap() {
  var cl = { lat: 21.013, lng: 105.831 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: cl,
    zoom: 17,
  });

  const trafficLayer = new google.maps.TrafficLayer();
  //trafficLayer.setMap(map);
  const transitLayer = new google.maps.TransitLayer();
  //transitLayer.setMap(map);

  //https://developers.google.com/maps/documentation/javascript/examples/control-custom
  var ocmds = document.createElement("div");
  ocmds.id = "ocmds";
  ocmds.classList.add("cmdpanel");
  ocmds.style.backgroundColor = "rgba(219, 149, 57, 0.6)";
  ocmds.style.border = "2px solid #fff";
  ocmds.style.borderRadius = "3px";
  ocmds.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  ocmds.style.cursor = "pointer";
  ocmds.style.marginTop = "12px";
  ocmds.style.marginBottom = "22px";
  ocmds.style.textAlign = "left";
  ocmds.title = "Google Map tools from Tan Phong E&C";

  // traffic layer control
  var ockLayerTraf = document.createElement("input");
  ockLayerTraf.id = "ockLayerTraf";
  ockLayerTraf.type = "checkbox";
  //ockLayerTraf.text = "this is my text";
  ockLayerTraf.style.marginRight = "5px";
  //ockLayerTraf.style.paddingInlineStart = "true";
  ockLayerTraf.checked = false;
  ocmds.appendChild(ockLayerTraf);

  var ockLayerTrafLb = document.createElement("label");
  ockLayerTrafLb.id = "ockLayerTrafLb";
  ockLayerTrafLb.innerHTML = "Show traffic map";
  //ockLayerTrafLb.style.textAlign="top";  
  ockLayerTrafLb.style.paddingBottom="3px";  
  //ockLayerTrafLb.style.paddingInlineEnd = "true";  
  ocmds.appendChild(ockLayerTrafLb);

  ockLayerTraf.addEventListener("change", (e) => {
    if (ockLayerTraf.checked)
    {
      trafficLayer.setMap(map);
    }
    else
    {
      trafficLayer.setMap(null);
    }
  });

  //*** Transit layer control */
  ocmds.appendChild(document.createElement("br"));
  var ockLayerTrans = document.createElement("input");
  ockLayerTrans.id = "ockLayerTrans";
  ockLayerTrans.type = "checkbox";
  ockLayerTrans.style.marginRight = "5px";
  //ockLayerTrans.style.paddingInlineStart = "true";
  ockLayerTrans.checked = false;
  ocmds.appendChild(ockLayerTrans);

  var ockLayerTransLb = document.createElement("label");
  ockLayerTransLb.id = "ockLayerTrafLb";
  ockLayerTransLb.innerHTML = "Show transit map";
  //ockLayerTransLb.style.textAlign="top";  
  ockLayerTransLb.style.paddingBottom="3px";  
  //ockLayerTransLb.style.paddingInlineEnd = "true";  
  ocmds.appendChild(ockLayerTransLb);

  ockLayerTrans.addEventListener("change", (e) => {
    if (ockLayerTrans.checked)
    {
      transitLayer.setMap(map);
    }
    else
    {
      transitLayer.setMap(null);
    }
  });

  ocmds.appendChild(document.createElement("br"));
  ocmds.appendChild(document.createElement("br"));

  //*** */
  const obtImportKml = document.createElement("button");
  obtImportKml.id = "obtImportKml";
  obtImportKml.textContent = "Import KML files";
  obtImportKml.accessKey = "k";
  obtImportKml.classList.add("custom-map-control-button");
  ocmds.appendChild(obtImportKml);

  const filedlg = document.createElement("input");
  filedlg.type = "file";
  filedlg.id = "filedlg";
  filedlg.accept = ".kml;.kmz";
  filedlg.multiple = true;
  filedlg.style.display = "none";
  ocmds.appendChild(filedlg);

  obtImportKml.addEventListener("click", async function (e) {
    // var arr = await select_file(".kml;.kmz");
    // alert("after dialog");

  const okml = await new google.maps.KmlLayer({
    //url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
    //url: "https://DzungDoMinh.github.io/kml3.kml",
    //url: "file:///C:/1_GoogleMap/MD_map_tools/kml3.kml",
    url: "https://36fa6ff1-de80-42d2-9fc8-576a1fe11ccd.usrfiles.com/ugd/36fa6f_f353985b437b457c9a48beb91557e956.kml",
    //url: "https://drive.google.com/drive/folders/1mOnwu-UZwDExFM3Dzwkpei2PBP0nqmDf/kml3.kml", // Google driver - not OK
    //url: "https://1drv.ms/u/s!Aj7tLhBboez6xXxaJ8s9FhlUQSrI?e=urNB1k/kml3.kml", // OneDrive - not OK
    map: map,
  });

    //filedlg.click();
  });
  filedlg.addEventListener('change', async function (event) {
    const ds = event.target.files;
    for (var i = 0; i < ds.length; i++)
    {
      const fni = ds[i];
      alert(fni.name);
    };
  }); 

  map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(ocmds); //LEFT-TOP BOTTOM_LEFT TOP-CENTER

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYLINE,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        //google.maps.drawing.OverlayType.MARKER,
        //google.maps.drawing.OverlayType.CIRCLE,
        //google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        //google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });
  drawingManager.setMap(map);

// Snap-to-road when the polyline is completed.
drawingManager.addListener('polylinecomplete', function(poly) {
  animateCircle(poly);
  
  // dsPolys.push(poly);
  
  // const opopUpmenu = new popUpmenu();
  // google.maps.event.addListener(poly, "contextmenu", (e) => {
  //   // if (e.vertex == undefined) {
  //   //   return;
  //   // }
  //   var p3;
  //   //p3 = e.latLng;
  //   p3 = poly.getPath().getAt(0);
  //   opopUpmenu.open(map, poly.getPath(), p3);//e.vertex
  // });

  // // ***
  // drawingManager.setOptions({
  //   drawingMode: google.maps.drawing.OverlayType.NONE,
  //   // drawingControlOptions: {
  //   //   position: google.maps.ControlPosition.TOP_CENTER,
  //   //   drawingModes: ['polyline', 'marker'],
  //   // }
  // });
});

  // Symbol that gets animated along the polyline
  var icoCir = {
    path: google.maps.SymbolPath.CIRCLE,
    // text: "text", // this is not effect
    // label: "label",
    // title: "title",
    // desc: "desc",
    scale: 8,
    strokeColor: '#005db5',
    strokeWidth: '#005db5'
  };

  var icoCirF = {
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0", // this is a circle
      fillColor: '#FF0000',
      fillOpacity: .6,
      strokeWeight: 0,
      scale: 1,
      text: "57",
  };

  var icoSquare = {
    path: 'M -2,-2 2,-2 2,2 -2,2 z', // 'M -2,0 0,-2 2,0 0,2 z',
    strokeColor: '#F00',
    fillColor: '#F00',
    fillOpacity: 1,
    scale: 5
  };

  var icoBlank = "this is blank icon"; // icon : "abc", return blank icon

  const icoSvg = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  // Animate an icon along a polyline
  function animateCircle(polyline) {
    var count = 0;
    // fallback icon if the poly has no icon to animate
    var defaultIcon = [
      {
        icon: icoCirF,
        offset: '100%'
      }
    ];
    window.setInterval(function() {
      count = (count + 1) % 200;
      var icons = polyline.get('icons') || defaultIcon;
      icons[0].offset = (count / 2) + '%';
      polyline.set('icons', icons);
    }, 20);
  }
  
  // this is blank icon with label
  var marker = new google.maps.Marker({
    position: cl,
    map: map,
    icon: icoSvg,
    label: {
      text:"This is label of marker",
      fontWeight: "bold",
      height: "20px",
      color: "blue",
    },
    title: "this is marker's title",
    description: "this is description",
    draggable: true,
  })
  const infoWindow = new google.maps.InfoWindow(); 
  marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(marker.getTitle());
    infoWindow.open(marker.getMap(), marker);
  });

  var line = new google.maps.Polyline({
    path: [cl, {lat: 21.012101918973915, lng: 105.8291261291371}],
    strokeOpacity: 1,//*** */
    icons: [{
      icon: icoCirF,
      offset: '100%', // start position
      repeat: '22%',//'20px',
    }],
    map: map
  });
  line.addListener("click", function (e) {
    infoWindow.close();
    const p3 = e.latLng;
    const tx = "<td style='width:70%;padding-left:25px'>Location: " + p3.lat().toFixed(5) + "," + p3.lng().toFixed(5) + "</td>";
    var txt = "<table><tr><td style='width:30%;'><img src='TanPhongEC.png' style='width:120px;height:80px'></td>" + tx + "</tr></table>";
    infoWindow.setContent(txt);
    infoWindow.setPosition(p3);
    infoWindow.open(line.getMap());
    //omk.setMap(null);
  });

}