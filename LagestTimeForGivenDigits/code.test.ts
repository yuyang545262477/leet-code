import {largestTimeFromDigits} from "./code";

test("23:14", () => {
    expect(largestTimeFromDigits([1, 2, 3, 4])).toBe("23:41");
});

test("return empty", () => {
    expect(largestTimeFromDigits([5, 5, 5, 5])).toBe("");
});
test("return 00:00", () => {
    expect(largestTimeFromDigits([0, 0, 0, 0])).toBe("00:00");
});
test("return 10:00", () => {
    expect(largestTimeFromDigits([0, 0, 1, 0])).toBe("10:00");
});



