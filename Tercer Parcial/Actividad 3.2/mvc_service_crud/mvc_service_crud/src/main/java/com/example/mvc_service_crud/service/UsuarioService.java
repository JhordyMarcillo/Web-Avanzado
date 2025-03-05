package com.example.mvc_service_crud.service;

import com.example.mvc_service_crud.modelo.UsuarioModelo;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {
    private final List<UsuarioModelo> usuarios = new ArrayList<>();

    public UsuarioService() {
        usuarios.add(new UsuarioModelo("Jeffrey Manobanda", 32));
        usuarios.add(new UsuarioModelo("Alexander Chabla", 34));
        usuarios.add(new UsuarioModelo("Jhordy Marcillo", 32));
    }

    public List<UsuarioModelo> obtenerUsuarios() {
        return usuarios;
    }

    public void agregarUsuario(UsuarioModelo usuario) {
        usuarios.add(usuario);
    }

    public void actualizarUsuario(int indice, UsuarioModelo usuario) {
        if (indice >= 0 && indice < usuarios.size()) {
            usuarios.set(indice, usuario);
        }
    }

    public void eliminarUsuario(int indice) {
        if (indice >= 0 && indice < usuarios.size()) {
            usuarios.remove(indice);
        }
    }
}
