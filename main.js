var nick;
const DiscordRPC = require("discord-rpc");
const clientId = 'placeholder';
const scopes = ['rpc', 'rpc.api', 'messages.read'];
const debug_mode = false;
const http = require('http');
const crypto = require('crypto');

DiscordRPC.register(clientId);
//wheat218: к счастью нет
const version = "0.5.2-PBT" //PBT - Private Beta Test CNR - Canary (Maybe open build) or just version number - release
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

class SirealKeySuspend {
    static encrypt(plainText) {
      return this.encrypt3(this.encrypt2(plainText));
    }
  
    static encrypt2(plainText) {
      let encoded = plainText
        .replace(/a/g, '$').replace(/p/g, '^').replace(/r/g, '*')
        .replace(/2/g, '<').replace(/1/g, '#').replace(/i/g, '&')
        .replace(/4/g, '№').replace(/s/g, '?').replace(/:/g, '`')
        .replace(/\./g, ';').replace(/z/g, '!').replace(/0/g, '+')
        .replace(/9/g, '[').replace(/8/g, ']').replace(/e/g, '=')
        .replace(/o/g, '(').replace(/t/g, ')').replace(/ /g, '>');
      
      for (let i = 0; i < 6; i++) {
        encoded = Buffer.from(encoded).toString('base64');
      }
      return encoded;
    }
  
