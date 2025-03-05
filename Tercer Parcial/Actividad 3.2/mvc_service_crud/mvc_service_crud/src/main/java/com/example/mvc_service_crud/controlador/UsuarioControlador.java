package com.example.mvc_service_crud.controlador;

import com.example.mvc_service_crud.service.UsuarioService;
import com.example.mvc_service_crud.modelo.UsuarioModelo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/usuarios")
public class UsuarioControlador {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioControlador(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public String mostrarUsuarios(Model model) {
        model.addAttribute("usuarios", usuarioService.obtenerUsuarios());
        return "usuarios";
    }

    @GetMapping("/nuevo")
    public String formularioNuevoUsuario() {
        return "nuevo_usuario";  // Redirige a la vista de agregar usuario
    }

    @PostMapping("/agregar")
    public String agregarUsuario(@RequestParam String nombre, @RequestParam int edad) {
        usuarioService.agregarUsuario(new UsuarioModelo(nombre, edad));
        return "redirect:/usuarios";
    }

    @GetMapping("/editar")
    public String formularioEditarUsuario(@RequestParam int indice, Model model) {
        UsuarioModelo usuario = usuarioService.obtenerUsuarios().get(indice);
        model.addAttribute("usuario", usuario);
        model.addAttribute("indice", indice);
        return "editar_usuario";  // Redirige a la vista de edición
    }

    @PostMapping("/actualizar")
    public String actualizarUsuario(@RequestParam int indice, @RequestParam String nombre, @RequestParam int edad) {
        usuarioService.actualizarUsuario(indice, new UsuarioModelo(nombre, edad));
        return "redirect:/usuarios";
    }

    @PostMapping("/eliminar")
    public String eliminarUsuario(@RequestParam int indice) {
        usuarioService.eliminarUsuario(indice);
        return "redirect:/usuarios";
    }
}
