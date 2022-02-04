# MotorCortex-LeonSans

**Table of Contents**

- [MotorCortex-LeonSans](#motorcortex-leonsans)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [LeonSans Clip](#leonsans-clip)
  - [LeonIncident](#leonincident)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-leonsans/demo/)

# Intro / Features
MotorCortex-LeonSans brings some capabilities of [LeonSans](https://github.com/cmiscm/leonsans#readme) library into MotorCortex. With LeonSans plugin you can render exquisite text anywhere in your clip.

This Plugin exposes two Incidents:
- LeonSans Clip
- LeonIncident

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-leonsans
# OR
$ yarn add @donkeyclip/motorcortex-leonsans
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex/";
import LeonPlugin from "@donkeyclip/motorcortex-leonsans";
const LeonSans = loadPlugin(LeonPlugin);
```
# Creating Incidents

## LeonSans Clip

By the use of the plugin's `Clip` you can render a canvas which will host your text.

The `Clip` takes a number of attributes (listed below) that define both the canvas and the rendered text characteristics and it can accept an unlimited number of `LeonSans` Incidents that can animate the rendered text.

### Example

```javascript
const clipName = new LeonSans.Clip(
  {
    canvasId: "leonObj",
    sw: 800,
    sh: 600,
    text: "abcdefghijklmn\nopqrstuvwxyz",
    weight: 100,
    round: true,
    multiply: true,
    drawing: "colorful",
    color: [["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"]],
    colorful: ["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
    pathGap: -1,
    patternWidth: 1,
    patternHeight: 10,
    speed: 1,
    tracking: 20,
    leading: 10,
    size: 80,
  },
  {
    selector: ".test",
  }
);
```

### LeonSans Clip Attrs

| Name          |                                                                                   Are                                                                                   |                                                   Values |
| ------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------: |
| canvasId      | the id of the rendered canvas that contains the text. This id will be used by all `LeonIncident` Incidents, added to the `Clip` timeline, via their `selector` property |                                                   string |
| sw            |                                                                 width of clip canvas (how many pixels)                                                                  |                                     all positive numbers |
| sh            |                                                                 height of clip canvas (how many pixels)                                                                 |                                     all positive numbers |
| text          |                                                                           the text to display                                                                           |                                                   string |
| weight        |                                                                         The weight of the font                                                                          |                                           number 1 - 900 |
| round         |                                                             round the corners of font if they are not path                                                              |                                                  boolean |
| multiply      |                                                      applying multiply effect when the font has more then 1 colors                                                      |                                                  boolean |
| drawing       |                                                                         type of the font effect                                                                         | one of: `drawing`, `pattern`, `colorful`, `colorPattern` |
| color         |                                                                      The colors of the characters                                                                       |                                array of arrays of colors |
| colorful      |                                        The list of colors of each character. Only applicable if drawing property is `colorfull`                                         |                                          array of colors |
| pathGap       |                                                The gap between each coordinate of the points on a line of each character                                                |                                                   number |
| patternWidth: |                                                        the width of the lines when drawing property is `pattern`                                                        |                                                   number |
| patternHeight |                                                       the height of the lines when drawing property is `pattern`                                                        |                                                   number |
| speed         |                                                     speed of color changing when drawing property is `colorPattern`                                                     |                                     number, from 0 to 10 |
| tracking      |                                                          The spacing between the characters of a block of text                                                          |                                                   number |
| leading       |                                                                 The distance between each line of text                                                                  |                                                   number |
| size          |                                                                              size of text                                                                               |                                                   number |

## LeonIncident

### Example

```javascript
const nameOfIncident = new LeonSans.LeonIncident(
  {
    animatedAttrs: {
      LeonAtrs: {
        completion_rate: 1,
        weight: 600,
        // tracking: 20,
        leading: 10,
        // size: 90,
        // pathGap: 1,
        patternWidth: 100,
        // patternHeight: 90
      },
    },
    initialValues: {
      LeonAtrs: {
        completion_rate: 0,
        weight: 100,
        // tracking: 10,
        // leading: 1,
        size: 80,
        // pathGap: 0,
        patternWidth: 1,
        // patternHeight: 10
      },
    },
  },
  {
    duration: 2000,
    selector: "!#leonObj",
  }
);
```

### LeonIncident Attrs

The `LeonIncident` attrs takes on the `animatedAttrs` object just one composite attribute: `LeonAtrs`. The supported attributes of this composite attribute are:

| Name            |                                    Are                                    |          Values |
| --------------- | :-----------------------------------------------------------------------: | --------------: |
| completion_rate |                        The rate of text completion                        | num from 0 to 1 |
| weight          |                      The weight of the font: 1 - 900                      |          number |
| pathGap         | The gap between each coordinate of the points on a line of each character |          number |
| patternWidth:   |         the width of the lines when drawing property is `pattern`         |          number |
| patternHeight   |        the height of the lines when drawing property is `pattern`         |          number |
| tracking        |           The spacing between the characters of a block of text           |          number |
| leading         |                  The distance between each line of text                   |          number |
| size            |                               size of text                                |          number |

#### IMPORTANT
Along with the attributes, all `LeonIncident` incidents must take on their props the `selector` key which targets the canvas id of their parent Clip via the convention: `!#<canvasId>`

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

### Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
