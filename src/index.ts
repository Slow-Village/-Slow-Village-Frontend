import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(createElement(App));

const resizeAndFitRoot = () => {
  const baseWidth = 375;
  const maxScale = 1.25;

  const { innerWidth: width, innerHeight: height } = window;
  const scale = Math.max(Math.min(maxScale, width / baseWidth), 1);

  const scaleString = `scale(${scale})`;

  const marginHorizontal = (width - baseWidth * scale) / 2;

  container.style.marginLeft = `${marginHorizontal}px`;
  container.style.marginRight = `${marginHorizontal}px`;
  container.style.transform = scaleString;
  container.style.transformOrigin = 'top left';
  container.style.width = `${baseWidth}px`;

  document.body.style.height = `${height}px`;
  document.body.style.maxHeight = `${height}px`;
};

resizeAndFitRoot();

window.addEventListener('resize', resizeAndFitRoot);
