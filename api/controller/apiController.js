const ApiService = require("./../service/apiService");
const apiService = new ApiService();
class ApiController{

    calcularMedia(num1,num2,num3,num4,num5){
       return apiService.calcularMedia(num1,num2,num3,num4,num5);
    }

    calcularMediaAluno(num1,num2,num3,num4,num5){
        return apiService.calcularMediaAluno(num1,num2,num3,num4,num5);
     }
     
    verificarNome(nome){
        return apiService.verificarNome(nome);
     }
}
module.exports=ApiController;