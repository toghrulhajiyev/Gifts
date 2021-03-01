const giftBtn = document.querySelectorAll(".gift-btn");

// Clicks Count
let count = 0;

// Event
giftBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            if(count < 2) {
                count++;
                item.nextElementSibling.style.filter = "blur(0)";
                item.classList.remove('d-block');
                item.classList.add('d-none');
            } 
            else {
                document.querySelector('.container').innerHTML += `
                <small class="text-danger">You can only choose 2 gifts</small>`;
            }
    });
    
});