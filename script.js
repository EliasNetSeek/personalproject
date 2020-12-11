// ==UserScript==
// @name         PROJECT BY NETSEEK
// @namespace    http://tampermonkey.net/
// @version      0.3
// @updateURL    https://raw.githubusercontent.com/EliasNetSeek/personalproject/master/script.js
// @downloadURL  https://raw.githubusercontent.com/EliasNetSeek/personalproject/master/script.js
// @description  try to take over the world!
// @author       NetSeek
// @match        *://gamdom.com/*
// @grant        none
// ==/UserScript==


// TEST AUTO UPDATE
var removeGamePanels = true;
var refreshPageBool = true;
var sendNotificationBool = false;
var collapseChatBool = false;
var captchaButtonClicked = false;


var chatBoolPerm = true;

function claimRain() {


    if (collapseChatBool && chatBoolPerm){
        //$(".chat_collapse_ico").click();
		var chatIcos = document.getElementsByClassName("chat_collapse_ico");
		for (var x = 0; x < chatIcos.length; x++){
			chatIcos[x].click();
			chatBoolPerm = false;
		}
    }

    if (removeGamePanels){
        removePanels();
    }
	
	
	//normal rain - var rains = document.getElementsByClassName("custom-theme");
	var rains = document.getElementsByClassName("snow-theme");
	var buttonText = "Claim Free Coins";
	//var headerText = "THE SNOW IS FALLING";
	var headerText = "Free Coins";
	
	for (var i = 0; i < rains.length; i++) {
		var button = rains[i].getElementsByClassName("ellipsis");
		var header = rains[i].getElementsByClassName("content__header");
		var hideButton = rains[i].getElementsByClassName("content__hide");
		var buttons = rains[i].getElementsByClassName("content__button");
		
		//console.log(rains[i]);
		//console.log(button[0]);
		
		//console.log("TITLE: " + header[0].textContent);

		if (header[0].textContent == headerText) {
			//console.log("FIRST IF");
			
			if (typeof(button) != 'undefined' && button != null && buttons.length != 0 && !captchaButtonClicked)
			{
				button[0].click();
				
				captchaButtonClicked = true;
				
				if (sendNotificationBool){
					sendNotification();
				}
				
				if (refreshPageBool){
                    refreshPage();
                }
				break;
			}
			
		} else {
			//console.log("CONTINUE");
			hideButton[0].click();
		}
	}
	

    setTimeout(claimRain, 3000);
}

function removePanels(){
	setTimeout(function(){
		document.querySelectorAll('.section_right').forEach(function(a){
            a.remove()
        })

        document.querySelectorAll('.chat_msgs').forEach(function(b){
            b.remove()
        })
	}, 60000);
}

function refreshPage(){
	setTimeout(function(){
		window.location.reload(1);
	}, 120000);
}

function sendNotification(){
	var title = "RAIN RAIN RAIN";
	var icon = 'https://pbs.twimg.com/profile_images/1216417232311521280/D2EnNWb0_400x400.jpg';
	var body = "It's raining";
	var notification = new Notification(title, { body, icon })
}

