import {useEffect,useState} from "react"
import VoterList from "./VoterList";
function Vote({ state, account }) {

  const Castvote = async (event) => {
    try {
      event.preventDefault();
      const { contract } = state;
      const VoterID = document.querySelector("#voterId").value;
      const candidateId = document.querySelector("#candidateId").value;
      const vote = await contract.methods
        .vote(VoterID, candidateId)
        .send({ from: account, gas: 480000 });
      alert(`You have successfully voted for ${candidateId}`)
    } catch (error) {
      alert(error);
    }
    window.location.reload()
  }

  const [status, setStatus]= useState(null)
    useEffect(()=>{
      const {contract}=state;
      const votingStatus= async()=>{
        const statusVote = await contract.methods.votingStatus().call();
       
        setStatus(statusVote);
      }
      contract && votingStatus();

    },[state])
    


    return (
      <div>
        <form className="form" onSubmit={Castvote}>
          <p className="status">Voting Status: {status}</p>
          <label className="label2" htmlFor="voterId">
            VoterId:
          </label>
          <input className="innerBoxVote" type="text" id="voterId"></input>

          <label className="label2" htmlFor="candidateId">
            Candidate Id:
          </label>
          <input className="innerBoxVote" type="text" id="candidateId"></input>
          <button className="regBtn" type="submit">
            Vote
          </button>
        </form>

      <VoterList state={state} account={account}></VoterList>

      </div>
    );
  };

export default Vote;
