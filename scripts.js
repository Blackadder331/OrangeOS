const images = [
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const output = document.getElementById('output');
const input = document.getElementById('input');

function updateCursorPosition() {
    const cursor = document.querySelector('.cursor');
    cursor.style.marginLeft = input.offsetWidth + 'px';
}

input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = input.textContent.trim();
        output.textContent += '> ' + command + '\n';

        switch (command) {
            case 'c:/run/image-gen':
                const imageIndex = Math.floor(Math.random() * images.length);
                const image = document.createElement('img');
                image.src = images[imageIndex];
                image.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; object-fit: cover; object-position: center;';
                document.body.appendChild(image);
                setTimeout(() => {
                    document.body.removeChild(image);
                }, 2000);
                break;
            case 'c:/log-in':
                output.textContent += 'User logged in\n';
                break;
            case 'c:/log-out':
                output.textContent += 'User logged out\n';
                break;
            default:
                output.textContent += 'Invalid command\n';
                break;
        }

        input.textContent = '';
        updateCursorPosition(); // Update the cursor position after clearing the input
    }
});

input.addEventListener('input', () => {
    updateCursorPosition();
});




// input.addEventListener('input', () => {
//     const cursor = document.querySelector('.cursor');
//     const inputWidth = input.offsetWidth;
//     cursor.style.left = inputWidth + 'px';
//   });
  
