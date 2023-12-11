import language from './_language.js';
import header from './_header.js';
import jobs from './_jobs.js';
import jobsNavigation from './_jobs-navigation.js';
import projects from './_projects.js';
import anchorLinks from './_anchor-links.js';

header();
anchorLinks();
await jobs();
jobsNavigation();
await projects();
language();