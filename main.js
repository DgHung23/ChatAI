const message_box = document.getElementById('message-box');

// Hàm gửi tin nhắn
function sendMessage() {
    var messageInput = document.getElementById("message");
    var message = messageInput.value;

    if (message !== "") {
        addMessage("Bạn", message);

        // Xử lý tin nhắn ở đây

        messageInput.value = "";
    }
}

// Hàm xử lý phím nhấn
function handleKeyDown(event) {
    if (event.keyCode === 13) {
        // Phím Enter
        sendMessage();
    }
}

// Hàm thêm tin nhắn vào khung chat
function addMessage(sender, message) {
    var chatbox = document.getElementById("chatbox");
    var newMessage = document.createElement("p");
    newMessage.style.textAlign = "right"; // Căn phải
    newMessage.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
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