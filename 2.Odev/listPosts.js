let posts = [{ id: 1, name: "Mecnun Ç.", task: "post1" }, { id: 2, name: "İsmail A.", task: "post2" }];

const listPosts = () => {
    posts.map((item) => {
        console.log(item);
    })
};

const addPost = (addPost)=> {
    const promise = new Promise((resolve, reject) => {
        posts.push(addPost);
        resolve(posts);
        reject("an error has occured")
    });
    return promise;
};

listPosts();

const showPosts=async ()=>{
    try {
        await addPost({id:3,name:"Yavuz H.",task:"post3"});
        console.log("Update Post List")
        listPosts();
    } catch (error) {
        console.log(error)
    }
}

showPosts();