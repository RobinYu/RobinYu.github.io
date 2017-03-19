'use strict';
var paths = {};

// Folder naming conventions.
paths.assetsFolderName   = 'assets';
paths.stylesFolderName   = '_sass';


// Directory locations.
paths.assetsDir          = paths.assetsFolderName + '/';

// Source asset files locations.
paths.sassFiles          = paths.stylesFolderName;

// Glob patterns by file type.
paths.sassPattern        = '/**/*.scss';

// File globs
paths.sassFilesGlob      =paths.sassFiles + paths.sassPattern



module.exports = paths;
