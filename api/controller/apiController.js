const ApiService = require("./../service/apiService");
const apiService = new ApiService();
class ApiController{

    calcularMedia(num1,num2,num3,num4,num5){
       return apiService.calcularMedia(num1,num2,num3,num4,num5);
    }
}
module.exports=ApiController;