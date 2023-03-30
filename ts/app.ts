
fetch("https://fakestoreapi.com/products").then((data)=>{

    return data.json(); 
}).then((objectdata)=>{
     console.log(objectdata[0].title);
    var tableData="";
    type products= {
        id: number;
        title: string;
        description: string;
        price: number
    }

     objectdata.map((values:products)=>{
        tableData+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        
      </tr>`;
     });
     let body = document.getElementById(`table_body`)!;body.innerHTML = tableData;
}).catch((err)=>{
    console.log(err);
})