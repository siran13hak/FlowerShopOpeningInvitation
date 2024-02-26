const letter = document.querySelector('.letter')
const invitationBtn = document.getElementById('invitation-button');
const message = document.querySelector('.message')
const imgBackground = document.querySelector('.image-background')
const closeBtn = document.querySelector('.close-btn');
const invitationText = document.querySelector('.invitation-text')
letter.addEventListener('click', () => {
  console.log('clicked')
message.style.display = 'block';
letter.style.display = 'none';
invitationText.style.display = 'none'
})

closeBtn.addEventListener('click',() => {
  message.style.display = 'none';
  letter.style.display = 'block';
  invitationText.style.display = 'block'
})
