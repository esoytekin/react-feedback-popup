import { expect } from "chai";
import { getStatusClassIndex } from "../src/util";

describe("Util Test works when not rated", () => {
    it("hover 3 items", () => {
        console.log("running");
        const data = [0, 0, 0, -1, -1];
        const expected = {
            fill: false,
            index: 2,
        };

        const indexData = getStatusClassIndex(data);

        expect(indexData).to.have.property("fill");
        expect(indexData).to.eqls(expected);
    });

    it("hover 2 items", () => {
        const data = [0, 0, -1, -1, -1];
        const expected = {
            fill: false,
            index: 1,
        };
        const indexData = getStatusClassIndex(data);
        expect(indexData).to.eqls(expected);
    });

    it("hovered single item", () => {
        const data = [0, -1, -1, -1, -1];
        const expected = {
            fill: false,
            index: 0,
        };
        const indexData = getStatusClassIndex(data);
        expect(indexData).to.eqls(expected);
    });

    it("hovered zero item", () => {
        const data = [-1, -1, -1, -1, -1];
        const expected = {
            fill: false,
            index: -1,
        };
        const indexData = getStatusClassIndex(data);
        expect(indexData).to.eqls(expected);
    });

    it("hovered 4 items", () => {
        const data = [0, 0, 0, 0, -1];
        const expected = {
            fill: false,
            index: 3,
        };
        const indexData = getStatusClassIndex(data);
        expect(indexData).to.eqls(expected);
    });

    it("hovered 5 items", () => {
        const data = [0, 0, 0, 0, 0];
        const expected = {
            fill: false,
            index: 4,
        };
        const indexData = getStatusClassIndex(data);
        expect(indexData).to.eqls(expected);
    });
});
