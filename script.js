document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const sensitivity1 = 0.09; // Adjust sensitivity here for circle

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (clientX - centerX) * sensitivity1;
        const deltaY = (clientY - centerY) * sensitivity1;
        circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const circle2 = document.querySelector('.circle2');
    const sensitivity2 = -0.02; // Adjust sensitivity here for circle2

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const rect = circle2.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (clientX - centerX) * sensitivity2;
        const deltaY = (clientY - centerY) * sensitivity2;
        circle2.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const circle2 = document.querySelector('.circle3');
    const sensitivity2 = -0.02; // Adjust sensitivity here for circle2

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const rect = circle2.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (clientX - centerX) * sensitivity2;
        const deltaY = (clientY - centerY) * sensitivity2;
        circle2.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});