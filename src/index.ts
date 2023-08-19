import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(createElement(App));

const resizeAndFitRoot = () => {
  const { innerWidth: width, innerHeight: height } = window;

  const baseWidth = Math.max(Math.min(420, width), 375);
  const baseHeight = 812;
  const maxScale = 1.25;

  const scale = Math.min(width / baseWidth, height / baseHeight, maxScale);

  const scaleString = `scale(${scale})`;

  const marginHorizontal = (width - baseWidth * scale) / 2;

  container.style.marginLeft = `${marginHorizontal}px`;
  container.style.marginRight = `${marginHorizontal}px`;
  container.style.transform = scaleString;
  container.style.transformOrigin = 'top left';
  container.style.width = `${baseWidth}px`;
  container.style.minHeight = `${baseHeight}px`;

  document.body.style.height = `${height}px`;
  document.body.style.maxHeight = `${height}px`;
};

resizeAndFitRoot();

window.addEventListener('resize', resizeAndFitRoot);
