const CANVAS_WIDTH = 700;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = Math.floor((CANVAS_WIDTH - CLOUD_WIDTH) / 2);
const CLOUD_Y = 10;
const COLUMN_WIDTH = 40;
const GIST_HEIGHT = 150;
const COLUMN_DISTANCE = 50;
const COLUMN_SELF_COLOR = '#ff0000';

const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function(array) {
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    maxElement = (maxElement < array[i]) ? array[i] : maxElement
  }

  return maxElement
};

const renderBlueColor = function() {
  let randomColor = Math.floor(Math.random() * 255);
  return `#0000${randomColor.toString(16)}`
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "#000000";
  ctx.fillText("Ура вы победили!", CLOUD_X + 10, CLOUD_Y + 16);
  ctx.fillText("Список результатов:", CLOUD_X + 10, CLOUD_Y + 42);

  let maxElement = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let columnHeight = times[i] * GIST_HEIGHT / maxElement;
    let columnX = CLOUD_X + COLUMN_DISTANCE * (i + 1) + COLUMN_WIDTH * i;
    let columnY = CLOUD_Y + CLOUD_HEIGHT - columnHeight;
    const FONT_HEIGHT = 16;
    if (names[i] === 'Вы') {
      ctx.fillStyle = COLUMN_SELF_COLOR;
    }
    else {
      ctx.fillStyle = renderBlueColor()
    }
    ctx.fillText(names[i], columnX, columnY - FONT_HEIGHT);
    ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeight)
  }
};
