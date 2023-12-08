# Hardhat UUPS Upgradeable Smart Contracts Boilerplate

This project serves as boilerplate for getting started quickly working with UUPS upgradeable smart contracts on a Hardhat environment.  It is based on the [OpenZeppelin UUPSUpgradeable proxy](https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPSUpgradeable) model enabling interaction with multisig contracts through either an Ownable or AccessControl role-based mechanism. It utilise the [@openzeppelin/hardhat-upgrades](https://www.npmjs.com/package/@openzeppelin/hardhat-upgrades) plugin to manage the upgrades and [@openzeppelin/defender-admin-client](https://www.npmjs.com/package/@openzeppelin/defender-admin-client) to programmatically create any multisig proposal.

## Features

This repository includes the following features:

- **UUPS Upgradeability**: smart contracts templates based on the OpenZeppelin UUPS proxy mechanism.
- **Ownable or AccessControl role-based multisig**: choose between an Ownable or AccessControl role-based approach for managing multisig contracts.
- **Hardhat Upgrades Plugin**: streamline the smart contracts upgrade process using the hardhat-upgrades plugin.
- **Defender Admin Client integration**: Enhance security with programmatically created multisig proposals using the defender-admin-client library.

## Key components:

- [@openzeppelin/hardhat-upgrades](https://www.npmjs.com/package/@openzeppelin/hardhat-upgrades): A plugin that facilitates the management of smart contract upgrades in the Hardhat environment.
- [@openzeppelin/defender-admin-client](https://www.npmjs.com/package/@openzeppelin/defender-admin-client): This library enables the programmatically creation of multisig proposals, adding an extra layer of security and control.
- [@nomicfoundation/hardhat-verify](https://www.npmjs.com/package/@nomicfoundation/hardhat-verify): Allows to programmatically verify any contract on one of the supported chains.

## References:

- [Admin Accounts and Multisgs](https://blog.openzeppelin.com/admin-accounts-and-multisigs): why is important to take advantage of multisigs
- [AccessControl documentatition](https://docs.openzeppelin.com/contracts/5.x/access-control): what is and how to integrate with AccessControle role-based mechanism
- [Create a Gnosis Safe Multisig using Defender](https://www.youtube.com/watch?v=IOescPDrF7Y&ab_channel=OpenZeppelin): tutorial on how to create a secure multisig contract using OpenZeppelin Defender
- [Deploying more efficient Upgradeable Contracts](https://www.youtube.com/watch?v=kWUDTZhxKZI&t=1846s&ab_channel=OpenZeppelin): how to deploy upgradeable contracts using the UUPS proxy pattern through the OpenZeppelin's tools
  
## Configuration

All essential configurations for using this boilerplate are conveniently organized under the `config` folder:

- `index.ts`: manage networks configurations by updating the `networksConfig` object. Add or remove chains effortlessly to tailor the boilerplate to your needs.
- `deployments.ts`: serves as a central repository for all your deployments. Every deployment you perform will be automatically recorded by chain within this file for quick reference and tracking.
- `multisigs.ts`: handle multisig contracts by updating the `multisigs` object. Add or remove multisig contract addresses by chain to adapt to your project's requirements.
- `roles.ts`: AccessControl role management using the provided pattern under the `ROLES` object. Add or remove roles with ease, ensuring a streamlined approach to role-based access.

## Quick start

1. Clone this repository to your local machine:
```bash
git clone https://github.com/gabrielstoica/hardhat-upgrades
git clone git@github.com:yihsiulee/hardhat-upgrades.git
```
2. Change directory to the cloned project:
```bash
cd hardhat-upgrades
```
3. Install dependencies:
```bash
yarn install
```
4. Create a new `.env` based on the `.env.example` with your API keys and secrets
5. Compile the contracts:
```bash
yarn hardhat compile
```
6. Deploy the Box contract to a testnet or mainnet using the `deploy.ts` script:
```bash
yarn hardhat run scripts/deploy.ts --network YOUR_NETWORK(sepolia)
```

## Contributing

Contributions to this template are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute this template for your own projects.
