package java.com.example.API.REST.Operaciones.service;
//import org.springframework.stereotype.Service;
import java.com.example.API.REST.Operaciones.modelo.Operacion;
import java.util.Locale;


//@Service
public class CalculadoraService {
    public Operacion calcular(double numero1, double numero2, String operacion) {
        double resultado = 0;

        switch (operacion.toLowerCase()) {
            case "sumar":
                resultado = numero1 + numero2;
            break;

            case "resta":
                    resultado = numero1 - numero2;
            break;

            case "multiplicar":
                resultado = numero1 * numero2;
            break;

            case "dividir":
                if(numero2 != 0){
                    resultado = numero1 / numero2;
                } else{
                    throw new ArithmeticException("No se puede dividir por cero");
                }
            break;

            default:
                throw new IllegalArgumentException("operacion no valida");
        }

        return new Operacion(numero1, numero2, operacion, resultado);
    }
}
