import java.util.Scanner;

public class MultiplicacionDeMatrices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de filas de la primera matriz: ");
        int filas1 = scanner.nextInt();

        System.out.print("Ingrese el número de columnas de la primera matriz: ");
        int columnas1 = scanner.nextInt();

        System.out.print("Ingrese el número de filas de la segunda matriz: ");
        int filas2 = scanner.nextInt();

        System.out.print("Ingrese el número de columnas de la segunda matriz: ");
        int columnas2 = scanner.nextInt();

        if (columnas1 != filas2) {
            System.out.println("Las matrices no son compatibles para la multiplicación.");
            scanner.close();
            return;
        }

        int[][] matriz1 = new int[filas1][columnas1];
        int[][] matriz2 = new int[filas2][columnas2];

        System.out.println("Ingrese los elementos de la primera matriz:");
        ingresarElementosMatriz(matriz1, scanner);

        System.out.println("Ingrese los elementos de la segunda matriz:");
        ingresarElementosMatriz(matriz2, scanner);

        scanner.close();

        int[][] matrizProducto = multiplicarMatrices(matriz1, matriz2);

        System.out.println("El producto de las matrices es:");
        imprimirMatriz(matrizProducto);
    }

    public static void ingresarElementosMatriz(int[][] matriz, Scanner scanner) {
        int filas = matriz.length;
        int columnas = matriz[0].length;

        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                System.out.print("Elemento [" + i + "][" + j + "]: ");
                matriz[i][j] = scanner.nextInt();
            }
        }
    }

    public static int[][] multiplicarMatrices(int[][] matriz1, int[][] matriz2) {
        int filas1 = matriz1.length;
        int columnas1 = matriz1[0].length;
        int filas2 = matriz2.length;
        int columnas2 = matriz2[0].length;

        int[][] matrizProducto = new int[filas1][columnas2];

        for (int i = 0; i < filas1; i++) {
            for (int j = 0; j < columnas2; j++) {
                for (int k = 0; k < columnas1; k++) {
                    matrizProducto[i][j] += matriz1[i][k] * matriz2[k][j];
                }
            }
        }

        return matrizProducto;
    }

    public static void imprimirMatriz(int[][] matriz) {
        int filas = matriz.length;
        int columnas = matriz[0].length;

        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}