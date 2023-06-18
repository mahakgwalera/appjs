var name="Hp"
var menu = ["home","register","project"]
var product=[
        {
            p_id:[1,2,3,4],
            P_name:["product1","mproduct2","product3","mproduct4","product5"],
            p_rate:[122,333,444,555,666]
        }
]

product.forEach(d=>{
    console.log(d);
    console.log(d.P_name);
    d.P_name.forEach((d1,index)=>{
                    //console.log(d1);
//                    if(d1=="mproduct2"){
                       // console.log(d1.length);
                        for(i=0;i<d1.length;i++){
                         //   console.log(d1.charAt(i));
                            if("m"==d1.charAt(i)){
                                console.log(d1);
  //                          }
                        }
                       // console.log(d.p_rate[index]);
                    }
    }
)
})
var info=[
    {
    name:"Hp",
    menu :["home","register","project"],
    product:[
        {
            p_id:[1,2,3,4],
            P_name:["product1","product2","product3","product4","product5"],
            p_rate:[122,333,444,555,666]
        }
    ]
  }
]