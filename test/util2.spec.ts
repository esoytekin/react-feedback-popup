import { getStatusClassIndex } from "../src/util";
import { expect } from "chai";

describe("Util works when rated", () => {
    it("rate first item hover 0 items", () => {
        const data = [1, -1, -1, -1, -1];
        const expected = {
            fill: true,
            index: 0,
        };

        const indexData = getStatusClassIndex(data);

        expect(indexData).to.have.property("fill");
        expect(indexData).to.eqls(expected);
    });

    it("rate first item hover 1 item", () => {
        const data = [1, 0, -1, -1, -1];
        const expected = {
            fill: false,
            index: 1,
        };

        const indexData = getStatusClassIndex(data);

        expect(indexData).to.have.property("fill");
        expect(indexData).to.eqls(expected);
    });

    it("rate three items hover 4th item", () => {
        const data = [1, 1, 1, 0, -1];
        const expected = {
            fill: false,
            index: 3,
        };

        const indexData = getStatusClassIndex(data);

        expect(indexData).to.have.property("fill");
        expect(indexData).to.eqls(expected);
    });
});
