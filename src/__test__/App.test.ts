import { fetchIpAddress } from "../utils/fetchIp";
import { describe, expect, test } from "@jest/globals";

describe("fetch IP address API", () => {
  test("returned ip address should match ipv4 pattern", async () => {
    const ipv4Regex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipAddress = await fetchIpAddress();
    expect(ipv4Regex.test(ipAddress)).toBe(true);
  });
});
