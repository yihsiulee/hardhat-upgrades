import { defender, ethers, hardhatArguments, upgrades } from "hardhat";
import { MyTokenV2__factory } from "typechain-types";
import { verify } from "utils";
import { networksConfig } from "config";
import { deployments } from "config/deployments";

async function main() {
  const { network } = hardhatArguments;
  if (!network) {
    throw new Error("Please specify the target network. Aborting...");
  }

  const multisigAddress = "";

  // Create a factory for the new implementation
  const factory: MyTokenV2__factory = <MyTokenV2__factory>await ethers.getContractFactory("MyTokenV2");

  const proposal = await defender.proposeUpgrade(deployments[network!], factory, {
    title: "Title of the proposal",
    description: "Description of the proposal",
    multisig: multisigAddress,
  });

  console.log("Upgrade proposal created at: ", proposal.url);

  // Retrieve the new implementation address within the proposal's metadata
  const implementationAddress = proposal.metadata?.newImplementationAddress!;
  console.log("Contract implementation deployed at: ", implementationAddress);

  // Programmatically verify only the new contract implementation
  // since the proxy contract is already verified and linked with the old implementation
  if (networksConfig[network!].verifyContracts) {
    console.log(`Sent for verification...`);
    await verify(implementationAddress);
    console.log(`Successfully verified!`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