var snd = new Audio("data:audio/wav;base64,SUQzAwAAAAAHdlRDT04AAAANAAAB//5PAHQAcgBvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/74gAAAA/8AEuAAAAJnIAJcAAAAQqgAS4AAAAgAAAlwAAABP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////++IAAAAP/ABLgAAACB+ACXAAAAEdHZM3tZ0AC6OyZvazoAH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9Ntq2uOWWRsrEdSA13uPNMMVIxBr8voAIMaDBuQG8wLKGO2b6Eb5kaAckw7bX4vcchd7j2oYll2G4ft16enibK1A1B36LcGZMmVGg4O88osuGsOsdTR3JZzUMOQ7l6GH8fx2EvC7hbRWBVcwwgBCFeNzUDXXI4Ych33/jdPTw27bvz9eNxuNy+32pDDlv/b1yvG3bd93JZunp7eedPGH8fyHL0Ta2zt+5zmGGGHP/P8MN16eX2+V6e3UjD+SyJsMa5DmNenp6enpMae3n+HK9JSWOZyuNy/ueeqSkpKTmdJSYf/6wpI3T54JttW1xyyyNlYjqQGu9x5phipGINfl9ABBjQYNyA3mBZQx2zfQjfMjQDkmHba/F7jkLvce1DEsuw3D9uvT08TZWoGoO/RbgzJkyo0HB3nlFlw1h1jqaO5LOahhyHcvQw/j+Owl4XcLaKwKrmGEAIQrxuaga65HDDkO+/8bp6eG3bd+frxuNxuX2+1IYct/7euV427bvu5LN09Pbzzp4w/j+Q5eibW2dv3Ocwwww5/5/hhuvTy+3yvT26kYfyWRNhjXIcxr09PT09JjT28/w5XpKSxzOVxuX9zz1SUlJSczpKTD//WFJG6fPA//viAAAAB9Rl2PZzQADoDLsezmgAIOmXUf3egBQdMuo/u9ACIrMhJDE4NYMzl+q6//BQLEAGbi5rQqcIDhiIWF7hCCvT1BwgS/ND0IQCIxaqRISpYO+6TrMqq01BAcAz9WzD3KNPMwh40giMwyjsBzP3U3CjSoW4le7lHeZb5/f19eBQSJBRdKCH79ZHU1ABre97eggA0V/Dueq0Uzq3a37iQ6S/9/9VAXAEIp8KS9dnmWKvy7nTWd2bsAY/jvD/sgoXD0U+n7UmWvoiR8eNY4bmZNyun6Vh6YrC8/eF3nXIWEls/rGN2KjuNIZZO3tUkD/n2++Gen6GQb23NV6aBv3+Erw5eZLPYfd5I/////////////////////////IrMhJDE4NYMzl+q6//BQLEAGbi5rQqcIDhiIWF7hCCvT1BwgS/ND0IQCIxaqRISpYO+6TrMqq01BAcAz9WzD3KNPMwh40giMwyjsBzP3U3CjSoW4le7lHeZb5/f19eBQSJBRdKCH79ZHU1ABre97eggA0V/Dueq0Uzq3a37iQ6S/9/9VAXAEIp8KS9dnmWKvy7nTWd2bsAY/jvD/sgoXD0U+n7UmWvoiR8eNY4bmZNyun6Vh6YrC8/eF3nXIWEls/rGN2KjuNIZZO3tUkD/n2++Gen6GQb23NV6aBv3+Erw5eZLPYfd5I1hlQSE2btwlJIeBaHlAoXiFgHQVY6hsBQKjowAJigPJjdXJsuRRhmBUPrlDgCf9IllKWE7DKlg8BANC0SFAhBOJpCoSRAAoAAtrQUBFTFpr8GBYcGJaDHBgimJQWgYEUhgMAwjACXZZ6tVn0FQKoEymo39xSrStJhGcSkYwDRQXaXzXXrv5a/8d/Sx2jvT3///qm3DLDRQPzBwEF6KEuzS3tZa1jMxa5Ajc35pbOXf5lzByguJBiyBQQBTzS+l5///8dR9pElNQU1fu6fGpDzKo2OgkHFqmC/MUpsstYd3qA3RqpkrekspkGOMxbhVWLEoIBw7tyi1Dnz7Hd/Qu1NQI19LqJVrfFhlQSE2btwlJIeBaHlAoXiFgHQVY6hsBQKjowAJigPJjdXJsuRRhmBUPrlDgCf9IllKWE7DKlg8BANC0SFAhBOJpCoSRAAoAAtrQUBFTFpr8GBYcGJaDHBgimJQWgYEUhgMAwjACXZZ6tVn0FQKoEymo39xSrStJhGcSkYwDRQXaXzXXrv5a/8d/Sx2jvT3///qm3DLDRQPzBwEF6KEuzS3tZa1jMxa5Ajc35pbOXf5lzByguJBiyBQQBTzS+l5///8dR9pElNQU1fu6fGpDzKo2OgkHFqmC/MUpsstYd3qA3RqpkrekspkGOMxbhVWLEoIBw7tyi1Dnz7Hd/Qu1NQI19LqJVrfP/74gAAAAk8ZdL7vNNk44y6X3eabJ5hk1mtay2LzDJrNa1lsUeGVSNFWpwAEkrAHqhgQACvQgA6MsmEAXH0NmMtEBn5m7oCI8z116G0ekVAbBX5QfHQITAQZFJMXU6Ufy65gEClv57Ublbtxdr4WcQbVXUsPPwdBT3RCMYZRNZoySWHBoNfsdYepvPQfOSNRTl4dFFdfuDYe8/eeuffu0cqt//fw3/NXBxWPPIKe3LPv/rDvLH0UA9ww7rn8t4SscjCT7mU7rDPWHOzFDNQe4T2Xq+td5hMQFChw8Nea+eePMuVu8qxqIxhlDUpve8/+rd5xrRSDhqkj2fd3s+5+8tBSkIO5+dvP//////////////////////////////////////////////////////////////////////////////////////////0eGVSNFWpwAEk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ZkwZiBZuDmvl3FL0L3tJAlMMmMO2p5MSA6MAwHSoZXABf9CdBE/Ztpty3EtfcqWIiYGha8ucnxbB+LZvg3NsQkC8tynJ+Dk4zJxbD3WLARgBCHW41vUBx137PaDP+ZN3DgDlKL9R5cnotYTtwqga5mBALe/65jgeZ6/8f42b9frv1efh2lt/v8+fl+u/Ld7/erpUFRdGksOsq6WzQUCjbWZ3Ue7i1DkewjiVl6aovgD7j5fW+ZczCAq9zN2DE4oHg5F7HZZVbGX+p/59nUEY/a////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8waIcwIk0iTARUR///cwKFZkwZiBZuDmvl3FL0L3tJAlMMmMO2p5MSA6MAwHSoZXABf9CdBE/Ztpty3EtfcqWIiYGha8ucnxbB+LZvg3NsQkC8tynJ+Dk4zJxbD3WLARgBCHW41vUBx137PaDP+ZN3DgDlKL9R5cnotYTtwqga5mBALe/65jgeZ6/8f42b9frv1efh2lt/v8+fl+u/Ld7/erpUFRdGksOsq6WzQUCjbWZ3Ue7i1DkewjiVl6aovgD7j5fW+ZczCAq9zN2DE4oHg5F7HZZVbGX+p/59nUEY/aR3iHMTJfcnCWUsvw/POHl4MSS+ZmQk09RIFJZI5cpgTALmFKFEbPYWJhlgDDQEKZzmweiIKAKOzTW7aTsLtBgBlWCpDFjAwASY9AM1fUvflujJaB/IGQ5mAiAcvXtmmjKgRlGoA/JjsQHAt26bAut+r/yrVyD/muqNhxXLoCsVG3yZlLK0P1h0ITg6YCHW//hpqrY1z9dmGo6u/vLsxz+dei19r7vPnfuf79fv/yujpsDkOmflU6QVekMFAkmKbPlNYoHL7qchtLfK5B3vH9xq373qE5XbOVxspCkvDcpbn42SgJ5nz7+o9fQjvEOYmS+5OEspZfh+ecPLwYkl8zMhJp6iQKSyRy5TAmAXMKUKI2ewsTDLAGGgIUznNg9EQUAUdmmt20nYXaDADKsFSGLGBgAkx6AZq+pe/LdGS0D+QMhzMBEA5evbNNGVAjKNQB+THYgOBbt02Bdb9X/lWrkH/NdUbDiuXQFYqNvkzKWVofrDoQnB0wEOt//DTVWxrn67MNR1d/eXZjn869Fr7X3efO/c/36/f/ldHTYHIdM/Kp0gq9IYKBJMU2fKaxQOX3U5DaW+VyDveP7jVv3vUJyu2crjZSFJeG5S3PxslATzPn39R6+g//viAAAACgFk0nsdq2TerJpPY7VsnSWPTex7jZuksem9j3GzNneHQCJdIkwEVOfz+680zD6mKAVEYaK264BqS3USWnGA4YGBjSmg0+GCQdiEClFWxQShwFAObyE0nqNvNmRAXWoM6QwdAJqE3INOj2s8/YK5ZKAdoVl0jhXQQgYDB3KA1iHBCUngsCI3JJg6FryzWS6zqycBEIjch5qZkGTJsqrKUgweZwDAD1gYyHCam3JQu9bUnUnI5C1efqydr5iCEGAoay2bh+Y0j5ZCEMkyotrI9jMZKdPFwMvVlqP04N6qUBvLKJeMS6OcBiQIAsHiRN2KxkL4LQzYxdZpH0V5v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+bO8OgES6RJgIqc/n915pmH1MUAqIw0Vt1wDUluoktOMBwwMDGlNBp8MEg7EIFKKtiglDgKAc3kJpPUbebMiAutQZ0hg6ATUJuQadHtZ5+wVyyUA7QrLpHCughAwGDuUBrEOCEpPBYERuSTB0LXlmsl1nVk4CIRG5DzUzIMmTZVWUpBg8zgGAHrAxkOE1NuShd62pOpORyFq8/Vk7XzEEIMBQ1ls3D8xpHyyEIZJlRbWR7GYyU6eLgZerLUfpwb1UoDeWUS8Yl0c4DEgQBYPEibsVjIXwWhmxi6zSPorzdGd4dBMl9ycJZTZ/X7596QrxaQKhiit4gYlWkPHDARABMIoPY1qhvzCuAcEgE1YHXigOAHWeLACQ/P6SnefyYA2AZqegswGAOW3svlVHAArUGqSzdt1R0AIlAVeHV2o8ZAADAdiMaBJh8NroaFR3kMtff1MaksW3OU6siaFLANu60Cqxv9wLVQ5ow5AUEX/+oZHKOGufh2AoH7//zk33+4yud/f49+x+u7gb94/lg65EqpGyND3Cepg4EJZRnDOU51WKYx/C+LAHkfk2nh+gfL8/kk7qtnjm8BgUaKwZ5Z83NojZ67+/rUeCM7w6CZL7k4Symz+v3z70hXi0gVDFFbxAxKtIeOGAiACYRQexrVDfmFcA4JAJqwOvFAcAOs8WAEh+f0lO8/kwBsAzU9BZgMActvZfKqOABWoNUlm7bqjoARKAq8OrtR4yAAGA7EY0CTD4bXQ0KjvIZa+/qY1JYtucp1ZE0KWAbd1oFVjf7gWqhzRhyAoIv/9QyOUcNc/DsBQP3//nJvv9xlc7+/x79j9d3A37x/LB1yJVSNkaHuE9TBwISyjOGcpzqsUxj+F8WAPI/JtPD9A+X5/JJ3VbPHN4DAo0Vgzyz5ubRGz139/Wo8P/74gAAAAn8Y9N7Httk4wx6b2PbbJzlj0/sd22bnLHp/Y7ts0B4h0EyX2pwllRH//DGelzWkxlcl7n8a0DDphF0limBEBuYN4zxo9krmEOB0CgCV1O7Gm1a2RACxaWbT9c++NANRyal71EoIlNehF2B5yPw5t4fh8SAuqYZ0kPpyGR/B3wErt2xgCca3YRB5u/9Pyhw5WweImOJa9F+ghn31kW4foSwFxXoMB+f+ZoCdb1395XGz/v9f+N7eG3x39/v/9f9a+E/vn7qCo2HPUXf9I1jmMEBcgdTOTamLcw9fJmjjpED5wTZ99t0DZvw7Hu5YY5U0AmCmKkabeVX5SkBZrf+X/Rp///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0B4h0EyX2pwllRH//DGelzWkxlcl7n8a0DDphF0limBEBuYN4zxo9krmEOB0CgCV1O7Gm1a2RACxaWbT9c++NANRyal71EoIlNehF2B5yPw5t4fh8SAuqYZ0kPpyGR/B3wErt2xgCca3YRB5u/9Pyhw5WweImOJa9F+ghn31kW4foSwFxXoMB+f+ZoCdb1395XGz/v9f+N7eG3x39/v/9f9a+E/vn7qCo2HPUXf9I1jmMEBcgdTOTamLcw9fJmjjpED5wTZ99t0DZvw7Hu5YY5U0AmCmKkabeVX5SkBZrf+X/RpQIiIUTNvcnCYlOf/3jlkrf2NxR0wURg6mhjSrAkA9xYCAwzX87VmIxHDUwAAZL9lD7mBADAwA1ivxDfqNudiHALM8o4BMCQrgWaq8VVkdRPHCGI0h1MDAGd7Dt6fcwyEUI5hf8TKgE+27iyu7v/e+7IPoePGHANaVXtvnk8FHnU2SAbn4CEC7/+Zif4f/75Tvn//rvzXf59mj/D8P/X658i/fP5MEpKHB1dj6VpWCTj+mGkqJMar6bFSV0as6SFQACgSlarj7AfgpTj7/x6F51amOofMmGSIfinL1qebEobc1h9nk3R4IEREKJm3uThMSnP/7xyyVv7G4o6YKIwdTQxpVgSAe4sBAYZr+dqzEYjhqYAAMl+yh9zAgBgYAaxX4hv1G3OxDgFmeUcAmBIVwLNVeKqyOonjhDEaQ6mBgDO9h29PuYZCKEcwv+JlQCfbdxZXd3/vfdkH0PHjDgGtKr23zyeCjzqbJANz8BCBd//MxP8P/98p3z//135rv8+zR/h+H/r9c+Rfvn8mCUlDg6ux9K0rBJx/TDSVEmNV9NipK6NWdJCoABQJStVx9gPwUpx9/49C86tTHUPmTDJEPxTl61PNiUNuaw+zybo8D/++IAAAAK5GPS+x2rZteMel9jtWzb0Y9P7HeNm3ox6f2O8bNAiIcxIl9qUAZUR//iLVrKhzirFWUQDxfElAmSjaw4wLAAxSFs+qFwINEWB5ULfSBHMVBVyKta2m2t+wBgW/5HGjCoEFxTED4rIvwVM9gz3QBwOvMtRdHODGoGI22AF1RRiPBqBhlC6kJ5rzZpaoR8gMCMrDVQKJKMJcXFERWIQhQBsAsCyprAw4Jn6kSyVve+nIx+rR2ntqzIIAqFmERzxBANMYmwMBBMOeeIVEvmpiIMRJQ2IuG7cap9YuZZKDE6h7ZN2MRdAhIgzy2ROIF8FgM9lG8lXz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0CIhzEiX2pQBlRH/+ItWsqHOKsVZRAPF8SUCZKNrDjAsADFIWz6oXAg0RYHlQt9IEcxUFXIq1raba37AGBb/kcaMKgQXFMQPisi/BUz2DPdAHA68y1F0c4MagYjbYAXVFGI8GoGGULqQnmvNmlqhHyAwIysNVAokowlxcURFYhCFAGwCwLKmsDDgmfqRLJW976cjH6tHae2rMggCoWYRHPEEA0xibAwEEw554hUS+amIgxElDYi4btxqn1i5lkoMTqHtk3YxF0CEiDPLZE4gXwWAz2UbyVfNQiIhRM2+rcJaQJ//zcIuMjgJiTiiQmGMWFkrORKaaYCBaYDsgZyzGYGhwIgHUObrHktwuCtC90O31O2PcLW41XujBiCCieFG22cjs5Pf2vyDBYD61W5Qt2IAOYJ3ppwOtKokEy9JDktr9/ulxoJ3eVWkHg9fs38HN5PybU/1mCtV4QgDf/wxSOcP//xktz9/v/q8/vzV7//Ln9/+fR///zIcCI0XJ2CGYPbboBQKP1Vw5JdzEM6oPsKmzmaPGHfoIO+1qu+eo5VtXHZMQh0iCsi32lsvCXwnc+dqfBvMlCIiFEzb6twlpAn//Nwi4yOAmJOKJCYYxYWSs5EpppgIFpgOyBnLMZgaHAiAdQ5useS3C4K0L3Q7fU7Y9wtbjVe6MGIIKJ4UbbZyOzk9/a/IMFgPrVblC3YgA5gnemnA60qiQTL0kOS2v3+6XGgnd5VaQeD1+zfwc3k/JtT/WYK1XhCAN//DFI5w///GS3P3+/+rz+/NXv/8uf3/59H///MhwIjRcnYIZg9tugFAo/VXDkl3MQzqg+wqbOZo8Yd+gg77Wq756jlW1cdkxCHSIKyLfaWy8JfCdz52p8G8y//viAAAACz1j0vsdq2TYrHpfY7VsmwmPS+f2rZNhMel8/tWyQHeHQiJfclAGVGf/8KLODnWbsztECH2ACOIMAYCAAzNAYYhjyeWncYqgGJAYvd+IuWgVyX7pLVGtlQuoYAgNGo/LoDMFAxdeUwvBEGnetX2bPbRKAZgeCDYDFRTHQFqwMCU0DHIPFAEQEFxUTzimsvVOJzqxqB7BdGsiUhz3ErNZMKCAECjOAYCTTWBhYRJ+xiS3W1WhM2t7ee+5BQcRTQYwNGKJLngJAoOANyRSLpsmH2dIqF4LMniyS8cTkoN60skus6hYdYGBhaHHmjsZnyMDVKC3oyyeX//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6A7w6ERL7koAyoz//hRZwc6zdmdogQ+wARxBgDAQAGZoDDEMeTy07jFUAxIDF7vxFy0CuS/dJao1sqF1DAEBo1H5dAZgoGLrymF4Ig071q+zZ7aJQDMDwQbAYqKY6AtWBgSmgY5B4oAiAguKiecU1l6pxOdWNQPYLo1kSkOe4lZrJhQQAgUZwDASaawMLCJP2MSW62q0Jm1vbz33IKDiKaDGBoxRJc8BIFBwBuSKRdNkw+zpFQvBZk8WSXjiclBvWlkl1nULDrAwMLQ480djM+RgapQW9GWTy0B4h0EiX2pQBkbf/hJqKI8XEGyN4IaxnKAfKCl6VjGAoJGGBwnNyhGHgKg4Al0u9LXmdkeAaHb2DVVGbIEAmljtO+AqH01H6S6zC1HW8+UU86Vglk6i+RQMvgYeboGtQCHqDKAhAI4WTF5Xpzh9SDEcCwwKpEi0Zi3HxnSJpEVMgmCCCMAaCC/qAwmIUO9yW9qT2ln16fm9TWTC2gKDE0GQDohS5SJUEhGQ8sGah8GxRE6MXy0WQtbeS7DRclCEpSyVkTqSJiOUAIMBAIunETiSQZs+2flk8pAeIdBIl9qUAZG3/4SaiiPFxBsjeCGsZygHygpelYxgKCRhgcJzcoRh4CoOAJdLvS15nZHgGh29g1VRmyBAJpY7TvgKh9NR+kuswtR1vPlFPOlYJZOovkUDL4GHm6BrUAh6gygIQCOFkxeV6c4fUgxHAsMCqRItGYtx8Z0iaRFTIJgggjAGggv6gMJiFDvclvak9pZ9en5vU1kwtoCgxNBkA6IUuUiVBIRkPLBmofBsUROjF8tFkLW3kuw0XJQhKUslZE6kiYjlACDAQCLpxE4kkGbPtn5ZPKP/74gAAAAvQZNHp/atk2QyaPT+1bJnhj03sdq2bPDHpvY7Vs5v/4Ur7SoAiIl9dqZYBVtjOMQDTJwOMACF+xYD21KoLmEyXHLD3mGgSAUAVbHDhgwDANdSsUvnsVG0W5YAQSh6DbjwmC4ks1ruZ73TkwxXkFVU/iEBYykzlQhQBhaDqOKIRQM/KKlin1tNHkvSNB1gKCFQvZKilHHIHqN9QIQEFxHAwAETDTAw8MHVqcwITqXXp0XpV6vJzaozCAMASBpgQAZoUctGQWQCpHi2xSY4QGWUSgJQY4W1EScsEtOyVQUSi0jcnAMOgAHAwrGjmh4Z0OgRQy0tEqTX//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5v/4Ur7SoAiIl9dqZYBVtjOMQDTJwOMACF+xYD21KoLmEyXHLD3mGgSAUAVbHDhgwDANdSsUvnsVG0W5YAQSh6DbjwmC4ks1ruZ73TkwxXkFVU/iEBYykzlQhQBhaDqOKIRQM/KKlin1tNHkvSNB1gKCFQvZKilHHIHqN9QIQEFxHAwAETDTAw8MHVqcwITqXXp0XpV6vJzaozCAMASBpgQAZoUctGQWQCpHi2xSY4QGWUSgJQY4W1EScsEtOyVQUSi0jcnAMOgAHAwrGjmh4Z0OgRQy0tEqTVXeIhCIl9yVJZSy/nzH5Ncd5gSPJVNfbIQHQ5FzlbS1phiHx0eHocQQ8ALQoTRsEHACdetRbelT/BEANWhs0xgoAznYSHShtuDHf5DchfsSEZpqTF4mRCYDByaAOmw2SgGDSfSYam16z9clQDhWO4iJJEwJ9MBEi4scxEVuFAiXgMDhIv6AGIRuefpD4LvvR3clM9Z53ze2kYhMQBYupEcYmRVKACQcMgZoLKZ6MVzFy+JXLBbWSDEoS1U6VLskkP4FBSQ9BNScwD3UFNzh7JXeIhCIl9yVJZSy/nzH5Ncd5gSPJVNfbIQHQ5FzlbS1phiHx0eHocQQ8ALQoTRsEHACdetRbelT/BEANWhs0xgoAznYSHShtuDHf5DchfsSEZpqTF4mRCYDByaAOmw2SgGDSfSYam16z9clQDhWO4iJJEwJ9MBEi4scxEVuFAiXgMDhIv6AGIRuefpD4LvvR3clM9Z53ze2kYhMQBYupEcYmRVKACQcMgZoLKZ6MVzFy+JXLBbWSDEoS1U6VLskkP4FBSQ9BNScwD3UFNzh7L/++IAAAAMUWTS+xyrZNIsml9jlWyZSY9HrHatkykx6PWO1bJWd4hRI19yUAaTZ/XKC/uXQy6rThILI2Kk0lmkwBZcFQgFHeZ0tgIC4XBShrdoNZgMAKBp2f7BKtXBkDWqGipAEOnMrTuKek9kllm9NpNsBCBrKkThKh1gFoUBk8CD5PiFR7PsM/tRdaqC2BQRHx8IHBk1E0WlGKIW3FRcGwEnNYGCgw/uWD/XnPON1PS809SIQgAFg25FRCMT8eLIC4RFtctLIa50XIzFcuBlqSh+PclCWWdWURsLI1JE1GOAw4LAUDRVKyJubDPANA8rWpR8Hpr/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qzvEKJGvuSgDSbP65QX9y6GXVacJBZGxUmks0mALLgqEAo7zOlsBAXC4KUNbtBrMBgBQNOz/YJVq4Mga1Q0VIAh05ladxT0nskss3ptJtgIQNZUicJUOsAtCgMngQfJ8QqPZ9hn9qLrVQWwKCI+PhA4Mmomi0oxRC24qLg2Ak5rAwUGH9ywf6855xup6XmnqRCEAAsG3IqIRifjxZAXCItrlpZDXOi5GYrlwMtSUPx7koSyzqyiNhZGpImoxwGHBYCgaKpWRNzYZ4BoHla1KPg9NZv/4kr7SoAipz+/oJHhAOMpaIiG7DIxE4EgOBQDbIhWYiDcegHuYrAELAmrx14oCgDROSslcY5BqMWJIB9irCIDMGA1deOSPTzUUFyrOUW24A4HYDrUUxXADV0AMNBzyfGUHc7C0bTKdLVKM4H+LpXKpTHEmNclnHcdCQNJlADAIER4GExPfucJPrQp+Zt1beb+s8McFCWfL4oUpJphcKLeaLoG5wgswSSEasWMkJYLVBceUCUWpEdAGCxMG0E+aJmjD+HpLZqKiUpm//iSvtKgCKnP7+gkeEA4yloiIbsMjETgSA4FANsiFZiINx6Ae5isAQsCavHXigKANE5KyVxjkGoxYkgH2KsIgMwYDV145I9PNRQXKs5RbbgDgdgOtRTFcANXQAw0HPJ8ZQdzsLRtMp0tUozgf4ulcqlMcSY1yWcdx0JA0mUAMAgRHgYTE9+5wk+tCn5m3Vt5v6zwxwUJZ8vihSkmmFwot5ougbnCCzBJIRqxYyQlgtUFx5QJRakR0AYLEwbQT5omaMP4ektmoqJSk//viAAAAC91j0vscq2TELHpfY5VsmxWTQ6xyrZNismh1jlWyVneIUiNvalAGVCv1+pPq4+ywy0S60wwIANLxA4HIogQDmHVYfTeJikFGCACmEzmGmWoIh4Kv1M8oVOciABV9TskGRVNfJ8mw51Xs+awiQ0C9smaE+ISAYVTgB0QE5kDDFhBsde1eenZkDgwVSVdY2I1U1lRYbkYawshNLrAwMFH+mW6tq/OvarT9CroCRgsHkxc4hCOArlgIAkRZEtqJRahhuUmOh90iweURNyUJams4WlUaiNAiIxSpkilWweE1W15SdH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qzvEKRG3tSgDKhX6/Un1cfZYZaJdaYYEAGl4gcDkUQIBzDqsPpvExSCjBABTCZzDTLUEQ8FX6meUKnORAAq+p2SDIqmvk+TYc6r2fNYRIaBe2TNCfEJAMKpwA6ICcyBhiwg2OvavPTsyBwYKpKusbEaqayosNyMNYWQml1gYGCj/TLdW1fnXtVp+hV0BIwWDyYucQhHAVywEASIsiW1EotQw3KTHQ+6RYPKIm5KEtTWcLSqNRGgREYpUyRSrYPCara8pOi3beEq+UmAJFCv/9yLc3dvKxoaMDXYARoiCQIc4qAAwaoTrMUMJgkCABc7sQ2AgAuhPmQSrkdJgNSiEJ1sJyUgEPxXOj9aEniDq4P/LFUzAICmmdisNkKCsKTwW8mw1hNNHRtVUeqSLIBwlNCCFYjBlUioPUsuLlBgFMAMBgQz0AMLjFBNXLJW6ttTon71NQ3k3U1ZwIQqBINGZPitRUTY1DjxVJoMkaHSGTI8XBCksHpFJKFqYLF4RE6MaZEyVR7AUQoOH40CueJIvB/gMBgErFE/Jxh9D3K9u28JV8pMASKFf/7kW5u7eVjQ0YGuwAjREEgQ5xUABg1QnWYoYTBIEAC53YhsBABdCfMglXI6TAalEITrYTkpAIfiudH60JPEHVwf+WKpmAQFNM7FYbIUFYUngt5NhrCaaOjaqo9UkWQDhKaEEKxGDKpFQepZcXKDAKYAYDAhnoAYXGKCauWSt1banRP3qahvJupqzgQhUCQaMyfFaiomxqHHiqTQZI0OkMmR4uCFJYPSKSULUwWLwiJ0Y0yJkqj2AohQcPxoFc8SReD/AYDAJWKJ+TjD6HuV//74gAAAA1wY9Fp/KNmxYx6LT+UbNfZk0esbq2S+zJo9Y3Vsrd/2ir7SYAyDy/8s8BcKkkI5goMBMhQhQEggDonIpGHBefcEQsURoJLNeaQKxioFTMmauGKWeQWBEzNRWmMQBBj0Rue707JHX7AN+GSYSP0gpZkMaBg+YDNUkjokRcPSH+9W8ogNEyeI5A2FTSFMNlkSSDHA3o6DaJprAxiJ/ln1aT2lB6Xr3lz6QSIidFkGE+BtJcJUBx8ZtAqx/RMBSqBTKhPh1VGRLKHPjcJakxKZkmisfACXAuQzSWaoFkMZOcemzlvD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3f9oq+0mAMg8v/LPAXCpJCOYKDATIUIUBIIA6JyKRhwXn3BELFEaCSzXmkCsYqBUzJmrhilnkFgRMzUVpjEAQY9Ebnu9OyR1+wDfhkmEj9IKWZDGgYPmAzVJI6JEXD0h/vVvKIDRMniOQNhU0hTDZZEkgxwN6Og2iaawMYif5Z9Wk9pQel695c+kEiInRZBhPgbSXCVAcfGbQKsf0TAUqgUyoT4dVRkSyhz43CWpMSmZJorHwAlwLkM0lmqBZDGTnHps5bwu//pKvtKgDStX7+rbyt00ubMyZpDUigqzkWmmoyjrwZXfoIlDXijtxmYqAsdo8t6Vq6XPymMaQDGzmV5Bk2H83m+ktt0VXlVSzgvQhRICg5LDECKh5xlH7VH6KbAoHj5NniyWJDjRiooJAIiSAX+XqAwKF/sdNPevXMmtXpbzP6QQAEFggyIpAUU8kAYBBRlHZdTcW+UVlwNVOstSAR+LVFiOHtJAuqIMLNAwuMQUCpWNVF1EhoIgYiZZtOkvM7v/6Sr7SoA0rV+/q28rdNLmzMmaQ1IoKs5FppqMo68GV36CJQ14o7cZmKgLHaPLelaulz8pjGkAxs5leQZNh/N5vpLbdFV5VUs4L0IUSAoOSwxAioecZR+1R+imwKB4+TZ4sliQ40YqKCQCIkgF/l6gMChf7HTT3r1zJrV6W8z+kEABBYIMiKQFFPJAGAQUZR2XU3FvlFZcDVTrLUgEfi1RYjh7SQLqiDCzQMLjEFAqVjVRdRIaCIGImWbTpLzP/++AAAAAOfWTRaxyrZMIsmi1jlWyV5Y9FrHKNkryx6LWOUbK3f+Iq+0mgJLi//u4XYdtTT0qqPu0gVOXMLmPG6hhMOnfTQJDceADQ4El6DilLW6Sl7QKM2i1F2g5BZhAQxepIbLsWpmk5HsKcWDVJZMoDPgGI0BQTjmFwi5ItJurS3oSwFtiKjOm5oG0loUmPJSIGXAahYTgUwAAaQTWBgYNP7Ikt1q/Tbr28w9FxNoMCzEwNZGgF0h2OlOJHSgs65kMFjp6Zyw02lgbSZ1BA4QMDDgzBECyWsfNheB3UkjyzWR5bmH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////bv/EVfaTQElxf/3cLsO2pp6VVH3aQKnLmFzHjdQwmHTvpoEhuPABocCS9BxSlrdJS9oFGbRai7QcgswgIYvUkNl2LUzScj2FOLBqksmUBnwDEaAoJxzC4RckWk3Vpb0JYC2xFRnTc0DaS0KTHkpEDLgNQsJwKYAANIJrAwMGn9kSW61fpt17eYei4m0GBZiYGsjQC6Q7HSnEjpQWdcyGCx09M5YabSwNpM6ggcIGBhwZgiBZLWPmwvA7qSR5ZrI8tzCjf+oq+QmAMqf//x5uCpmHX+XLQspAqC5IOCKRSVRgQwnBEADgyik12NWY0oqv6dnsJpcV9AP9zOgGQZlq99Nz5D9fklaZitSaBPgYCWBMWOwuC/J1Uuf31HAcUNSg5YIvGqtZeivCBHC/xf0AMCVQ+oq9bVed+9/O1akxaAWOoEAD2iTNiyBUeNF0JYUoaLMbmYe+5KnlkZH49RySppMiPoEkQuJFS1KTD7OveWUl0b/1FXyEwBlT//+PNwVMw6/y5aFlIFQXJBwRSKSqMCGE4IgAcGUUmuxqzGlFV/Ts9hNLivoB/uZ0AyDMtXvpufIfr8krTMVqTQJ8DASwJix2FwX5Oqlz++o4DihqUHLBF41VrL0V4QI4X+L+gBgSqH1FXrarzv3v52rUmLQCx1AgAe0SZsWQKjxouhLClDRZjczD33JU8sjI/HqOSVNJkR9AkiFxIqWpSYfZ17yykv/++IAAAAO5mPQafujZrlMeg0/dGzVsY9BqG6NmrYx6DUN0bODbeIqaQGANH3/8zaY8WTgsZuGmA2CQOGC7HVtmBNB/WOAhBB9lENyxw33gbO9qgc7qmm9WqoXD5bWzyku9Wfu5xxS3e6JsG2A7UVEBunVSf/XrUdAaGnCHGiY0nLpJrJE1E3hwJuFgTDcDCHn+WG9qT2s9vQ85VzoSCAiEoDYD4hM0i2A0BEDnjVZfNVC3pFAtkwICIkqjHzG4emyimNJRQMzZAiIDVMKICXdIulUWkBgAeTZzkfJ7L////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4Nt4ippAYA0ff/zNpjxZOCxm4aYDYJA4YLsdW2YE0H9Y4CEEH2UQ3LHDfeBs72qBzuqab1aqhcPltbPKS71Z+7nHFLd7omwbYDtRUQG6dVJ/9etR0BoacIcaJjScukmskTUTeHAm4WBMNwMIef5Yb2pPaz29DzlXOhIICISgNgPiEzSLYDQEQOeNVl81ULekUC2TAgIiSqMfMbh6bKKY0lFAzNkCIgNUwogJd0i6VRaQGAB5NnOR8nsoLtogZrAYSyQvs542JolR9E2NwGmOgBbJTF3QKHBM2RAzNZFRX3UdB59Z/QPn7B9ao6YxIEc6pJ+UmepH9Ts0s+9WpEpAQUApGPKI1PLnvW3Ohb2bEex0iDD4NlF9YZ+LaoLPEXUowAyrklk23I4v9S52pORz9Wd8s+YGITPCA6RcG0JqiWATKE1Rkqx0h0sIF8TaolXkOcfj1csvU1AlQDEI56D05QEoqXozp7GC7aIGawGEskL7OeNiaJUfRNjcBpjoAWyUxd0ChwTNkQMzWRUV91HQefWf0D5+wfWqOmMSBHOqSflJnqR/U7NLPvVqRKQEFAKRjyiNTy571tzoW9mxHsdIgw+DZRfWGfi2qCzxF1KMAMq5JZNtyOL/UudqTkc/VnfLPmBiEzwgOkXBtCaolgEyhNUZKsdIdLCBfE2qJV5DnH49XLL1NQJUAxCOeg9OUBKKl6M6ex//viAAAAD5tj0Gn6o2as7HoNP1Rs1Q2TRahujZKhsmi1DdGygu2qBmsBhLTT//rMKC9cllFmoCWRFKCK1niKqswExuLxTNbGHHQfO9r6CD/bzHVHSBCKEZ0f03N2v1ybdrDUssA1aAiBLTLp95f9ttoKEj5MpoERYjjSZJhuTNYX9KC1pgYhYV27nB76kvdZk35zzL0kQakgWTmxNjHjSPGoXPionz6mNkBosZHmEEnKLyZko0ykqaIllIxMRygMMqBYMapIqNiHAwGW2elRLWX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BdtUDNYDCWmn//WYUF65LKLNQEsiKUEVrPEVVZgJjcXima2MOOg+d7X0EH+3mOqOkCEUIzo/pubtfrk27WGpZYBq0BECWmXT7y/7bbQUJHyZTQIixHGkyTDcmawv6UFrTAxCwrt3OD31Je6zJvznmXpIg1JAsnNibGPGkeNQufFRPn1MbIDRYyPMIJOUXkzJRplJU0RLKRiYjlAYZUCwY1SRUbEOBgMts9KiWsoNt7CrrSqTGf6mrZZQH2OgY8EoCg4qErakSSB1xeiQzeQW7DtulNZ91co/g/LeVcEAeePdUPN2Pzwqq02tSZgA9oHSG6Zofy577cwFeNSUTODvczKqiqiIxGGYBaEReswANImj+mVv1eda21vO/YSIKGlkPFNIkeMwFhZF2VJQ+ZDjczPFIPqyz8izkc0zWSo8IFBNRuQwDNngtYNzyRoeG6H6LOaGWprBtvYVdaVSYz/U1bLKA+x0DHglAUHFQlbUiSQOuL0SGbyC3Ydt0prPurlH8H5byrggDzx7qh5ux+eFVWm1qTMAHtA6Q3TND+XPfbmArxqSiZwd7mZVUVURGIwzALQiL1mABpE0f0yt+rzrW2t537CRBQ0sh4ppEjxmAsLIuypKHzIcbmZ4pB9WWfkWcjmmayVHhAoJqNyGAZs8FrBueSNDw3Q/RZzQy1Nf/74gAAAA/7Y9BpuaNmtex6DTc0bNO9f0Gm5o2Sd6/oNNzRsoBdswZtUsTEW/tSNS8iJcAAqWqDlkwYiOoH2e40O1se0sSs9/61H8h+7fjwVii0zObvd+i+72gj/dRuSIGHaAtsImXxqE8iov+urzgOekiRY0KYzSYlpqUiJpDmAsCJUDDBRCmZgIHFdvOm3/zH1tfzKrqNwULJkTD9SKGZSAoEFGRPTJjpApZRLIn92PyKsR2qdLSnZJIjQSOifUk1J2E4srXONl/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC7ZgzapYmIt/akal5ES4ABUtUHLJgxEdQPs9xodrY9pYlZ7/1qP5D92/HgrFFpmc3e79F93tBH+6jckQMO0BbYRMvjUJ5FRf9dXnAc9JEixoUxmkxLTUpETSHMBYESoGGCiFMzAQOK7edNv/mPra/mVXUbgoWTImH6kUMykBQIKMiemTHSBSyiWRP7sfkVYjtU6WlOySRGgkdE+pJqTsJxZWucbL/////////////////////+AC7QqbZvNxP/3QF0SwAKaBpeCH6RDM+cnLhy3hnSTGP/+r/xbW9YkI75Z2dyr6mOtfpNastJZkK6AKXAZWk8iJ6IkjNH+p70wbEpEaeKI3pDTdNSgyYQMPgG2QoO4ygBrERoVzzqRJU0bo0d5cP0qO20o1PROBMOAUmOpitSQPoBq4qOjM2WRGdoEZUfl6Unrz1eyQgAMVnbMiFfkEQAXaFTbN5uJ/+6AuiWABTQNLwQ/SIZnzk5cOW8M6SYx//1f+La3rEhHfLOzuVfUx1r9JrVlpLMhXQBS4DK0nkRPREkZo/1PemDYlIjTxRG9IabpqUGTCBh8A2yFB3GUANYiNCuedSJKmjdGjvLh+lR22lGp6JwJhwCkx1MVqSB9ANXFR0ZmyyIztAjKj8vSk9eer2SEABis7ZkQr8gj/++IAAAAP+VxN6bSjZZerib02lGyFoMcbgDRLSLQY43AGiWkACWsqSRuyM/9TE8kiVCZCRhY6ITDPAISgbpGHAEWLpsgboroLdKv2N20alPUiumcOmQtYGekgcIiQJEUEV0Ukv1JUUTEcTmK2RmRss1iziDEeHwj8XSGCzgMimBEfFgL9M1HJGRVormR5SShliSWYsijzqKiBHkkjIzGWAAKgNGSKqKZVSWMqSLvRuvqLrJOtFlP7UtZwQsPWoO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gAS1lSSN2Rn/qYnkkSoTISMLHRCYZ4BCUDdIw4AixdNkDdFdBbpV+xu2jUp6kV0zh0yFrAz0kDhESBIigiuikl+pKiiYjicxWyMyNlmsWcQYjw+Efi6QwWcBkUwIj4sBfpmo5IyKtFcyPKSUMsSSzFkUedRUQI8kkZGYywABUBoyRVRTKqSxlSRd6N19RdZJ1osp/alrOCFh61B3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAuMgQgGo+MKFSBPgeQFUBjhwhziRPP2////UgoBAgYgd0VP////Q4zw0RIAAAuMgQgGo+MKFSBPgeQFUBjhwhziRPP2////UgoBAgYgd0VP////Q4zw0RI//viAAAAD/wAS4AAAAmcgAlwAAABCqABLgAAACAAACXAAAAE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////74gAAAA/8AEuAAAAJnIAJcAAAAQqgAS4AAAAgAAAlwAAABP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9UQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA==");

claimRain();