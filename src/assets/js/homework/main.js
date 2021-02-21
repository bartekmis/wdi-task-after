requirejs.config({
    waitSeconds: 0,
    optimize: "uglify",
    paths: {
        "jquery"     : "vendor/jquery/dist/jquery.min",
        "tweenmax"   : "vendor/TweenMax.min",
        "async"      : "components/async",
        "google"     : "components/google",
        "waypoints"  : "components/waypoints.min"
    },

    shim: {
        'bxslider': {
          deps: ['jquery']
        },
        'waypoints': {
          deps: ['jquery']
        }
    },
    optimizeAllPluginResources: true,

    //Finds require() dependencies inside a require() or define call. By default
    //this value is false, because those resources should be considered dynamic/runtime
    //calls. However, for some optimization scenarios, it is desirable to
    //include them in the build.
    //Introduced in 1.0.3. Previous versions incorrectly found the nested calls
    //by default.
    findNestedDependencies: true,
});