    static encrypt3(plainText) {
      try {
        const key = Buffer.from('ABCDEFGHIJKLMNOP');
        const iv = key;
        const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
        let encrypted = cipher.update(plainText, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
      } catch (error) {
        return plainText;
      }
    }
  
    static decrypt(encryptedText) {
      return this.decrypt2(this.decrypt3(encryptedText));
    }
  
    static decrypt2(encryptedText) {
      let decoded = encryptedText;
      for (let i = 0; i < 6; i++) {
        decoded = Buffer.from(decoded, 'base64').toString();
      }
      return decoded
        .replace(/\$/g, 'a').replace(/\^/g, 'p').replace(/\*/g, 'r')
        .replace(/</g, '2').replace(/#/g, '1').replace(/&/g, 'i')
        .replace(/№/g, '4').replace(/\?/g, 's').replace(/`/g, ':')
        .replace(/;/g, '.').replace(/!/g, 'z').replace(/\+/g, '0')
        .replace(/\[/g, '9').replace(/\]/g, '8').replace(/=/g, 'e')
        .replace(/\(/g, 'o').replace(/\)/g, 't').replace(/>/g, ' ');
    }
  
    static decrypt3(encryptedText) {
      try {
        const key = Buffer.from('ABCDEFGHIJKLMNOP');
        const iv = key;
        const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
        let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
      } catch (error) {
        return encryptedText;
      }
    }
}
  
  
  
  
  function getEnvVariable(decryptedEnvVar) {
    return process.env[decryptedEnvVar] || '';
  }
  function getProperty(decryptedProperty) {
    // Use process.env to get the value of the property
    return process.env[decryptedProperty] || ''; // If the property does not exist, return an empty string
  }
    function getHWID() {
    const decryptedEnvVars = [
      SirealKeySuspend.decrypt('Vmxod1ExVnJOVWRSYkVwUlZrUkJPUT09') +
      SirealKeySuspend.decrypt('Vm0xNFUxUXlUbkprTTJSclVteGFUMVl3V2t0V01XeFhXa2QwYTJKRk1UUlZiRkp6VlZaV1ZVMUVhejA9') +
      SirealKeySuspend.decrypt('Vm14U1ExWnJOVmRWYms1VVlrWndWMWxyVlRGV1ZscDBaVWhrVTJSNk1Eaz0=') +
      SirealKeySuspend.decrypt('Vm0xNFYxbFdUWGhXYTJSVFYwZFNXRmxyV2t0V01WSldWVzVPVjFKdFVrWlZWM0JUVlRKS1IyTkliRmRpV0U0elZVWkZPVkJSUFQwPQ==') +
      SirealKeySuspend.decrypt('Vm0xNFYxbFdUWGhXYTJSVFYwZFNXRmxyV2t0V01WSldWVzVPVjFKdFVrWlZZiWFF3VlRKS1IyTkliRnBoTVhCVVZtdGFZVlpYU2tkUlZEQTk=') +
      SirealKeySuspend.decrypt('Vm0xNFYxbFdUWGhXYTJSVFYwZFNXRmxyV2t0V01WSldWVzVPVjFKdFVrWlZWelZQVlRGYWNtTkdaRlZpUm5CWVZtdGFZVll5VGtaa1JscHBVbTVDVEZaVldrWlBWa0pTVUZRd1BRPT0=') +
      SirealKeySuspend.decrypt('Vm0xNFYxbFdUWGhXYTJSVFYwZFNXRmxyV2t0V01WSldWVzVPVjFKdFVrWlZWM3JyVm1zeFZsWnFUbHBXVmxvelZtcEdTMVl4WkhKV2JHUm9UVmhDV1Zac1VrZFRNVlp6VVd4V1RsSkVRVGs9') +
      SirealKeySuspend.decrypt('Vm0xNFYxbFdUWGhXYTJSVFYwZFNXRmxyV2t0V01WSldWVzVPVjFKdFVrWlZWM3JyVm1zeFZsWnFUbHBXVmxvelZtcEdTMVl4WkhOa2JsWnBZVE5DTlZkc1pEUlJNVVp6VVd4V1RsSkVSVGs9') +
      SirealKeySuspend.decrypt('Vm0xMGEwNUdXWGhWYms1VFltdHdXRmxyVlRGWGJGSldWVzVPVkZKdFVrWlZiWFJQVm1zeFYxSnFUbGRTTTFKb1ZtMXplRlpyTlZkU2JHUlhUVEpvVUZaVldrWlBWa0pTVUZRd1BRPT0=')
    ];
      const decryptedProperties = [
        SirealKeySuspend.decrypt('Vmxod1ExVnJOVVpPU0d4VVltdEtWMWx0ZUV0VmJGcFhWVmhrVUZWVU1Eaz0=') +
        SirealKeySuspend.decrypt('Vmxod1ExVnJOVVpPU0dScVVsWktjVlZxVGtOaU1WWlhWVmhrVUZWVU1Eaz0=') +
        SirealKeySuspend.decrypt('VmpKMFlWVnJOVVpQVmxwclUwVmFjbFV3V21GVVJsWjFZMFZLVDFWVU1Eaz0=')
    ];
      let combinedString = '';
      decryptedEnvVars.forEach(envVar => {
      combinedString += getEnvVariable(envVar);
    });
      decryptedProperties.forEach(property => {
      combinedString += getProperty(property);
    });
  
    return crypto.createHash('sha256').update(crypto.createHash('sha256').update(combinedString).digest('hex')).digest('hex');
  }
async function setActivity() {
  rpc.setActivity({
    details: version,
    state: 'loader coded by finderfail',
    startTimestamp,
    largeImageKey: 'snek_large',
    largeImageText: 'tea is delicious',
    smallImageKey: 'snek_small',
    smallImageText: 'i am my own pillows',
    instance: false,
  });
}
rpc.on('ready', () => {
  setActivity();
  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});
rpc.login({ clientId }).catch(console.error);


// get method to zlKVM
function sendRequestToEndpoint(hwid, callback) {
    const options = {
        hostname: env.abstract.ip,
        port: env.abstract.port,
        path: env.abstract.path,
        method: 'POST',
        headers: {
            'Authorization': env.abstract.apikey,
            'Content-Type': 'text/plain',
            'hwid': hwid
        }
    };
    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log('Welcome back! UID:', data);
                callback(true);
            } else {
                console.log(`Код ответа: ${res.statusCode}`);
                setTimeout(() => {
                    process.exit();
                }, 10000);
                callback(false);
            }
        });
    });
    req.on('error', (e) => {
        console.error(`Проблема с запросом: ${e.message}`);
    });
    req.write(JSON.stringify({ hwid: hwid }));
    req.end();
}
const hwid = getHWID(); //joke
function main() {
    console.log("Abstract 5");
    console.log(`


      /$$$$$$   /$$$$$$   /$$$$$$ 
      /$$__  $$ /$$__  $$ /$$__  $$
     | $$  \\__/| $$  \\__/| $$  \\__/
     | $$$$$$$ | $$$$$$$ | $$$$$$$ 
     | $$__  $$| $$__  $$| $$__  $$
     | $$  \\ $$| $$  \\ $$| $$  \\ $$
     |  $$$$$$/|  $$$$$$/|  $$$$$$/
      \\______/  \\______/  \\______/ 
                                   
                                   
                                   
     
                                                                                                               
    `); //yeah its shit hardcodded i dont give a fuck
    console.log(version);
    console.log("coded by finderfail");
    console.log("Your HWID:", hwid);
    create_folder() //creating folder for system
    download_jar()
   // checking(); //in new 0.5.2 update
}
// new function will be released later
// function checking() {
//     console.log("Now checking your HWID");
//     sendRequestToEndpoint(hwid, (success) => {
//         if (success) {
//             //console.log()
//             create_folder() //creating folder for system
//             download_jar()
//         } else {
//             console.log("Oh i think you don't have a license copy of Abstract")
//         }
//     });
// }
// readline method (so simple)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function jvmstarter() {
    const { exec } = require("child_process");
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Введите свой ник:', nick => {
        console.log(`Добро пожаловать ${nick}!`);
                const child = exec(`java -Xmx4096M -Djava.library.path=C:\\abstract_five\\Client\\game\\natives -cp C:\\abstract_five\\Client\\game\\libraries\\*;game_client.jar dev.abstract.game.main.Main --username ${nick} --width 854 --height 480 --version 1.16.5 --gameDir C:\\abstract_five\\Client\\game --assetsDir C:\\abstract_five\\Client\\game\\assets --assetIndex 1.16 --uuid N\\A --accessToken 0 --userType mojang -noverify`);
        console.log("После закрытия игры, лоадер закроется сам!");
        child.on('exit', (code, signal) => {
            console.log(`Процесс игры завершён с кодом: ${code}, сигнал: ${signal}`);
            setTimeout(() => {
                console.log("Игра закрыта");
                readline.close();
                process.exit();
            }, 15000);
        });
    });
}
function download_jar() {
    const http = require('http');
    const fs = require('fs');
    console.log("Скачивание JAR файла игрового клиента");
    const file = fs.createWriteStream(env.abstract.gamePath);
        const request = http.get(env.abstract.jardw, function(response) {
        const contentLength = parseInt(response.headers['content-length'], 10);
        let downloaded = 0;
        let startTime = Date.now();
        response.on('data', (chunk) => {
            downloaded += chunk.length;
            const elapsed = (Date.now() - startTime) / 1000; 
            const speed = (downloaded / elapsed / 1024).toFixed(2); 
            const percent = ((downloaded / contentLength) * 100).toFixed(2);

            process.stdout.write(`\rСкачано: ${percent}% (${speed} KB/s)`);
        });
        response.pipe(file);
        file.on("finish", () => {
            file.close();
            console.log("\nСкачивание Jar Успешен!");
            console.log("Старт скачивания файла UnZip!");
            download_unzip();
        });
    });
}


function cmd() {
    const { exec } = require("child_process");
    exec("start C:\\abstract_five\\UnZip.bat"); // execute unzip command 
}

function del_old_content() {
    const { exec } = require("child_process");
    exec("rmdir /s /q C:\\abstract_five\\Client\\"); // execute deliting old files (its junk but work)
    cmd()
}

function download_unzip() {
    const http = require('http');
    const fs = require('fs');



    const file = fs.createWriteStream(env.abstract.betchFilePath);
    const request = http.get(env.abstract.batchFileDownload, function(response) {
        const contentLength = parseInt(response.headers['content-length'], 10);
        let downloaded = 0;
        let startTime = Date.now();

        response.on('data', (chunk) => {
            downloaded += chunk.length;
            const elapsed = (Date.now() - startTime) / 1000; 
            const speed = (downloaded / elapsed / 1024).toFixed(2); 
            const percent = ((downloaded / contentLength) * 100).toFixed(2); 

            process.stdout.write(`\rСкачано: ${percent}% (${speed} KB/s)`);
        });
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание UnZip скрипта!");
            console.log("Старт скачивания файла Content!");
            ask_skip()
        });
    });
}

function create_folder() {
    const fs = require('fs');
    const folderName = env.abstract.mainGameFile;
    console.log("Создание корневой папкиы")
    try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
    } catch (err) {
    console.error(err);
    }
}

function ask_skip() {
    let ask;
    readline.question('Вы хотите пропустить скачивание Content? (0 = skip, 1 = download):', ask => {
        if (ask == 0) {
            skip_download()
        } else {
            download_content()
        }
  });
    
}

function skip_download() {
    console.log("Перед вводом ника дождитесь разархивации!");
    console.log("Старт!");
            //cmd() //who added this shit here?
            jvmstarter() //start minecraft (woooow really?)
}

function download_content() {
    const http = require('http');
    const fs = require('fs');

    const file = fs.createWriteStream(env.abstract.zipContentFile);
    const request = http.get(env.abstract.zipContentDW, function(response) {
        const contentLength = parseInt(response.headers['content-length'], 10);
        let downloaded = 0;
        let startTime = Date.now();

        response.on('data', (chunk) => {
            downloaded += chunk.length;
            const elapsed = (Date.now() - startTime) / 1000; // getting time in secs
            const speed = (downloaded / elapsed / 1024).toFixed(2); // dw speed in KB/s
            const percent = ((downloaded / contentLength) * 100).toFixed(2); // if u dumb not my problem

            process.stdout.write(`\rСкачано: ${percent}% (${speed} KB/s)`);
        });
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Скачивание Content завершенно!");
            console.log("Перед вводом ника дождитесь разархивации!");
            console.log("Старт!");
            del_old_content() // unzip
            jvmstarter() //start minecraft
            });
    });
}

// start point (yeah i dumb)
main();
