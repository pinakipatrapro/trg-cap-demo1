const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");

const express = require("express");
/************** XSUAA Authentication Dependency *****/
const xsenv = require("@sap/xsenv");
const passport = require("passport");
const xssec = require("@sap/xssec");
const https = require("https");
const JWTStrategy = require('@sap/xssec').JWTStrategy;
xsenv.loadEnv();
https.globalAgent.options.ca = xsenv.loadCertificates();
global.__base = __dirname + "/";
global.__uaa = process.env.UAA_SERVICE_NAME;

passport.use(new xssec.JWTStrategy(xsenv.getServices({
    uaa: {
        tag: 'xsuaa'
    }
}).uaa));

cds.on("bootstrap", (app) => {

    /**********For Proxy Adapter ***********/
    app.use(proxy());

    /******** Handle XSUAA Authentication *****/
    // app.use(passport.initialize());
    // app.use(passport.authenticate("JWT", {
    //     session: false
    // }));

    
});
module.exports = cds.server;