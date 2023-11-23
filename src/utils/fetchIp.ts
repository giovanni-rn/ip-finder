export const fetchIpAddress = async (): Promise<string> => {
  const url: string = "https://express-ip-address.vercel.app/api";
  const response: Response = await fetch(url);
  const data: string = await response.text();
  return data;
};
