import { httpGet, httpPost } from "../js/http";


test("testing httpGet", () => {
  const result = httpGet("http://localhost:8000/");
  expect(result).toStrictEqual({});
});

test("testing httpPost", () => {
  const result = httpPost("http://localhost:8000/");
  expect(result).toBe(true);
});

test("testing httpGet empty url", () => {
  expect(() => {
    httpGet('')
  }).toThrow(Error);
});

test("testing httpPost empty url", () => {
  expect(() => {
    httpPost('')
  }).toThrow(Error);
});
