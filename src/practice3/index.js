export const getPoetry = function () {
    
    const promise = new Promise((resolve, reject) => {
        fetch(
            "https://v1.jinrishici.com/all.json", {
            method: "GET",
            headers: {
                accept: "text/html",
            },
        }
        ).then((result) => {
            return result.json();
        })
        .then((pom) => {
                const poem = [];
                poem.push(pom.origin);
                poem.push(pom.author);
                poem.push(pom.content);
                resolve(poem)
            })
        .catch((err) => reject(err));
    });
    return promise;
}