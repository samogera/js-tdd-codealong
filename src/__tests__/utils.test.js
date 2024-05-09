import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const currentYear = 2022;
    const ageOfPerson = currentAgeForBirthYear(birthYear, currentYear); // Pass currentYear as argument
    expect(ageOfPerson).toBe(38);
  });
});
