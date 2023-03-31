package src.clase;

import java.util.Scanner;

public class Clase4 {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        System.out.println("Dame un numero");
        float num = obj.nextFloat();

        if (num==0){
            System.out.println("El numero es cero");
        }else if (num>0){
            System.out.println("El numero es positivo");
        } else if (num<0) {
            System.out.println("El numero es negativo");
        }
    }
}
