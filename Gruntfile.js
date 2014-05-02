module.exports = function(grunt) {

    "use strict";

    var fs = require('fs'),
        pkginfo = grunt.file.readJSON("package.json");

    grunt.initConfig({

        pkg: pkginfo,

        meta: {
            banner: "/**! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.author.name %> | <%= pkg.license %> */"
        },

        less: (function() {

            var lessconf = {
                dev: {
                    options: {
                        paths: ["src/less"]
                    },
                    files: {
                        "assets/css/style.css": ["src/less/*.less", "!src/less/_*.less"]
                    }
                },
                prod: {
                    options: {
                        paths: ["src/less"],
                        compress: true,
                        cleancss: true
                    },
                    files: {
                        "assets/css/style.min.css": ["src/less/*.less", "!src/less/_*.less"],
                        "assets/css/jquery.custombox.min.css": ["assets/css/jquery.custombox.css"],
                        "assets/css/jquery.bxslider.min.css": ["assets/css/jquery.bxslider.css"]
                    }
                },
                sourceMap: {
                    options: {
                        paths: ["src/less"],
                        cleancss: true,
                        // LESS source maps
                        // To enable, set sourceMap to true and update sourceMapRootpath based on your install
                        sourceMap: true,
                        sourceMapFilename: 'css/style.css.map',
                        sourceMapRootpath: 'assets/css/'
                    },
                    files: {
                        "assets/css/style.css": ["src/less/*.less", "!src/less/_*.less"],
                    }
                }
            };

            return lessconf;
        })(),

        copy: {
            fonts: {
                files: [{
                    expand: true,
                    cwd: "src/fonts",
                    src: ["*"],
                    dest: "assets/fonts/"
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: "src/images",
                    src: ["**"],
                    dest: "assets/images/"
                }]
            },
            commonsJs: {
                files: [{
                    expand: true,
                    cwd: "src/js",
                    src: ["home.js"],
                    dest: "assets/js/"
                }]
            }
        },

        concat: {
            dist: {
                options: {
                    separator: "\n\n"
                },
                src: [
                    "src/js/modernizr.js",
                    "src/js/wdsign.pack.js",
                    "src/js/jquery.collapse.js",
                    "src/js/jquery.bxslider.min.js",
                ],
                dest: "assets/js/plugins.js"
            }
        },

        usebanner: {
            dist: {
                options: {
                    position: "top",
                    banner: "<%= meta.banner %>\n",
                    linebreak: false
                },
                files: {
                    src: ["assets/css/*.css", "asstes/js/*.js"]
                }
            }
        },

        uglify: {
            distmin: {
                options: {
                    banner: "<%= meta.banner %>\n"
                },
                files: {
                    "assets/js/plugins.min.js": ["assets/js/plugins.js"],
                    "assets/js/home.min.js": ["assets/js/home.js"]
                }
            }
        },

        watch: {
            src: {
                files: ["src/less/*.less", "src/js/*.js"],
                tasks: ["build"]
            }
        }

    });

    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-banner");

    // Register grunt tasks
    grunt.registerTask("build", ["less", "concat", "uglify", "usebanner", "copy"]);
    grunt.registerTask("default", ["build"]);

};
