  // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBBip_ZpVg9YziyBLivTMUrDni8DJl4Rfw",
        authDomain: "milestone-blog-project.firebaseapp.com",
        databaseURL: "https://milestone-blog-project-default-rtdb.firebaseio.com",
        projectId: "milestone-blog-project",
        storageBucket: "milestone-blog-project.appspot.com",
        messagingSenderId: "267761866449",
        appId: "1:267761866449:web:5dceb5f9a553bb875b57f0",
        measurementId: "G-WG053KJ6F7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    let formMessage = firebase.database().ref("BLOGS");
    formMessage.once('value', (snapshot) => {
        const data = snapshot.val();
        for(const key in data){
            var main  = document.getElementById("posts_mbsa")
            var element = document.createElement("div");
            var anchor = document.createElement("a");
            var head_1 = document.createElement("h2");
            var head_2 = document.createElement("h3");
            var para = document.createElement("p");
            element.classList.add("post-preview");
            para.classList.add("post-meta");
            head_1.classList.add("post-title");
            head_2.classList.add("post-subtitle");
            head_1.innerHTML=data[key].title
            head_2.innerHTML=data[key].subtitle
            para.innerHTML="Posted By MBSA"
            anchor.appendChild(head_1)
            anchor.appendChild(head_2)
            anchor.href="/post/"+data[key].slug
            element.appendChild(anchor)
            element.appendChild(para)
            main.appendChild(element)
            // console.log(data[key].title)
        }
    });