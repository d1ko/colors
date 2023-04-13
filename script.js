// const COLORS = [
//     {
//         hex: '#00a8ff' ,
//         rgb:'rgb(0, 168, 255)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#9c88ff' ,
//         rgb:'rgb(156, 136, 255)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#fbc531' ,
//         rgb:'rgb(251, 197, 49)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#4cd137' ,
//         rgb:'rgb(76, 209, 55)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#487eb0' ,
//         rgb:'rgb(232, 65, 24)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#e84118' ,
//         rgb:'rgb(245, 246, 250)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#f5f6fa' ,
//         rgb:'rgb(127, 143, 166)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#7f8fa6' ,
//         rgb:'rgb(127, 143, 166)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#273c75' ,
//         rgb:'rgb(39, 60, 117)',
//         text: '#5a21cd',
//     },
//     {
//         hex: '#353b48' ,
//         rgb:'rgb(53, 59, 72)',
//         text: '#5a21cd',
//     },
// ];
// // const name_color = document.querySelector('.span');
// const container_click = document.querySelector('#container');
// // const container = document.querySelector('#container');

// //   const span = document.querySelectorAll('.span');
// //   const container = document.querySelector('#container');
// const buttonHEX = document.querySelector('hex');
// const buttonRGB = document.querySelector('rgb');
// //   const buttonColor = document.querySelector('[data-type="color"]');
// //   const buttons = document.querySelectorAll('[data-type]');
// //   const colorName = document.querySelector('h2');

// container_click.style.color = 'white';



// container_click.style.background = COLORS[0];
// name_color.innerHTML = COLORS[0];


// container_click.addEventListener('click', (event) => {
//     const random = (Math.floor(Math.random() * 20) + 1)-1;
//     if (random % 2 === 0) {
//         if (random === 6 || random === 12){
//             container_click.style.color = 'black';
//             container_click.style.background = COLORS[random];
//             name_color.innerHTML = COLORS[random];
//         }else{
//             container_click.style.color = 'white';
//             container_click.style.background = COLORS[random];
//             name_color.innerHTML = COLORS[random];
//         }
//     }else{
//         random--;
//         if (random === 6 || random === 12){
//             container_click.style.color = 'black';
//             container_click.style.background = COLORS[random];
//             name_color.innerHTML = COLORS[random];
//         }else{
//             container_click.style.color = 'white';
//             container_click.style.background = COLORS[random];
//             name_color.innerHTML = COLORS[random];
//         }
//     }
// });





const COLORS = [
    {
        hex: '#00a8ff' ,
        rgb:'rgb(0, 168, 255)',
        text: '#5a21cd',
    },
    {
        hex: '#9c88ff' ,
        rgb:'rgb(156, 136, 255)',
        text: '#5a21cd',
    },
    {
        hex: '#fbc531' ,
        rgb:'rgb(251, 197, 49)',
        text: '#5a21cd',
    },
    {
        hex: '#4cd137' ,
        rgb:'rgb(76, 209, 55)',
        text: '#5a21cd',
    },
    {
        hex: '#487eb0' ,
        rgb:'rgb(232, 65, 24)',
        text: '#5a21cd',
    },
    {
        hex: '#e84118' ,
        rgb:'rgb(245, 246, 250)',
        text: '#5a21cd',
    },
    {
        hex: '#f5f6fa' ,
        rgb:'rgb(127, 143, 166)',
        text: '#5a21cd',
    },
    {
        hex: '#7f8fa6' ,
        rgb:'rgb(127, 143, 166)',
        text: '#5a21cd',
    },
    {
        hex: '#273c75' ,
        rgb:'rgb(39, 60, 117)',
        text: '#5a21cd',
    },
    {
        hex: '#353b48' ,
        rgb:'rgb(53, 59, 72)',
        text: '#5a21cd',
    },
];
  
  const span = document.querySelectorAll('.span');
  const container = document.querySelector('#container');
  const buttonHEX = document.querySelector('[data-type="hex"]');
  const buttonRGB = document.querySelector('[data-type="rgb"]');
  const buttonColor = document.querySelector('[data-type="color"]');
  const buttonSave = document.querySelector('[data-type="save"]');
  const buttons = document.querySelectorAll('[data-type]');
  const colorName = document.querySelector('h2');
  
  let currentColorFormat = 'hex';
  let randomColor;
  
  const generateRandomColor = () => {
    randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    colorName.innerHTML = randomColor[currentColorFormat];
    colorName.style.color = randomColor.text;
    buttonHEX.style.color = randomColor.text;
    buttonRGB.style.color = randomColor.text;
    buttonColor.style.color = randomColor.text;
    buttonSave.style.color = randomColor.text;
    container.style.backgroundColor = randomColor[currentColorFormat];
  };
  
  colorName.addEventListener('click', () => {
    navigator.clipboard.writeText(randomColor[currentColorFormat]);
  });
  
  
  
  generateRandomColor(); 
  
  const copyToClipboard = () =>
  navigator.clipboard.writeText(randomColor[currentColorFormat]);
  
  const changeToHex = () => {
  currentColorFormat = 'hex';
  colorName.innerHTML = randomColor.hex;
  };
  
  const changeToRgb = () => {
  currentColorFormat = 'rgb';
  colorName.innerHTML = randomColor.rgb;
  };
  
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.type === 'hex') {
        changeToHex();
    } else if (button.dataset.type === 'rgb') {
        changeToRgb();
    } else if (button.dataset.type === 'color') {
        generateRandomColor();
    }
  });
  });
  buttonColor.addEventListener('mouseover', () => {
    buttonColor.style.backgroundColor = randomColor.text;
    buttonColor.style.color = randomColor[currentColorFormat];
    });
  
  buttonColor.addEventListener('mouseout', () => {
  buttonColor.style.backgroundColor = 'transparent';
  buttonColor.style.color = randomColor.text;
  });

  buttonSave.addEventListener('click', () => {
  let inp = document.createElement('input');
  inp.value = colorName.innerHTML;
  document.body.appendChild(inp);
  inp.select();
  
  if (document.execCommand('copy')) {
    alert( 'Done' );
  } else {
    alert('Failed');
  }
  document.body.removeChild(inp)
})