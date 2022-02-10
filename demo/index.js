import { AudioPlayback, HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import LeonPlugin from "../dist/motorcortex-leonsans.esm";

const LeonSans = loadPlugin(LeonPlugin);

const css = `.container {
  position: relative;
  background:linear-gradient(141deg, #000 25%, #000 40%, #000 55%);
  height:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
 }
 .row{
  display: flex;
  justify-content: space-around;
  align-items: center;

 }
 .cel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
}`;

const html = `<div class="container"></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "800px",
  height: "600px",
};

const clip = new HTMLClip({
  css,
  html,
  host,
  containerParams,
  audioSources: [
    {
      src: "https://donkeyclip.github.io/motorcortex-leonsans/demo/d2.mp3",
      id: "my-wav",
      base64: false,
    },
  ],
});

const songPlayback = new AudioPlayback(
  {},
  {
    selector: "~#my-wav",
    startFrom: 0,
    duration: 5600,
  }
);

clip.addIncident(songPlayback, 0);

const LeonClip = new LeonSans.Clip(
  {
    canvasId: "leonObj",
    sw: 1400 / 2,
    sh: 700 / 2,
    text: "KISSMYBUTTON\nLEON_SANS\nPLUGIN",
    weight: 100,
    round: true,
    drawing: "colorful",
    colorful: ["#64d3ce", "#2a92ce82", "#ff003c", "#2a92ce2e", "#2a92ce00"],
    color: [
      ["rgb(0, 255, 68)", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
      ["rgb(0, 255, 68)", "#ffe600", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],

      ["#ff00fb", "#2a92ce", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
    ],
    patternWidth: 1,
    patternHeight: 10,
    speed: 1,
    size: 80,
  },
  {
    selector: ".container",
  }
);

const InitialDrawLetter = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        completion_rate: 1,
        weight: 100,
      },
    },
    initialValues: {
      LeonAttrs: {
        completion_rate: 0,
        weight: 100,
      },
    },
  },
  {
    duration: 900,
    selector: "!#leonObj",
  }
);

const ScaleUpFontWeight = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        weight: 900,
      },
    },
  },
  {
    duration: 50,
    selector: "!#leonObj",
  }
);

const ScaleDownFontWeight = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        weight: 100,
      },
    },
  },
  {
    duration: 50,
    selector: "!#leonObj",
  }
);

const SecondFill = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        completion_rate: 0.5,
      },
    },
    initialValues: {
      LeonAttrs: {
        completion_rate: 1,
      },
    },
  },
  {
    duration: 1000,
    selector: "!#leonObj",
  }
);
const ThirdFill = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        completion_rate: 1,
      },
    },
    initialValues: {
      LeonAttrs: {
        completion_rate: 0.5,
      },
    },
  },
  {
    duration: 1000,
    selector: "!#leonObj",
  }
);

const ScaleUpTwo = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAttrs: {
        weight: 900,
        leading: 7,
      },
    },
  },
  {
    duration: 900,
    selector: "!#leonObj",
  }
);

LeonClip.addIncident(InitialDrawLetter, 0);
LeonClip.addIncident(ScaleUpFontWeight, 900);
LeonClip.addIncident(ScaleDownFontWeight, 950);
LeonClip.addIncident(SecondFill, 1100);
LeonClip.addIncident(ThirdFill, 2400);
LeonClip.addIncident(ScaleUpTwo, 3400);
clip.addIncident(LeonClip, 0);

new Player({ clip });
