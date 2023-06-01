import { useEffect, useState } from "react";

function VoterList({state,account}) {

  const [list,setlist]= useState([]);
  useEffect(()=>{

    const {contract}= state;
    const LIST= async ()=>{
      const voters= await contract.methods.voterList().call();
      setlist(voters);
    }

    contract && LIST();

  },[state]);
  return <>
  <h1>Voter List</h1>
  {list.map((voters)=>{
    return (
      <>
      <table>
        <tbody>
          <tr>
            <td>{voters.name}</td>
            <td>{voters.voterId}</td>
            <td>{voters.voterAddress}</td>
            <td>{voters.voteCandidateId}</td>
            <td>{voters.gender}</td>
          </tr>
        </tbody>
        </table> 
      </>

    )
  })}
  </>;
}
export default VoterList;
