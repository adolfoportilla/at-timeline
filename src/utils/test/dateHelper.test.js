import dateHelper from "../dateHelper";

describe("dateHelper", () => {
  test("firstAndLast - single day", () => {
    const item = {
      start: "2018-01-01",
      end: "2018-01-01"
    };

    const result = dateHelper.substractDates(item.start, item.end);

    expect(result).toBe(0);
  });

  test("firstAndLast - two days", () => {
    const item = {
      start: "2018-01-01",
      end: "2018-01-02"
    };

    const result = dateHelper.substractDates(item.start, item.end);

    expect(result).toBe(1);
  });

  test("firstAndLast - different months", () => {
    const item = {
      start: "2018-01-31",
      end: "2018-02-02"
    };

    const result = dateHelper.substractDates(item.start, item.end);

    expect(result).toBe(2);
  });

  test("firstAndLast - date format", () => {
    const start = new Date("2018-01-01");
    const end = new Date("2018-02-01");

    const result = dateHelper.substractDates(start, end);

    expect(result).toBe(31);
  });

  test("substractDates", () => {
    const start = new Date("2018-01-01");
    const end = new Date("2019-02-02");

    const result = dateHelper.substractDates(start, end);

    expect(result).toBe(397);
  });

  test("generateMonths - 2 months", () => {
    const firstDay = "2018-01-01";
    const totalDays = 75;

    const result = dateHelper.generateMonths(firstDay, totalDays);

    expect(result.length).toBe(3);
    expect(result[0]).toEqual({ month: 0, daysFromFirst: 0 });
    expect(result[1]).toEqual({ month: 1, daysFromFirst: 30 });
    expect(result[2]).toEqual({ month: 2, daysFromFirst: 30 + 28 });
  });

  test("getNExtFirstOfMonth", () => {
    const date = new Date("2018-03-05");
    const expected = new Date("2018-04-01");

    const result = dateHelper.getNextFirstOfMonth(date);

    expect(result.getTime()).toEqual(expected.getTime());
  });

  test("generateMonths - 12 months", () => {
    const firstDay = "2018-01-01";
    const totalDays = 396;

    const result = dateHelper.generateMonths(firstDay, totalDays);

    expect(result.length).toBe(14);
    expect(result[0]).toEqual({ month: 0, daysFromFirst: 0 });
    expect(result[1]).toEqual({ month: 1, daysFromFirst: 30 });
    expect(result[2]).toEqual({ month: 2, daysFromFirst: 30 + 28 });
    expect(result[13]).toEqual({ month: 1, daysFromFirst: 395 });
  });

  test("generateYears - 1 year", () => {
    const firstDay = "2018-01-01";
    const totalDays = 200;

    const result = dateHelper.generateYears(firstDay, totalDays);

    expect(result.length).toBe(1);
    expect(result[0]).toEqual({ year: 2018, daysFromFirst: 0 });
  });

  test("generateYears - 2 years", () => {
    const firstDay = "2018-02-02";
    const totalDays = 397;

    const result = dateHelper.generateYears(firstDay, totalDays);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual({ year: 2018, daysFromFirst: 0 });
    expect(result[1]).toEqual({ year: 2019, daysFromFirst: 332 });
  });
});
