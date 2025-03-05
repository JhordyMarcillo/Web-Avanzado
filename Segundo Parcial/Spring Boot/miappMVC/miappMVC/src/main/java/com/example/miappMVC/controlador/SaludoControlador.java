package com.example.miappmvc.controlador;

import com.example.miappmvc.modelo
import org.springframework.stereotype.Controller;
import org.springframework.*


@Controller
public class SaludoControlador{
    @GetMapping("/saludo")
    public String saludo(Model){
        usuarioModelo UsuarioModelo = new usuarioModelo("Jhordy", 32);
        model.addAtribute("usuario", UsuarioModelo);
        return "saludo";
    }
}
