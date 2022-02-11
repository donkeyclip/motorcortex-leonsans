import MC from "@donkeyclip/motorcortex";
import compAtrrs from "./compoAttributes";

class LeonIncident extends MC.Effect {
  getScratchValue() {
    const scratchValues = {};
    const LeonClip = this.element.entity.leon;
    compAtrrs.LeonAttrs.forEach(
      (key) => (scratchValues[key] = LeonClip[key] ?? 0)
    );
    return scratchValues;
  }

  drawning() {
    // handle different cases of drawing functionalities
    const { drawing, ctx, leon, patternHeight, patternWidth } =
      this.element.entity;

    switch (drawing) {
      case "colorful":
        leon.drawColorful(ctx);
        break;
      case "pattern":
        leon.pattern(
          ctx,
          leon.patternWidth ?? patternWidth,
          leon.patternHeight ?? patternHeight
        );
        break;
      default:
        leon.draw(ctx);
    }
  }
  clearRect() {
    // this function clears the canvas in every RAF
    const { ctx, sw, sh } = this.element.entity;
    ctx.clearRect(0, 0, sw, sh);
  }

  animate(fraction) {
    // this function animate the attributes before drawing them
    const { leon } = this.element.entity;
    compAtrrs.LeonAttrs.forEach((compoAttribute) => {
      const targetValue = this.targetValue[compoAttribute];
      const initialValue = this.initialValue[compoAttribute];
      const difference = targetValue - initialValue;
      const finalValue = fraction * difference + initialValue;

      leon[compoAttribute] = finalValue;

      if (compoAttribute === "completion_rate") {
        leon.drawing.forEach((drawingElement) => {
          drawingElement.value = finalValue;
        });
      }
    });
  }

  onProgress(fraction) {
    compAtrrs.LeonAttrs.forEach((compoAttribute) => {
      const initialValue = this.initialValue[compoAttribute];
      const targetValue = this.targetValue[compoAttribute];
      const difference = targetValue - initialValue;
      const { leon } = this.element.entity;
      const hasCompletionRate = Object.prototype.hasOwnProperty.call(
        this.targetValue,
        "completion_rate"
      );
      leon[compoAttribute] = fraction * difference + initialValue;
    });

    this.clearRect();
    this.animate(fraction);
    this.drawning();
  }
}

export default LeonIncident;
