import { useEffect, useState } from "react";

function App() {
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    const fetchIpAddress = async (): Promise<void> => {
      const url: string = "https://express-ip-address.vercel.app/api";
      const response: Response = await fetch(url);
      const data: string = await response.text();
      setIpAddress(data);
    };
    fetchIpAddress();
  }, []);

  return <p>{ipAddress}</p>;
}

export default App;
