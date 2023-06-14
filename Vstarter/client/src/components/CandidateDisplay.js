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

 
    <table>
      <thead>
        <tr>

        <th>candidate name</th>
        <th>candidate votes</th>
        <th>candidate party</th>
        <th>candidateId</th>
        <th>candidate Address </th>
        </tr>
      </thead>
      <tbody>
      {List.map((candidate)=>{
        return (
        <tr key={candidate.candidateId}>
          <td>  {candidate.name}  </td> 
          <td>  {candidate.votes}  </td> 
          <td>  {candidate.party}</td>
          <td>  {candidate.candidateId}</td>
          <td> {candidate.candidateAddress}</td>
          {/* <td> voter Address {candidate.voterAddress}</td> */}
        </tr>
        )
  })}
  
  </tbody>
</table>


  </>;
}
export default CandidateDisplay;
