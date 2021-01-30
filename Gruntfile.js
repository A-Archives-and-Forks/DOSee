module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON(`package.json`),
    // Optimise and compress images.
    image: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "src/images/",
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: "src/images/",
          },
        ],
      },
    },
    // Confirm all text documents to use Linux/macOS linefeed for end-of-line markers
    eol: {
      lf: {
        options: {
          eol: "lf",
          replace: true,
        },
        files: [
          {
            expand: true,
            cwd: "src/js",
            src: ["**/*.js"],
          },
          {
            expand: true,
            cwd: "src/css",
            src: ["**/*.css"],
          },
        ],
      },
    },
    // Duplicate files
    copy: {
      docs: {
        files: {
          "main/": ["docs/**"],
        },
      },
      src: {
        files: {
          "main/": ["src/**"],
        },
      },
      root: {
        files: {
          "main/": [
            ".eslintrc.js",
            ".gitignore",
            ".prettierrc",
            "Dockerfile",
            "LICENSE",
            "package.json",
            "workbox-config.js",
          ],
        },
      },
    },
  });
  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require(`load-grunt-tasks`)(grunt, { scope: `devDependencies` });
  // Tasks
  grunt.registerTask(`default`, [`eol`]);
  grunt.registerTask(`img`, [`image`]);
  grunt.registerTask(`lf`, [`eol`]);
  grunt.registerTask(`main`, [`copy`]);
};
