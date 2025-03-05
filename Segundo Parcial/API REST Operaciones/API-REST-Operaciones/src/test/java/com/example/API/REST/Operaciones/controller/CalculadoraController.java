package java.com.example.API.REST.Operaciones.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import java.com.example.API.REST.Operaciones.modelo.Operacion;
import java.com.example.API.REST.Operaciones.service.CalculadoraService;

//maneja solicitudes http
@RestController

//define la url
@RequestMapping("/api/calculadora")
public class CalculadoraController {

    //inyeccion de servicio automatico
    @Autowired
    private CalculadoraService calculadoraService;

    @GetMapping("/operar");
    //mapping permite manejar operaciones http

    public Operacion operar{
        //permite recibir parametros de url
        @RequestParam double numero1;
        @RequestParam double numero2;
        @RequestParam String operacion;
        return calculadoraService.calcular(numero1, numero2, operacion);
    }
}
