let chai = require("chai");
var mongoose = require('mongoose');
let chaiHttp = require("chai-http");
let server = require("../server");
const { expect } = require("chai");
const { response } = require("../server");
chai.use(chaiHttp);

//ASSERTION

let token = "";
chai.should();
chai.use(chaiHttp);


describe("Blogs API", () => {
    it("Should not POST new blog if not Admin", function (done) {

        chai.request(server)
            .post("/api/blogs").then(response => {
                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });

    it("Should GET all Blogs", function (done) {

        chai.request(server)
            .get("/api/blogs").then(response => {
                response.should.have.status(200);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });


    it("Should GET single Blog", function (done) {

        chai.request(server)
            .get("/api/blogs/63e5e819789dece2a1cd9a68").then(response => {
                response.should.have.status(404);
                expect(response).to.be.a("object");
                done();

            })
            .catch((err) => {

                done(err)
            })
    });


    it("Should not UPDATE blog if not Admin", function (done) {

        chai.request(server)
            .patch("/api/blogs/63e5e819789dece2a1cd9a68").set({
            }).then(response => {
                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });

    it("can UPDATE blog if Admin", function (done) {

        chai.request(server)
            .patch("/api/blogs/63e5e819789dece2a1cd9a68").set({
            }).then(response => {
                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });


    it("Should not DELETE blog if not Admin", function (done) {

        chai.request(server)
            .delete("/api/blogs/63e5e819789dece2a1cd9a68").then(response => {
                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });

    it("can DELETE blog if Admin", function (done) {

        chai.request(server)
            .delete("/api/blogs/63e5e819789dece2a1cd9a68").then(response => {
                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();
            })
            .catch((err) => {

                done(err)
            })
    });
})