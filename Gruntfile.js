<<<<<<< HEAD

=======
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
module.exports = function(grunt) {

    "use strict";

<<<<<<< HEAD
    var fs = require('fs'), pkginfo = grunt.file.readJSON("package.json");
=======
    var fs = require('fs'),
        pkginfo = grunt.file.readJSON("package.json");
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6

    grunt.initConfig({

        pkg: pkginfo,

        meta: {
<<<<<<< HEAD
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
=======
            banner: "/**! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.author.name %> | <%= pkg.license %> */"
        },

        less: (function() {

            var lessconf = {
                firstClass: {
                    options: {
                        paths: ["assets/less"]
                    },
                    files: {
                        "assets/css/style.css": ["src/less/*.less", "!src/less/_*.less"]
                    }
                },
                firstClassMin: {
                    options: {
                        paths: ["src/less"],
                        yuicompress: true
                    },
                    files: {
                        "assets/css/style.min.css": ["src/less/*.less", "!src/less/_*.less"]
                    }
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
                }
            };

            return lessconf;
        })(),
<<<<<<< HEAD
        
        copy: {
            fonts: {
                files: [{ expand: true, cwd: "src/fonts", src: ["*"], dest: "assets/fonts/" }]
            },
            images: {
                files: [{ expand: true, cwd: "src/images", src: ["**"], dest: "assets/images/" }]     
=======

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
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
            }
        },

        concat: {
            dist: {
                options: {
                    separator: "\n\n"
                },
                src: [
                    "src/js/modernizr.js",
<<<<<<< HEAD
                    "src/js/jquery.collapse.js",
                    "src/js/jquery.superbox.js",
                    "src/js/jquery.herotabs.js",
                    "src/js/owl.carousel.js",
                    "src/js/jquery.tooltipster.js",
                    "src/js/zerovalidate.js",
                    "src/js/dropdown.js",
                    "src/js/nav.js",
                    "src/js/core.js",
                      ],
                dest: "assets/js/firstclass.js"
=======
                    "src/js/wdsign.pack.js",
                    "src/js/jquery.collapse.js",
                    "src/js/jquery.bxslider.min.js",
                ],
                dest: "assets/js/plugins.js"
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
            }
        },

        usebanner: {
            dist: {
<<<<<<< HEAD
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
=======
                options: {
                    position: "top",
                    banner: "<%= meta.banner %>\n",
                    linebreak: false
                },
                files: {
                    src: ["assets/css/*.css", "asstes/js/*.js"]
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
                }
            }
        },

<<<<<<< HEAD
        compress: {
            dist: {
                options: {
                    archive: ("firstclass-"+pkginfo.version+".zip")
                },
                files: [
                    { expand: true, cwd: "assets/", src: ["css/*", "js/*", "fonts/*"], dest: "" }
                ]
=======
        uglify: {
            distmin: {
                options: {
                    banner: "<%= meta.banner %>\n"
                },
                files: {
                    "assets/js/plugins.min.js": ["assets/js/plugins.js"],
                    "assets/js/home.min.js": ["assets/js/home.js"]
                }
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
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
<<<<<<< HEAD
    grunt.loadNpmTasks("grunt-contrib-compress");
=======
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-banner");

    // Register grunt tasks
    grunt.registerTask("build", ["less", "concat", "uglify", "usebanner", "copy"]);
<<<<<<< HEAD
    grunt.registerTask("default", ["build", "compress"]);

};
=======
    grunt.registerTask("default", ["build"]);

};
>>>>>>> 4023c845a773f2fb9a90c64aaf91da0342805fc6
