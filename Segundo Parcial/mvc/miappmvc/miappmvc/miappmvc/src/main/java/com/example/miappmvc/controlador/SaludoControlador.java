package com.example.miappmvc.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.miappmvc.modelo.UsuarioModelo;

@Controller

public class SaludoControlador{
    @GetMapping("/saludo")
    public String saludo(Model model){
        UsuarioModelo usuario = new UsuarioModelo("Carlos Rivera", 25);
        model.addAttribute("usuario", usuario);
        return "saludo";
    }
}