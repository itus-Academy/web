
function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = `
        <table class="table">
        <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">phone No</th>
                        <th scope="col">Email</th>
                        
                    </tr>
                </thead>
                <tbody>
        `
        const myContents =  document.getElementById("myContents");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `

                
               
                    <tr>
                        <td style="">${guide.yourName}</td>
                        <td>${guide.yourEmail}</td>
                        <td>${guide.yourPhone}</td>
                        
                    </tr>    
    
        `;
        html += content
        console.log(doc.id);
       
        // console.log(li)
    });

    html+= ` </tbody> 
                <table>
    `
  
   myContents.innerHTML = html;

});
}


window.onload = function(){
    generalOutput('HomeTutoring', 1000);
   
    // getSingleBlogPage();
    // this.alert('na we dey here');
}
