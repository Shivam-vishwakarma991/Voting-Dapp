function ElectionCommision({state,account}) {

  const votingTime= async (event)=>{
    try{
      event.preventDefault();
      const {contract}= state;
      const startTime= document.querySelector("#start").value;
      const endTime= document.querySelector("#end").value;
      const tranx= await contract.methods.voteTime(startTime,endTime).send({from:account, gas:480000});
      alert("voting has started")
    }catch(error){
      alert(error)
    }
  }

  const Result = async ()=>{
    try{

      const {contract}= state;
      
      const result= await contract.methods.result().send({from:account, gas: 480000});
      alert("Result is declared");
    }catch(error){
      alert(error);
    }
    window.location.reload();
  }
  const Emergency = async ()=>{
    try{

      const {contract}= state;
      const result= await contract.methods.emergency().send({from:account, gas: 480000});
      alert("Emergency declared (The voting has ended)");
    }catch(error){
      alert(error);
    }
  }

  return (
    <>
      <div>
        <form className="form" onSubmit={votingTime}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick={Emergency}>
          Emergency
        </button>
        <button className="resBtn" onClick={Result}>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;
