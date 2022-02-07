var dataObject=[];

document.getElementById("add-Product").onclick=function(){
  submitData();
}

function submitData(){
    var ProductId = document.getElementById("pid").value;
    var ProductName = document.getElementById("pname").value;
    var ProductPrice = document.getElementById("pprice").value;

    var data={
        "Id":    ProductId, 
        "Name":  ProductName,
        "Price": ProductPrice
    };

    dataObject.push(data);

    display(dataObject);
}

function display(data)
{   
    var tData=document.getElementById("f-head");
    tData.innerHTML=` <tr>
    <th>Product Id</th>
    <th>Product Name</th>
    <th>Product Price</th>
</tr>`; 
    
    for(i=0;i<data.length;i++)
    {
        tData.innerHTML+=`<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Price}</td>
        </tr>`;
    }
}

