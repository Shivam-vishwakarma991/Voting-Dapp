import Vote from "./Vote"
function VoterRegister({state, account}) {

  const registrationVoter= async(event)=>{
    
    try{
      event.preventDefault();
      const {contract}= state;
      const name= document.querySelector("#name").value;
      const age= document.querySelector("#age").value;
      const gender= document.querySelector("#gender").value;
      const registers= await contract.methods.voterRegister(name, age, gender).send({from:account, gas:480000});
      alert("Voter has been registered");
      window.location.reload();

    }catch(error){
      alert(error);
    }

  };

  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit={registrationVoter}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>
      </div>
      <Vote state={state} account={account}></Vote>
    </div>
  );
}
export default VoterRegister;
