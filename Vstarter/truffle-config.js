

// module.exports = {
  

//   contracts_build_directory: "./client/src/contracts",
//   networks: {
    
//     development: {
//       host: "127.0.0.1", 
//       port: 7545, 
//       network_id: "*", 
//     },
   
//   },

//   mocha: {
    
//   },

  
//   compilers: {
//     solc: {
//       version: "0.8.14", 
      
//   },

// }
// };




require("dotenv").config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  contracts_build_directory: "./client/src/contracts",

  networks: {
    
    Sepolia: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://eth-sepolia.g.alchemy.com/v2/${PROJECT_ID}`
        ),
      network_id: 11155111, 
      confirmations: 2, 
      timeoutBlocks: 200, 
      skipDryRun: true, 
    },
  },

 
  mocha: {
   
  },

  
  compilers: {
    solc: {
      version: "0.8.15", 
  
    },
  },

  
};
