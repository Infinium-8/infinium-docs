---
sidebar_position: 2
---

# Server/Console mode PoS mining

In certain situations, performing PoS mining without the GUI application may be necessary. The following steps provide guidance on how to accomplish this:
1. Download [Infinium daemon (infiniumd executable)](https://infinium.space/downloads) and simplewallet or build them following the [instructions](https://docs.infinium.space/docs/build/building-from-sources).
2. Ensure that no other instance of Infinium is running at the moment; close it if necessary.
3. Navigate to the Infinium folder.
4. For the next steps, you will need to launch two processes (node and wallet) and keep them running. The method differs based on your operating system. For desktop OS such as MacOS, Windows, or Ubuntu Desktop, launch a terminal window instance for both the node and wallet, and leave it running. In this case, **you can skip this step and proceed with the subsequent steps.** If you're connecting to a remote server or using a Unix-like system or MacOS, consider using virtual session managers like the screen command. Here's an example of creating a new virtual console with it:
```
screen -S session_name
```
Learn more about using **screen** [here](https://www.gnu.org/software/screen/manual/screen.html).  
6. Next, start the node daemon **infiniumd** with the following console command:
```
infinium_install_path\infiniumd
```
NOTE: For MacOS bundle binary (both infiniumd and simplewallet) located in /Applications/**Infinium.app/Contents/MacOS/** folder, ensure you use the correct path to launch the binary.

It's better to wait until the daemon is synchronized. You'll know this has happened when you see the following string in the console output:

```
Synchronized set to TRUE
```
8. Start simplewallet with PoS mining enabled:
```
./simplewallet --wallet-file=PATH_TO_WALLET_FILE --rpc-bind-port=RPC_PORT_NUMBER --do-pos-mining --deaf 
```
NOTE: RPC_PORT_NUMBER should be any port number not in use by your system. It will be used by the RPC server. The --deaf option puts the server in a mode where no other programs can perform any RPC requests to the wallet service, which is recommended for security concerns.

Some of the parameters are required, and some are optional. Here's what they mean:

- `--wallet-file=PATH_TO_WALLET_FILE` (required) — sets the path to the wallet file where your coins are;
- `--rpc-bind-port=RPC_PORT_NUMBER` (required) — sets the TCP listening port number of the simplewallet RPC server and switches simplewallet into RPC mode. You can use any free TCP port number you want from 0 to 65535, like 55555. If this option is not used, simplewallet will start in normal CLI mode and PoS mining won't be available;
- `--do-pos-mining` (required) — starts PoS mining;
- `--log-level=LOG_LEVEL` (optional) — sets the log level, possible values are from 0 (less verbose) to 4 (extremely verbose). May be useful for debugging. Default is 0;
- `--log-file=PATH_TO_LOG` (optional) — sets path to the log file. Default is 'simplewallet.log' in the same folder where simplewallet binary is located;
- `--deaf` (optional) — turns on so called 'deaf mode'. simplewallet's RPC server will reject any requests with error 500. This is useful if you just want to mine PoS and don't want that anyone would be able to do RPCs on your wallet. **Highly recommend**. Default: off;
- `--pos-mining-reward-address=REWARD_ADDR` (optional) — sets an explicit address for receiving mining rewards. By default, all rewards will be received by the same wallet where staking coins are, so its balance will be gradually increasing. If you use this option, staking coins will be kept in the main wallet (specified by--wallet-file parameter), and mining rewards will be sent to the specified REWARD_ADDR. In such a case, the balance of the main wallet won't be changing due to the mining process.

Here's a real-world example of the command using recommended options (**don't forget to tailor it to your needs**):

```
./simplewallet --wallet-file=infinium-wallet --rpc-bind-port=50005 --do-pos-mining --log-level=0 --log-file=/home/user/infinium/wallets/infinium-wallet.log --deaf --pos-mining-reward-address=inf1guboUTvbBTQfapqET8Tf5oCMrZ3Qz32wny78Z6iu6XKDbBhTfiyL6FSG8mtuMEG2km3Wik3RdDY86ffaQs4N1NsNvyNgpe
```