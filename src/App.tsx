import { useEffect, useState } from "react";
import { fetchIpAddress } from "./utils/fetchIp";

function App() {
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    const handleRequest: () => Promise<void> = async () => {
      const result = await fetchIpAddress();
      setIpAddress(result);
    };
    handleRequest();
  }, []);

  return <p data-testid="cypress-text">{ipAddress}</p>;
}

export default App;
