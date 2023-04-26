package src.clase;
import java.util.Scanner;
public class Clase3 {
    public static void main(String[] args) {
        System.out.println("Ingresa un numero");
        Scanner obj = new Scanner(System.in);
        int x = obj.nextInt();
        if (0 == x % 2){
            System.out.println("Es par");
        }else {
            System.out.println("Es impar");
        }
    }
}