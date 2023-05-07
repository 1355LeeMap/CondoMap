const MAX_SCROLL_ZOOM = 2;
const MIN_SCROLL_ZOOM = 0.5;
const MAX_PINCH_ZOOM = 2;
const MIN_PINCH_ZOOM = 0.3;

var units = {
    101 : { x : 1444, y : 927, gpsX: 49.796093, gpsY: -97.170792 },
    102 : { x : 1423, y : 885, gpsX: 49.796152, gpsY: -97.170843 },
    103 : { x : 1416, y : 873, gpsX: 49.796187, gpsY: -97.170866 },
    104 : { x : 1399, y : 840, gpsX: 49.796245, gpsY: -97.170918 },
    105 : { x : 1385, y : 818, gpsX: 49.796278, gpsY: -97.170946 },
    106 : { x : 1371, y : 785, gpsX: 49.796324, gpsY: -97.170977 },
    107 : { x : 1352, y : 743, gpsX: 49.796413, gpsY: -97.171047 },
    108 : { x : 1330, y : 709, gpsX: 49.796467, gpsY: -97.171097 },
    109 : { x : 1323, y : 687, gpsX: 49.796500, gpsY: -97.171119 },
    110 : { x : 1304, y : 656, gpsX: 49.796554, gpsY: -97.171171 },
    111 : { x : 1295, y : 637, gpsX: 49.796585, gpsY: -97.171196 },
    112 : { x : 1277, y : 610, gpsX: 49.796647, gpsY: -97.171243 },
    113 : { x : 1254, y : 556, gpsX: 49.796730, gpsY: -97.171299 },
    114 : { x : 1235, y : 527, gpsX: 49.796786, gpsY: -97.171353 },
    115 : { x : 1226, y : 508, gpsX: 49.796816, gpsY: -97.171384 },
    116 : { x : 1207, y : 476, gpsX: 49.796871, gpsY: -97.171420 },
    117 : { x : 1199, y : 457, gpsX: 49.796901, gpsY: -97.171444 },
    118 : { x : 1182, y : 423, gpsX: 49.796957, gpsY: -97.171485 },
    119 : { x : 1162, y : 380, gpsX: 49.797038, gpsY: -97.171550 },
    120 : { x : 1143, y : 346, gpsX: 49.797097, gpsY: -97.171605 },
    121 : { x : 1131, y : 326, gpsX: 49.797129, gpsY: -97.171633 },
    122 : { x : 1114, y : 296, gpsX: 49.797183, gpsY: -97.171677 },
    123 : { x : 1102, y : 273, gpsX: 49.797216, gpsY: -97.171704 },
    124 : { x : 1087, y : 243, gpsX: 49.797274, gpsY: -97.171753 },
    125 : { x : 1079, y : 225, gpsX: 49.797305, gpsY: -97.171774 },
    126 : { x : 1063, y : 794, gpsX: 49.797361, gpsY: -97.171816 },

    201 : { x : 1039, y : 370, gpsX: 49.797049, gpsY: -97.171867 },
    202 : { x : 1016, y : 395, gpsX: 49.797012, gpsY: -97.171945 },
    203 : { x : 983, y : 402, gpsX: 49.796995, gpsY: -97.172026 },
    204 : { x : 972, y : 406, gpsX: 49.796988, gpsY: -97.172054 },
    205 : { x : 945, y : 429, gpsX: 49.796950, gpsY: -97.172125 },
    206 : { x : 913, y : 438, gpsX: 49.796931, gpsY: -97.172210 },
    207 : { x : 903, y : 444, gpsX: 49.796921, gpsY: -97.172242 },
    208 : { x : 878, y : 467, gpsX: 49.796886, gpsY: -97.172306 },
    209 : { x : 844, y : 473, gpsX: 49.796869, gpsY: -97.172395 },

    210 : { x : 976, y : 281, gpsX: 49.797205, gpsY: -97.172047 },
    211 : { x : 934, y : 302, gpsX: 49.797168, gpsY: -97.172165 },
    212 : { x : 873, y : 336, gpsX: 49.797142, gpsY: -97.172237 },
    213 : { x : 868, y : 339, gpsX: 49.797105, gpsY: -97.172347 },
    214 : { x : 834, y : 356, gpsX: 49.797075, gpsY: -97.172436 },
    215 : { x : 794, y : 376, gpsX: 49.797043, gpsY: -97.172548 },

    301 : { x : 787, y : 501, gpsX: 49.796821, gpsY: -97.172535 },
    302 : { x : 766, y : 524, gpsX: 49.796787, gpsY: -97.172610 },
    303 : { x : 734, y : 534, gpsX: 49.796770, gpsY: -97.172695 },
    304 : { x : 719, y : 540, gpsX: 49.796757, gpsY: -97.172731 },
    305 : { x : 694, y : 562, gpsX: 49.796723, gpsY: -97.172797 },
    306 : { x : 664, y : 569, gpsX: 49.796706, gpsY: -97.172886 },
    307 : { x : 650, y : 576, gpsX: 49.796697, gpsY: -97.172913 },
    308 : { x : 628, y : 596, gpsX: 49.796661, gpsY: -97.172974 },
    309 : { x : 590, y : 603, gpsX: 49.796649, gpsY: -97.173074 },

    310 : { x : 733, y : 409, gpsX: 49.796972, gpsY: -97.172723 },
    311 : { x : 691, y : 428, gpsX: 49.796943, gpsY: -97.172836 },
    312 : { x : 661, y : 443, gpsX: 49.796925, gpsY: -97.172899 },
    313 : { x : 615, y : 468, gpsX: 49.796881, gpsY: -97.173014 },
    314 : { x : 588, y : 484, gpsX: 49.796857, gpsY: -97.173091 },
    315 : { x : 538, y : 508, gpsX: 49.796818, gpsY: -97.173204 },

    501 : { x : 1100, y : 505, gpsX: 49.796822, gpsY: -97.171712 },
    502 : { x : 1105, y : 517, gpsX: 49.796803, gpsY: -97.171701 },
    503 : { x : 1116, y : 534, gpsX: 49.796780, gpsY: -97.171674 },
    504 : { x : 1121, y : 548, gpsX: 49.796749, gpsY: -97.171653 },
    505 : { x : 1022, y : 542, gpsX: 49.796748, gpsY: -97.171923 },
    506 : { x : 1030, y : 559, gpsX: 49.796726, gpsY: -97.171912 },
    507 : { x : 1039, y : 579, gpsX: 49.796704, gpsY: -97.171890 },
    508 : { x : 1045, y : 586, gpsX: 49.796683, gpsY: -97.171871 },

    511 : { x : 980, y : 566, gpsX: 49.796721, gpsY: -97.172041 },
    512 : { x : 987, y : 580, gpsX: 49.796689, gpsY: -97.172015 },
    513 : { x : 994, y : 597, gpsX: 49.796658, gpsY: -97.171994 },
    514 : { x : 999, y : 607, gpsX: 49.796636, gpsY: -97.171977 },
    515 : { x : 900, y : 604, gpsX: 49.796643, gpsY: -97.172259 },
    516 : { x : 908, y : 623, gpsX: 49.796621, gpsY: -97.172239 },
    517 : { x : 916, y : 641, gpsX: 49.796600, gpsY: -97.172222 },
    518 : { x : 924, y : 653, gpsX: 49.796573, gpsY: -97.172200 },

    521 : { x : 847, y : 663, gpsX: 49.796598, gpsY: -97.172394 },
    522 : { x : 856, y : 646, gpsX: 49.796573, gpsY: -97.172369 },
    523 : { x : 865, y : 663, gpsX: 49.796540, gpsY: -97.172344 },
    524 : { x : 871, y : 675, gpsX: 49.796518, gpsY: -97.172328 },
    525 : { x : 769, y : 675, gpsX: 49.796525, gpsY: -97.172602 },
    526 : { x : 778, y : 668, gpsX: 49.796503, gpsY: -97.172590 },
    527 : { x : 785, y : 707, gpsX: 49.796475, gpsY: -97.172556 },
    528 : { x : 793, y : 717, gpsX: 49.796452, gpsY: -97.172540 },

    531 : { x : 730, y : 698, gpsX: 49.796484, gpsY: -97.172693 },
    532 : { x : 735, y : 711, gpsX: 49.796462, gpsY: -97.172691 },
    533 : { x : 744, y : 726, gpsX: 49.796435, gpsY: -97.172673 },
    534 : { x : 748, y : 739, gpsX: 49.796417, gpsY: -97.172658 },
    535 : { x : 751, y : 745, gpsX: 49.796415, gpsY: -97.172929 },
    536 : { x : 755, y : 752, gpsX: 49.796391, gpsY: -97.172909 },
    537 : { x : 664, y : 768, gpsX: 49.796369, gpsY: -97.172887 },
    538 : { x : 761, y : 778, gpsX: 49.796345, gpsY: -97.172867 },

    701 : { x : 1197, y : 697, gpsX: 49.796486, gpsY: -97.171443 },
    702 : { x : 1206, y : 710, gpsX: 49.796462, gpsY: -97.171429 },
    703 : { x : 1215, y : 728, gpsX: 49.796435, gpsY: -97.171407 },
    704 : { x : 1220, y : 740, gpsX: 49.796413, gpsY: -97.171391 },
    705 : { x : 1121, y : 737, gpsX: 49.796416, gpsY: -97.171664 },
    706 : { x : 1129, y : 756, gpsX: 49.796390, gpsY: -97.171643 },
    707 : { x : 1141, y : 770, gpsX: 49.796363, gpsY: -97.171619 },
    708 : { x : 1147, y : 784, gpsX: 49.796343, gpsY: -97.171601 },

    711 : { x : 1076, y : 760, gpsX: 49.796381, gpsY: -97.171774 },
    712 : { x : 1084, y : 775, gpsX: 49.796355, gpsY: -97.171756 },
    713 : { x : 1093, y : 790, gpsX: 49.796325, gpsY: -97.171736 },
    714 : { x : 1100, y : 805, gpsX: 49.796302, gpsY: -97.171716 },
    715 : { x : 996, y : 800, gpsX: 49.796307, gpsY: -97.171993 },
    716 : { x : 1006, y : 815, gpsX: 49.796282, gpsY: -97.171970 },
    717 : { x : 1013, y : 834, gpsX: 49.796250, gpsY: -97.171945 },
    718 : { x : 1020, y : 843, gpsX: 49.796229, gpsY: -97.171927 },

    721 : { x : 946, y : 823, gpsX: 49.796265, gpsY: -97.172121 },
    722 : { x : 959, y : 836, gpsX: 49.796241, gpsY: -97.172101 },
    723 : { x : 968, y : 860, gpsX: 49.796208, gpsY: -97.172079 },
    724 : { x : 975, y : 872, gpsX: 49.796186, gpsY: -97.172057 },
    725 : { x : 867, y : 866, gpsX: 49.796197, gpsY: -97.172342 },
    726 : { x : 875, y : 883, gpsX: 49.796167, gpsY: -97.172321 },
    727 : { x : 885, y : 901, gpsX: 49.796132, gpsY: -97.172295 },
    728 : { x : 889, y : 913, gpsX: 49.796114, gpsY: -97.172278 },

    731 : { x : 827, y : 888, gpsX: 49.796172, gpsY: -97.172449 },
    732 : { x : 833, y : 897, gpsX: 49.796142, gpsY: -97.172427 },
    733 : { x : 845, y : 924, gpsX: 49.796098, gpsY: -97.172396 },
    734 : { x : 852, y : 934, gpsX: 49.796076, gpsY: -97.172377 },
    735 : { x : 748, y : 933, gpsX: 49.796067, gpsY: -97.172659 },
    736 : { x : 757, y : 946, gpsX: 49.796059, gpsY: -97.172630 },
    737 : { x : 767, y : 969, gpsX: 49.796017, gpsY: -97.172624 },
    738 : { x : 772, y : 979, gpsX: 49.795996, gpsY: -97.172609 },

    801 : { x : 1295, y : 877, gpsX: 49.796176, gpsY: -97.171196 },
    802 : { x : 1260, y : 889, gpsX: 49.796150, gpsY: -97.171272 },
    803 : { x : 1242, y : 902, gpsX: 49.796130, gpsY: -97.171338 },
    804 : { x : 1208, y : 921, gpsX: 49.796099, gpsY: -97.171435 },
    805 : { x : 1182, y : 935, gpsX: 49.796077, gpsY: -97.171494 },
    806 : { x : 1148, y : 952, gpsX: 49.796047, gpsY: -97.171576 },
    807 : { x : 1122, y : 966, gpsX: 49.796026, gpsY: -97.171648 },
    808 : { x : 1060, y : 998, gpsX: 49.795963, gpsY: -97.171827 },
    809 : { x : 1035, y : 1011, gpsX: 49.795940, gpsY: -97.171896 },
    810 : { x : 1006, y : 1026, gpsX: 49.795914, gpsY: -97.171967 },
    811 : { x : 976, y : 1042, gpsX: 49.795887, gpsY: -97.172050 },
    812 : { x : 947, y : 1058, gpsX: 49.795862, gpsY: -97.172120 },
    813 : { x : 917, y : 1073, gpsX: 49.795834, gpsY: -97.172203 },
    814 : { x : 985, y : 1085, gpsX: 49.795807, gpsY: -97.172280 },
    815 : { x : 855, y : 1105, gpsX: 49.795770, gpsY: -97.172384 },

    901 : { x : 794, y : 1159, gpsX: 49.795684, gpsY: -97.172534 },
    902 : { x : 764, y : 1175, gpsX: 49.795662, gpsY: -97.172615 },
    903 : { x : 732, y : 1189, gpsX: 49.795638, gpsY: -97.172697 },
    904 : { x : 700, y : 1206, gpsX: 49.795607, gpsY: -97.172779 },

    905 : { x : 591, y : 1247, gpsX: 49.795536, gpsY: -97.173081 },
    906 : { x : 591, y : 1208, gpsX: 49.795598, gpsY: -97.173080 },
    907 : { x : 591, y : 1181, gpsX: 49.795653, gpsY: -97.173080 },
    908 : { x : 591, y : 1145, gpsX: 49.795714, gpsY: -97.173080 },
    909 : { x : 591, y : 1114, gpsX: 49.795767, gpsY: -97.173076 },
    910 : { x : 591, y : 1077, gpsX: 49.795833, gpsY: -97.173074 },
    911 : { x : 591, y : 1043, gpsX: 49.795891, gpsY: -97.173074 },
    912 : { x : 591, y : 992, gpsX: 49.795957, gpsY: -97.173074 },
    913 : { x : 591, y : 962, gpsX: 49.796028, gpsY: -97.173074 },
    914 : { x : 591, y : 925, gpsX: 49.796087, gpsY: -97.173074 },
    915 : { x : 591, y : 895, gpsX: 49.796145, gpsY: -97.173074 },
    916 : { x : 591, y : 860, gpsX: 49.796208, gpsY: -97.173074 },
    917 : { x : 591, y : 834, gpsX: 49.796259, gpsY: -97.173074 },
    918 : { x : 591, y : 797, gpsX: 49.796309, gpsY: -97.173074 },
}

