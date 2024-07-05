export function isHave(contents, id) {
    let haveIn = false;
    contents.forEach((content) => {
        if (content._id === id) {
            haveIn = true;
        }
    });
    return haveIn;
}