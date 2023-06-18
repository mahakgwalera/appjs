id= 100

id=[100,200,300]

data= [
    {id:10},{id:20},{id:30}
]
data= [
    {id:[10,30]},{id:[20,400]},{id:[30,4898]}
]
data =["item1","item2","item2"]
data.map(d=>{
    console.log(d);
})

data1 = [
    {id:100}
]

 data1 = [
    {id:[100,1002,400]}
]
var product=[
    {
    id:1,
    name:"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, Length: 90 m",
   
    cate:"wire",
    salerate:1761,
    mrp:3790,
    NominalSize:["4 Sqmm","0.75 Sqmm","1 Sqmm","1.5 Sqmm"],
    color:["Red","Black","Blue","Green","Yellow"],
    "Buy More & Save More":[
        {"Qty 2 - 3":"₹2,074 /pc","Qty 4 - 5":"₹2,070 /pc","Qty 6 - 7":"₹2,066 /pc","Qty 8+":"₹2,062 /pc"}
    ],
    "About This Product":[
        {
        "Key Features":
            ["International Standard.","Sleek Design & Durable Wire.","High Insulation Resistance, Anti Termite & Anti Rodent."],
        "Product Specifications":[
            {
                Brand:"Kalinga Gold","Applications":"Home, Industrial & Office Use","Colour":"red","Conductor Material":"Copper"}]}],
        "Product Details":"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, is a fire retardant PVC insulated wire. This product is 90m long. The core material used in this wire is copper. This product has a capacity of pass up to 1100v of current. The current rating is 26 amp. The Kalinga Gold 4 Sq mm Red FR PVC Housing Wire conductor diameter is 0.3mm. With 1 cord this product is very useful. It has 56 conductors in this wire. The cross-section area of this wire is 4 sq mm. This product is available in a red color variant.","Return & Warranty Policy":["Upto 7 Days Returnable","Missing Product","Wrong Product","Damaged Product","Defective Product"],
       
    },
    {
        id:2,
        name:"2-Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, Length: 90 m",
       
        cate:"wire",
        salerate:1761,
        mrp:3790,
        NominalSize:["4 Sqmm","0.75 Sqmm","1 Sqmm","1.5 Sqmm"],
        color:["Red","Black","Blue","Green","Yellow"],
        "Buy More & Save More":[
            {"Qty 2 - 3":"₹2,074 /pc","Qty 4 - 5":"₹2,070 /pc","Qty 6 - 7":"₹2,066 /pc","Qty 8+":"₹2,062 /pc"}
        ],
        "About This Product":[
            {
            "Key Features":
                ["International Standard.","Sleek Design & Durable Wire.","High Insulation Resistance, Anti Termite & Anti Rodent."],
            "Product Specifications":[
                {
                    Brand:"Kalinga Gold","Applications":"Home, Industrial & Office Use","Colour":"red","Conductor Material":"Copper"}]}],
            "Product Details":"Kalinga Gold 4 Sq mm Red FR PVC Housing Wire, is a fire retardant PVC insulated wire. This product is 90m long. The core material used in this wire is copper. This product has a capacity of pass up to 1100v of current. The current rating is 26 amp. The Kalinga Gold 4 Sq mm Red FR PVC Housing Wire conductor diameter is 0.3mm. With 1 cord this product is very useful. It has 56 conductors in this wire. The cross-section area of this wire is 4 sq mm. This product is available in a red color variant.","Return & Warranty Policy":["Upto 7 Days Returnable","Missing Product","Wrong Product","Damaged Product","Defective Product"],
        },
          
        ]

function showProduct(){
        console.log("******** product show *******");
        product.map(d=>{
            console.log(d.name);
            console.log(d.color[0]);
        })
}

function addTocart(){
    console.log("******** Add to cart *******");

}

ch =1
if(ch==1){
    showProduct()
}
else if(ch==2){
    addTocart()
}
