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
      <table>
        <thead>
          <tr>
          <th>voters Name</th>
          <th>voterId </th>
          <th>voterAddress</th>
          <th>voteCandidateId</th>
          <th>Gender</th>
          </tr>

        </thead>
        
          <tbody>
          {list.map((voters)=>{
    return (
          <tr key={voters.voterId}>
            <td>  {voters.name}</td>
            <td> {voters.voterId}</td>
            <td> {voters.voterAddress}</td>
            <td> {voters.voteCandidateId}</td>
            <td>  {voters.gender}</td>
          </tr>
      
      
      )
    })}
    </tbody>
    </table> 
  </>;
}
export default VoterList;
