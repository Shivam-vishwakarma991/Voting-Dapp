function CandidateRegister({ state, account }) {
  const registerCndidate = async (event) => {
    try {
      event.preventDefault();
      const { contract } = state;
      const name = document.querySelector("#name").value;
      const party = document.querySelector("#party").value;
      const age = document.querySelector("#age").value;
      const gender = document.querySelector("#gender").value;
      const register = await contract.methods
        .candidateRegister(name, party, age, gender)
        .send({ from: account, gas: 480000 });
        alert("Candidate has been registered");
        window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={registerCndidate}>
        <label className="label1" htmlFor="name">
          Name:
        </label>
        <input className="innerBoxCand" type="text" id="name"></input>

        <label className="label1" htmlFor="party">
          Party:
        </label>
        <input className="innerBoxCand" type="text" id="party"></input>

        <label className="label1" htmlFor="age">
          Age:
        </label>
        <input className="innerBoxCand" type="number" id="age"></input>

        <label className="label1" htmlFor="gender">
          Gender:
        </label>
        <input className="innerBoxCand" type="text" id="gender"></input>

        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default CandidateRegister;
