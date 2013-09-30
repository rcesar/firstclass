
module.exports = function(grunt) {

    "use strict";

    var fs = require('fs'), pkginfo = grunt.file.readJSON("package.json");

    grunt.initConfig({

        pkg: pkginfo,

        meta: {
          banner: "/*! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.author.name %> | (c) 2013 WDSIGN */"
        },

        less: (function(){

            var lessconf = {
                firstclass: {
                    options: { paths: ["assets/less"] },
                    files: { "assets/css/firstclass.css": ["src/less/firstclass.less"] }
                },
                firstclassmin: {
                    options: { paths: ["src/less"], yuicompress: true },
                    files: { "assets/css/firstclass.min.css": ["src/less/firstclass.less"] }
                }
            };

            return lessconf;
        })(),
        
        copy: {
            fonts: {
                files: [{ expand: true, cwd: "src/fonts", src: ["*"], dest: "assets/fonts/" }]
            },
            images: {
                files: [{ expand: true, cwd: "src/images", src: ["**"], dest: "assets/images/" }]     
            }
        },

        concat: {
            dist: {
                options: {
                    separator: "\n\n"
                },
                src: [
                    "src/js/modernizr.js",
                    "src/js/alert.js",
                    "src/js/dropdown.js",
                    "src/js/modal.js",
                    "src/js/nav.js",
                    "src/js/tooltip.js",
                    "src/js/tab.js",
                    "src/js/core.js",
                      ],
                dest: "assets/js/firstclass.js"
            }
        },

        usebanner: {
            dist: {
              options: {
                position: 'top',
                banner: "<%= meta.banner %>\n"
              },
              files: {
                src: [ 'assets/css/*.css', 'asstes/js/*.js' ]
              }
            }
        },

        uglify: {
            distmin: {
                options: {
                    //banner: "<%= meta.banner %>\n"
                },
                files: {
                    "assets/js/firstclass.min.js": ["assets/js/firstclass.js"]
                }
            }
        },

        compress: {
            dist: {
                options: {
                    archive: ("firstclass-"+pkginfo.version+".zip")
                },
                files: [
                    { expand: true, cwd: "assets/", src: ["css/*", "js/*", "fonts/*"], dest: "" }
                ]
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
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-banner");

    // Register grunt tasks
    grunt.registerTask("build", ["less", "concat", "uglify", "usebanner", "copy"]);
    grunt.registerTask("default", ["build", "compress"]);

};