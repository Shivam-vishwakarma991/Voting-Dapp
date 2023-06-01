import { useEffect, useState } from "react";
function Winner({ state }) {
  const [winner, setWinner] = useState("Not announced");
  useEffect(() => {
    const { contract } = state;
    const WINNER = async () => {
      const winners = await contract.methods.winner().call();
      if (winners !== "0x0000000000000000000000000000000000000000") {
        setWinner(winners);
      }
    };
    contract && WINNER();
  }, [state]);

  return <div className="win">Winner is : {winner} </div>;
}
export default Winner;
