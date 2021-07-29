const { WETH } = require("@uniswap/sdk");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const chainId = await getChainId();

  const factory = chainId ==="1" ? "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" : "0xc35DADB65012eC5796536bD9864eD8773aBc74C4";

  await deploy("MaidCoinAuctionVault", {
    from: deployer,
    args: [factory, "0x4Af698B479D0098229DC715655c667Ceb6cd8433", WETH[chainId].address],
    log: true,
  });
};
