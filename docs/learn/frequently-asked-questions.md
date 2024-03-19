---
sidebar_position: 5
---

# Frequently Asked Questions

### What is Infinium?

Infinium leverages the proven and time-tested cryptographic primitives that were first introduced with CryptoNote. Transactions are made both untraceable, and unlinkable by using stealth addresses and ring-signatures. As first implemented in Infinium-8, downstream sender privacy is guaranteed by using output flags.

### What consensus mechanism is used?

Infinium uses a hybrid PoS — PoW consensus mechanism. This makes double-spend attacks both un-feasible and improbable. PoS was implemented to complement and enhance the security provided by traditional PoW blockchains.

### What is alias and how does it work?

Each Infinium user can register with an alias, for example: @mywallet, a human-readable name associated with a payment address. Infinium users can easily send transactions to an alias: their wallets automatically check whether the name is registered in the blockchain.

### What is escrow contracts?

Escrow, like its name, is a mechanism that was designed to facilitate secure anonymous payments between counter-parties. Infinium provides the framework for a secure and private transaction without the need for a trusted third party. Our Escrow system (as proposed) will require participants to make additional deposits, which they will forfeit if there is any attempt to act maliciously, or in a way that is contemptuous toward their counter party.

### How can I get Infinium coins?

You can mine coins and use staking to increase your balance or trade coins on cryptocurrency exchanges.

### Is Infinium a hardfork of Infinium-8?

Infinium and Infinium-8 are completely separated blockchains. Infinium-8 network will remain after Infinium launch. None of Infinium-8 transactions will be copied to Infinium network. The Dev team will continue to maintain and support Infinium-8 however, most of the new features will be developed into the Infinium codebase.

### What is mixin and what it's used for?

The mixin count refers to the number of signatures (apart from yours) in the ring signature that authorizes the transaction. Higher mixin value will typically provide more privacy because it will provide greater plausible deniability. It is impossible for any observer to know which is the real source of the funds.

### When trying to send coins I get an error stating that transaction is too large.

This is due to sending many small inputs to the address. The solution is to split up the transaction and send smaller amounts.

### What is a seed phrase?

To access the wallet in the event of a loss, you need something called a mnemonic recovery phrase or seed. This group of words that you received while creating your wallet are designed to add an extra layer of security. With these phrases you can easily restore lost wallets if you don’t have the passkey.

### Why application starting time takes so long?

As Infinium wallet is a full node application, due to loading a blockchain and multiple wallets synchronizing , start time depends on your system specification and may be bottlenecked by internet connection speed.