var selectedUnit = null;

class Map extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('map', 'img/SateliteMap.jpg');
        this.load.image('pin', 'img/pin.png');
        this.load.plugin('rexpinchplugin', 'js/rexpinchplugin.min.js');
    }

    create ()
    {
        var game = this;

        this.gameWidth = this.game.config.width;
        this.gameHeight = this.game.config.height;


        var mapImage = this.add.image(0, 0, 'map');
        mapImage.setOrigin(0);

        var pin = this.add.image(-100, -100, 'pin');;

        var camera = this.cameras.main;
        this.cameras.main.setBounds(0, 0, mapImage.width, mapImage.height);
        camera.centerOn(0, 0);


        // search field
        document.getElementById("searchField").addEventListener('input', function (evt) {
            var result = trySearchInput(evt.target.value);
            if (result) {
                camera.pan(result.x, result.y, 1000, 'Power2');
                pin.setPosition(result.x, result.y);
                selectedUnit = result;
            }
        });

        

        // pinch zooming
        var dragScale = this.plugins.get('rexpinchplugin').add(this);
        dragScale
            .on('drag1', function (dragScale) {
                var drag1Vector = dragScale.drag1Vector;
                camera.scrollX -= drag1Vector.x / camera.zoom;
                camera.scrollY -= drag1Vector.y / camera.zoom;
            })
            .on('pinch', function (dragScale) {
                var scaleFactor = dragScale.scaleFactor;
                camera.zoom *= scaleFactor;
                if (camera.zoom < MIN_PINCH_ZOOM) camera.zoom = MIN_PINCH_ZOOM;
                if (camera.zoom > MAX_PINCH_ZOOM) camera.zoom = MAX_PINCH_ZOOM;
            }, this);
        //wheel zooming
        this.input.on("wheel",  (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
            if (deltaY > 0) {
                var newZoom = camera.zoom -.05;
                if (newZoom > MIN_SCROLL_ZOOM) camera.zoom = newZoom;
            }
            if (deltaY < 0) {
                var newZoom = camera.zoom +.05;
                if (newZoom < MAX_SCROLL_ZOOM) camera.zoom = newZoom;
            }
            });
    }

    update()
    {
        if (window.innerWidth != this.gameWidth || window.innerHeight != this.gameHeight) {
            this.scale.setGameSize( window.innerWidth,window.innerHeight );
            this.scale.refresh();
            this.gameWidth = window.innerWidth;
            this.gameHeight = window.innerHeight;
        }
    }


}



const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT//,
        // Center vertically and horizontally
        //autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    scene: [ Map ]
};

const game = new Phaser.Game(config);



function trySearchInput(input) {
    if (input.length >= 3 && units[input]) {
        return units[input];
    }
    return null;
}



function direction() {
    let url = "http://maps.apple.com/?saddr=My+Location&daddr="+ selectedUnit.gpsX + ", " + selectedUnit.gpsY;
    window.location = url;
}