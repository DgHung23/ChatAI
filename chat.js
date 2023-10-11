const message_box = document.getElementById('message-box');
const sendButton = document.getElementById("send-btn");
// Hàm gửi tin nhắn



var callAPI = (text)=>{

    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"q":text});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        body: raw,
    };
    // make API call with parameters and use promises to get response
    fetch("http://127.0.0.1:8000/chat", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function sendMessage() {
    var message = message_box.value;
    callAPI(message);
    if (message !== "") {
        addMessage("Bạn", message);

        // Xử lý tin nhắn ở đây

        message_box.value = "";
    }
}

// Hàm xử lý phím nhấn
function handleKeyDown(event) {
    if (event.keyCode === 13 ) {
        // Phím Enter
        sendMessage();
    }
    sendButton.addEventListener("click", function() {
        sendMessage();
    });
}

// Hàm thêm tin nhắn vào khung chat
function addMessage(sender, message) {
    var chatbox = document.getElementById("chat-data");
    var newMessage = document.createElement("div");
    if (sender == "Bạn"){
        newMessage.style.textAlign = "right"; // Căn phải
        newMessage.style.marginLeft = "auto";
    } else{
        newMessage.style.textAlign = "left"; 
        newMessage.style.marginRight = "auto";

    }
    
    newMessage.style.color = "#2b80ff"; // Căn phải
    newMessage.style.maxWidth = "400px";
    newMessage.style.fontSize = "18px";
    newMessage.innerHTML = "<strong style=\" display :inline-block;padding-bottom: 10px; font-size: 25px; color: #DC143C\" >" + sender + ":</strong> "+ "<br>" + message;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
    console.log(newMessage);
}




// ---------------change thame--------------------------------
const checkbox = document.getElementById('toggle_checkbox');
const targetElement1 = document.getElementById('body');
const targetElement2 = document.getElementById('side-chat');
const targetElement3 = document.getElementById('main-chat');
const title = document.getElementById('title');
// Đặt sự kiện "change" cho checkbox
checkbox.addEventListener('change', function() {
    // Kiểm tra nếu checkbox được kiểm tra (checked)
    if (checkbox.checked) {
        // Đổi màu nền của element mục tiêu thành màu xanh
        title.style.color='#fff';
        targetElement1.style.backgroundColor = '#27292C';
        targetElement2.style.backgroundColor = '#202E3A';
        targetElement3.style.border = 'none';
        targetElement3.style.backgroundColor = '#36373C';
        message_box.style.backgroundColor = '#40414F';
    } else {
        // Đổi màu nền của element mục tiêu về mặc định nếu checkbox không được kiểm tra
        title.style.color='';
        targetElement1.style.backgroundColor = '';
        targetElement2.style.backgroundColor = '';
        targetElement3.style.border = '';
        targetElement3.style.backgroundColor = '';
        message_box.style.backgroundColor = '';
    }
});