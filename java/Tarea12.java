import java.util.Scanner;

public class BusquedaEnVector {
    public static void main(String[] args) {
        int[] vector = { 2, 5, 8, 3, 6, 9, 3, 1, 7, 3, 2, 4, 3, 6, 9, 3, 1, 7, 3};
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número a buscar: ");
        int numero = scanner.nextInt();
        scanner.close();

        int contador = 0;

        System.out.println("Vector:");
        for (int i = 0; i < vector.length; i++) {
            System.out.print(vector[i] + " ");

            if (vector[i] == numero) {
                contador++;
            }
        }

        System.out.println("\nEl número " + numero + " aparece " + contador + " veces en el vector.");
    }
}
