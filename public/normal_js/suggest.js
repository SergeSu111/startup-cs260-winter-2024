setInterval(() => {
    
    m_list = ["Bob submitted a suggestion", "Tom submitted a suggestion", "Stephen submitted a suggestion", "Lee submitted a suggestion,", "Issac submitted a suggestion"];

            let i = Math.round(Math.random() * 4); 
            let suggestion_announce = m_list[i];
            const chatText = document.querySelector(".web_socket");
            chatText.innerHTML +=
            `<div class="event"><span class="player-event">${suggestion_announce}</span></div>`;
},5000);
    
