fetch("https://fakestoreapi.com/products").then(function (data) {
    return data.json();
}).then(function (objectdata) {
    console.log(objectdata[0].title);
    var tableData = "";
    objectdata.map(function (values) {
        tableData += "<tr>\n        <td>".concat(values.title, "</td>\n        <td>").concat(values.description, "</td>\n        <td>").concat(values.price, "</td>\n        \n      </tr>");
    });
    var body = document.getElementById("table_body");
    body.innerHTML = tableData;
}).catch(function (err) {
    console.log(err);
});
