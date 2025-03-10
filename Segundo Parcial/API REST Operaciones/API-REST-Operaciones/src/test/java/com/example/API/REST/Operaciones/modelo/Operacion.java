package java.com.example.API.REST.Operaciones.modelo;

public class Operacion {
    private double numero1;
    private double numero2;
    private String operacion;
    private double resultado;

    public Operacion(){
    }

    public Operacion(double numero1, double numero2, String operacion, double resultado) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacion = operacion;
        this.resultado = resultado;
    }

    public double getNumero1() {
        return numero1;
    }

    public void setNumero1(double numero1) {
        this.numero1 = numero1;
    }

    public double getNumero2() {
        return numero2;
    }

    public void setNumero2(double numero2) {
        this.numero2 = numero2;
    }

    public String getOperacion() {
        return operacion;
    }

    public void setOperacion(String operacion) {
        this.operacion = operacion;
    }

    public double getResultado() {
        return resultado;
    }

    public void setResultado(double resultado) {
        this.resultado = resultado;
    }
}
