const { JSDOM } = require('jsdom');

global.window = new JSDOM('<!DOCTYPE html><html><body></body></html>').window;
global.document = window.document;
global.navigator = window.navigator;