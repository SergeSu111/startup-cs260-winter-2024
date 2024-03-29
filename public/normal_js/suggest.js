
setInterval(() => {
    
    m_list = ["Bob submitted a suggestion", "Tom submitted a suggestion", "Stephen submitted a suggestion", "Lee submitted a suggestion,", "Issac submitted a suggestion"];

            let i = Math.round(Math.random() * 4); 
            let suggestion_announce = m_list[i];
            const chatText = document.querySelector(".web_socket");
            chatText.innerHTML +=
            `<div class="event"><span class="player-event">${suggestion_announce}</span></div>`;
},5000);

let myForm = document.querySelector("form"); // grab the form 


myForm.addEventListener("submit", submit); // 每当提交form的submit 就调用submit函数 来给server 请求
async function submit(event)
{
    event.preventDefault();  //阻止提交默认表单

    // do a post fetch 
        const response = await fetch('/submit_form', {
            method: 'POST',
            body: new FormData(event.target) // formData is json object?
        });
        if (response.ok)
        {
            console.log("The form is submitted successfully."); 
            alert("The form is submitted successfully.");
        }
        else
        {
            console.error("The form is submitted failed: ", response.statusText);
            // response.statusText 返回状态码的描述 而response.status只返回状态码
        }
    }
    

    
