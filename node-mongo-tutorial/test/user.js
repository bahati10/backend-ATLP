let chai = require("chai");
var mongoose = require('mongoose');
let chaiHttp = require("chai-http");
let server = require("../server");
const { expect } = require("chai");

chai.use(chaiHttp);

//ASSERTION


let token = "";
chai.should();
chai.use(chaiHttp);
describe("Users API", () => {


    it("Should not get user if not signed in", function (done) {

        chai.request(server)
            .get("/api/users/63e49c15981d6a09e82f7480").set({
                Authorisation: token
            }).then(response => {
                token = response.token;

                response.should.have.status(500);
                expect(response).to.be.a("object");
                done();

            })
            .catch((err) => {

                done(err)
            })
        // .end((err, response) => {
        //     response.should.have.status(200);
        //     response.body.should.be.a('object');
        //     // response.body.should.have.proprety('names');
        //     // response.body.should.have.proprety('email');
        //     // response.body.should.have.proprety('pasword');
        //     // response.text.should.be.eq("User Found");
        // })
    });
})