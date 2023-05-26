import javax.swing.JOptionPane;

public class ConversionMoneda {
    public static void main(String[] args) {
        String[] opciones = { "Dólar", "Euro", "Yen (Japonés)", "Dólar de Hong Kong" };
        int opcionSeleccionada = JOptionPane.showOptionDialog(null, "Seleccione una moneda:", "Conversión de Moneda", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, null, opciones, opciones[0]);

        double equivalencia = 0.0;
        String moneda = "";

        switch (opcionSeleccionada) {
            case 0:
                equivalencia = 0.00027;
                moneda = "Dólar";
                break;
            case 1:
                equivalencia = 0.00022;
                moneda = "Euro";
                break;
            case 2:
                equivalencia = 0.03;
                moneda = "Yen (Japonés)";
                break;
            case 3:
                equivalencia = 0.0021;
                moneda = "Dólar de Hong Kong";
                break;
            default:
                JOptionPane.showMessageDialog(null, "Opción inválida. Saliendo del programa.");
                System.exit(0);
        }

        String entradaPesos = JOptionPane.showInputDialog("Ingrese la cantidad de pesos:");
        double pesos = Double.parseDouble(entradaPesos);
        double conversion = pesos * equivalencia;

        JOptionPane.showMessageDialog(null, pesos + " pesos equivale a " + conversion + " " + moneda + ".");
    }
}
