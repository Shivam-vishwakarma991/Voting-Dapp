import React from 'react'
import CandidateDisplay from './CandidateDisplay'
import CandidateRegister from './CandidateRegister'
const Candidate = ({state,account}) => {
  return (
    <>
        <CandidateRegister state={state} account={account}></CandidateRegister>
        <CandidateDisplay state={state} account={account}></CandidateDisplay>
    </>
  )
}

export default Candidate