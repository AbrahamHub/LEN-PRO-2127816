import javax.swing.JOptionPane;

public class ConversionTemperatura {
    public static void main(String[] args) {
        String[] opciones = { "De °C a °F", "De °F a °C" };

        int opcionSeleccionada = JOptionPane.showOptionDialog(null, "Seleccione una conversión:", "Conversión de Temperatura", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, null, opciones, opciones[0]);

        switch (opcionSeleccionada) {
            case 0:
                String entradaCelsius = JOptionPane.showInputDialog("Ingrese la temperatura en grados Celsius:");
                double celsius = Double.parseDouble(entradaCelsius);
                double fahrenheit = (celsius * 9 / 5) + 32;
                JOptionPane.showMessageDialog(null, celsius + " °C equivale a " + fahrenheit + " °F.");
                break;
            case 1:
                String entradaFahrenheit = JOptionPane.showInputDialog("Ingrese la temperatura en grados Fahrenheit:");
                double fahrenheit2 = Double.parseDouble(entradaFahrenheit);
                double celsius2 = (fahrenheit2 - 32) * 5 / 9;
                JOptionPane.showMessageDialog(null, fahrenheit2 + " °F equivale a " + celsius2 + " °C.");
                break;
            default:
                JOptionPane.showMessageDialog(null, "Opción inválida. Saliendo del programa.");
                break;
        }
    }
}
