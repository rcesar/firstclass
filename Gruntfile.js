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
                firstClass: {
                    options: {
                        paths: ["assets/less"]
                    },
                    files: {
                        "assets/css/style.css": ["src/less/style.less"]
                    }
                },
                firstClassmin: {
                    options: {
                        paths: ["src/less"],
                        yuicompress: true
                    },
                    files: {
                        "assets/css/style.min.css": ["src/less/style.less"]
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
            pluginsCss: {
                files: [{
                    expand: true,
                    cwd: "src/plugins",
                    src: ["**"],
                    dest: "assets/css/"
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
                    "src/js/jquery.collapse.js",
                    "src/js/jquery.collapse_cookie_storage.js",
                    "src/js/jquery.collapse_storage.js",
                    "src/js/jquery.magnific-popup-0.9.9.js",
                    "src/js/jquery.herotabs.min.js",
                    "src/js/jquery.bxslider.min.js",
                    "src/js/jquery.tooltipster.js",
                    "src/js/zerovalidate.js",
                    "src/js/nav.js",
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
