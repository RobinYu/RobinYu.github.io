'use strict';
var paths = {};

// Folder naming conventions.
paths.assetsFolderName   = 'assets';
paths.stylesFolderName   = '_sass';


// Directory locations.
paths.assetsDir          = paths.assetsFolderName + '/';



// Glob patterns by file type.
paths.sassPattern        = '/**/*.scss';

// File globs
paths.sassFilesGlob      =paths.stylesFolderName + paths.sassPattern



module.exports = paths;
