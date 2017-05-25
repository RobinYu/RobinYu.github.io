'use strict';
var paths = {};

// Folder naming conventions.
paths.assetsFolderName   = 'assets';
paths.stylesFolderName   = '_sass';
paths.siteFolderName     = '_site';
paths.postFolderName     = '_posts';

// Directory locations.
paths.assetsDir          = paths.assetsFolderName + '/';

// Source asset files locations.
paths.sassFiles          = paths.stylesFolderName;

// Glob patterns by file type.
paths.sassPattern        = '/**/*.scss';
paths.markdownPattern    = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern        = '/**/*.html';
paths.ymlPattern         = '/**/*.yml';

// File globs
paths.htmlFilesGlob      = paths.htmlPattern
paths.mdFilesGlob        = paths.postFolderName + paths.markdownPattern
paths.sassFilesGlob      = paths.sassFiles + paths.sassPattern
paths.ymlFilesGlob       = paths.ymlPattern
paths.siteFiesGlob       = paths.siteFolderName + paths.sitePattern

module.exports = paths;
