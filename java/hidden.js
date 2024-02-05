function toggleClass(classs){
    const element = document.querySelector(`.${classs}`);
    const isHidden = element.className.includes("hidden");
    element.className = isHidden ? element.className.replace("hidden", ""): `${element.className} hidden`
}