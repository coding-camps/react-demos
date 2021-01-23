export const updateMathjax = () => {
    console.log(window.MathJax);
    window.MathJax.texReset();
    window.MathJax.typesetClear();
    window.MathJax.typesetPromise();
};
