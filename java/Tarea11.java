import java.util.Scanner;

public class SeriePotencias {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese la cantidad de términos de la serie: ");
        int n = scanner.nextInt();
        scanner.close();

        for (int i = 1; i <= n; i++) {
            long termino = (long) Math.pow(i, 2 * i - 1);
            System.out.print(termino);

            if (i != n) {
                System.out.print(", ");
            }
        }

        System.out.println();
    }
}
