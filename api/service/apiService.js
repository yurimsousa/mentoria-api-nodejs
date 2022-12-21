class ApiService{

    calcularMedia(num1,num2,num3,num4,num5){
       const soma = Number(num1+num2+num3+num4+num5);
       const media = soma/5;
       return media;
    }
}
module.exports=ApiService;