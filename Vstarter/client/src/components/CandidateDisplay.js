import { useEffect, useState } from "react";

function CandidateDisplay({state,account}) {

  const [List,setlist]= useState([])
  useEffect(()=>{

    const {contract}= state;
     const candidateList= async ()=>{
      const list= await contract.methods.candidateList().call();
      setlist(list);
      // console.log(List);
     }

     contract && candidateList();

  },[state]);





  return <>

  {List.map((candidate)=>{
        return (
    <table>
      <tbody>
        <tr>
          <td> candidate name {candidate.name}  </td> 
          <td> candidate votes {candidate.votes}  </td> 
          <td> candidate party {candidate.party}</td>
          <td> candidateId {candidate.candidateId}</td>
          <td> candidate Address {candidate.candidateAddress}</td>
          {/* <td> voter Address {candidate.voterAddress}</td> */}
        </tr>
      </tbody>
    </table>)
  })}


  </>;
}
export default CandidateDisplay;
