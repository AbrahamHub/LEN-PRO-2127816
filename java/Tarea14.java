import java.util.Scanner;

public class SumaDeMatrices {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de filas de las matrices: ");
        int filas = scanner.nextInt();

        System.out.print("Ingrese el número de columnas de las matrices: ");
        int columnas = scanner.nextInt();

        int[][] matriz1 = new int[filas][columnas];
        int[][] matriz2 = new int[filas][columnas];

        System.out.println("Ingrese los elementos de la primera matriz:");
        ingresarElementosMatriz(matriz1, scanner);

        System.out.println("Ingrese los elementos de la segunda matriz:");
        ingresarElementosMatriz(matriz2, scanner);

        scanner.close();

        int[][] matrizSuma = sumarMatrices(matriz1, matriz2);

        if (matrizSuma != null) {
            System.out.println("La suma de las matrices es:");
            imprimirMatriz(matrizSuma);
        } else {
            System.out.println("Las matrices no son compatibles para la suma.");
        }
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

    public static int[][] sumarMatrices(int[][] matriz1, int[][] matriz2) {
        int filas1 = matriz1.length;
        int columnas1 = matriz1[0].length;
        int filas2 = matriz2.length;
        int columnas2 = matriz2[0].length;

        if (filas1 != filas2 || columnas1 != columnas2) {
            return null;
        }

        int[][] matrizSuma = new int[filas1][columnas1];

        for (int i = 0; i < filas1; i++) {
            for (int j = 0; j < columnas1; j++) {
                matrizSuma[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }

        return matrizSuma;
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
