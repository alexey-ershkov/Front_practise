const element = document.getElementsByClassName('frontend')[0];
element.addEventListener('mouseover', () => {
    element.style.opacity = '0';
    console.log('over');
})
element.addEventListener('mouseleave', () => {
    console.log('leave');
    element.style.opacity = '1';
})