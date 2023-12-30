export function isHave(contents, id) {
    let haveIn = false;
    contents.forEach((iphoneId) => {
        if (iphoneId._id === id) {
            haveIn = true;
        }
    });
    return haveIn;
}