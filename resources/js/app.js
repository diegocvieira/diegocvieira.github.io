import language from './_language.js';
import header from './_header.js';
import archive from './_archive.js';
import anchorLinks from './_anchor-links.js';
import mouseMoveEffect from './_mouse-move-effect.js';
import jobs from './_jobs.js';
import projects from './_projects.js';
import copyright from './_copyright.js';

await jobs();
await projects();
language();
header();
archive();
anchorLinks();
mouseMoveEffect();
copyright();