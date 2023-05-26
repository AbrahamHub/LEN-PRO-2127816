let tareas =[`¿Qué es un paradigma?
Se denominan paradigmas de programación a las formas de clasificar los lenguajes de programación
en función de sus características. Los idiomas se pueden clasificar en múltiples paradigmas.

¿Cuáles son los Paradigmas de los Lenguajes de Programación?

-paradigma por procedimientos o paradigma imperativo.
-paradigma declarativo.
-paradigma funcional.
-paradigma orientado a objetos.`,
`-Clasificación de los Lenguajes Informáticos:

Lenguaje de programación de nivel bajo:
Dentro de los niveles de lenguajes de programación, los que se encuadran en este grupo se destinan 
directamente a las máquinas. Así, sería el “idioma” capaz de vincular hardware y software.

Ejemplos de lenguajes de programación de nivel bajo son el lenguaje ensamblador y el lenguaje máquina.

Lenguaje de nivel alto de programación:
Este tipo de lenguajes de programación son más sencillos de comprender por los humanos ya que se 
redactan en idiomas conocidos, ya sea español, inglés, francés, etc.

Ejemplos de lenguajes de programación de nivel alto son Java, C++, C#, Python, PHP, JavaScript,`,
`°Lenguaje de programación:

Un lenguaje de programación es un lenguaje de computadora que los programadores utilizan para 
comunicarse y para desarrollar programas de software, aplicaciones, páginas webs, scripts u otros 
conjuntos de instrucciones para que sean ejecutadas por los ordenadores.

°Clasificación de los lenguajes de alto nivel:

Lenguaje imperativo: el Cobol, Pascal, C y Ada.
Lenguaje declarativo: el Lisp y el Prolog.
Lenguaje de programación orientado a objetos: el Smalltalk y el C++.

°Ejemplos de lenguajes:
a) interpretados
- Python, Ruby, PHP, JavaScript, Perl.
b) compilados
- C, C++, C#, Java, Pascal, Ada, Fortran, COBOL, Delphi, Visual Basic.
c) orientados a objetos
- C++, Java, C#, Smalltalk, Eiffel, Ruby, Python, Perl, PHP, JavaScript, Objective-C, Swift.
d) funcionales
- Lisp, Scheme, ML, Haskell, Erlang, F#, Scala, Clojure, OCaml.`,
`Compilador:
Un compilador es un programa informático que traduce un programa escrito en un lenguaje 
de programación, definido «código fuente», a otro lenguaje de alto 
(COBOL, PASCAL, BASIC, C, etc.), medio o más bajo nivel (código intermedio o código máquina) 
como puede ser C/C++.

Origen:
El término «compilador» fue acuñado a principios de 1950 por Grace Murray Hopper. 
La traducción fue vista entonces como la «compilación» de una secuencia de rutinas seleccionadas. 
tipos:
°Compiladores cruzados: generan código para una plataforma distinta a aquella en la que están 
funcionando.
°Compiladores optimizadores: realizan cambios en el código para mejorar su eficiencia, 
pero manteniendo la funcionalidad del programa original.



Intérprete:
En ciencias de la computación, intérprete o interpretador es un programa informático capaz de 
analizar y ejecutar otros programas.

Origen:
Los intérpretes se utilizaron ya en 1952 para facilitar la programación dentro de las limitaciones 
de las computadoras en ese momento (por ejemplo, escasez de espacio de almacenamiento de programas 
o falta de soporte nativo para números de punto flotante).

tipos:
1.2.1. Interpretación Iterativa.
1.2.2. Interpretación Recursiva.
1.5.1. Intérpretes puros.
1.5.2.Intérpretes avanzados.
1.5.3. Intérpretes incrementales.
1.5.4. Evaluadores Parciales.
`,
`Prolog es un lenguaje de programación lógico que se basa en la lógica de predicados de primer orden. 
Aquí tienes algunos elementos clave del lenguaje:

Símbolos:
- Variables: Se representan con una letra mayúscula o una secuencia de caracteres alfanuméricos 
iniciada con un guion bajo (_).
- Constantes: Pueden ser números, átomos o cadenas de caracteres.
- Átomos: Secuencias de caracteres alfanuméricos o caracteres especiales, se escriben en minúscula.
- Predicados: Son declaraciones que afirman una relación entre diferentes términos. Se representan 
como una secuencia de átomos seguidos de paréntesis.
- Reglas: Se usan para definir relaciones lógicas. Tienen una cabeza (conclusión) y un cuerpo 
(condiciones). 
Se representan con el símbolo ":-".
- Consultas: Se utilizan para realizar preguntas a la base de conocimientos. Se escriben como 
predicados 
sin cuerpo y se consultan en la línea de comandos de Prolog.

Sintaxis básica:
- Los términos se construyen mediante combinaciones de símbolos y paréntesis.
- Los hechos y reglas se terminan con un punto (.) al final.
- Se utilizan mayúsculas para distinguir las variables de las constantes.

Esqueleto de los programas:
Un programa Prolog se compone de una base de conocimientos, que incluye hechos y reglas, 
y de consultas 
realizadas sobre esa base. La base de conocimientos es la representación del conocimiento 
lógico del dominio.

Aplicación recomendada:
Hay varias aplicaciones que puedes utilizar para editar y ejecutar programas Prolog. Algunas opciones 
populares son:
- SWI-Prolog: Es una implementación de Prolog de código abierto y multiplataforma. 
Proporciona un entorno 
de desarrollo integrado (IDE) que incluye un editor de texto, intérprete de Prolog y 
herramientas de depuración.
- GNU Prolog: Otra implementación de Prolog de código abierto disponible en varias plataformas. 
Ofrece un compilador de Prolog y un entorno de desarrollo sencillo.

Paradigma al que pertenece Prolog:
Prolog pertenece al paradigma de programación lógica. Se basa en la lógica formal y el razonamiento 
deductivo.

Ejemplo de código Prolog:
A continuación, te muestro un ejemplo simple que define una base de conocimientos con algunos hechos 
y una regla, y luego realiza una consulta:


% Hechos
padre(juan, pepe).
padre(juan, maria).
padre(pepe, ana).
padre(pepe, pedro).

% Regla
abuelo(Abuelo, Nieto) :-
    padre(Abuelo, Hijo),
    padre(Hijo, Nieto).

% Consulta
?- abuelo(juan, ana).`,
`Python es un lenguaje de programación que se destaca por su simplicidad y legibilidad. Aquí tienes 
información sobre los símbolos, sintaxis y esqueleto básico de un programa en Python, así como 
algunas aplicaciones populares para editar y ejecutar código Python:

Símbolos y sintaxis:
- Los comentarios en Python comienzan con el símbolo de numeral (#) y se utilizan para agregar 
notas explicativas al código.
- Los bloques de código se definen mediante la indentación, generalmente con espacios en blanco 
(4 espacios o una tabulación).

Esqueleto básico de un programa en Python:
python
# Comentario: Aquí se coloca una breve descripción del programa

# Importar módulos o bibliotecas necesarios (si los hay)

# Definir funciones y/o clases (si las hay)

# Código principal del programa
# Aquí se coloca la lógica principal del programa

# Ejecutar el código principal
# Esto suele hacerse llamando a una función principal o ejecutando instrucciones directamente


Aplicaciones para editar y ejecutar código Python:
Hay varias aplicaciones populares para editar y ejecutar código Python. 
Algunas opciones comunes incluyen:

1. Anaconda: Un paquete de distribución que incluye el entorno de desarrollo integrado (IDE) llamado 
"Anaconda Navigator", así como una serie de bibliotecas y herramientas útiles para el desarrollo en 
Python.

2. PyCharm: Un IDE desarrollado por JetBrains que proporciona una amplia gama de características 
y herramientas para el desarrollo de Python.

3. Visual Studio Code: Un editor de código liviano y altamente personalizable que admite la edición 
y ejecución de código Python a través de extensiones.

4. Jupyter Notebook/JupyterLab: Un entorno interactivo basado en web que permite combinar código, 
texto explicativo y visualizaciones en un solo documento. Es muy utilizado para análisis de datos 
y tareas de ciencia de datos.

Python pertenece al paradigma de programación multiparadigma, lo que significa que admite 
diferentes enfoques de programación, incluyendo programación imperativa, orientada a objetos 
y funcional. Aunque Python tiene características de varios paradigmas, se considera principalmente 
un lenguaje orientado a objetos.

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

numero = 5
resultado = factorial(numero)
print(f"El factorial de {numero} es: {resultado}")
`,
`Haskell es un lenguaje de programación funcional y pertenece al paradigma de programación funcional. 
A diferencia de los lenguajes de programación imperativos, en Haskell se enfatiza el cálculo de 
funciones y la evaluación de expresiones.

A continuación, te proporciono un ejemplo de código en Haskell que no sea un simple "Hola mundo". 
Este ejemplo calcula el factorial de un número utilizando recursividad:

-- Definición de la función factorial
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Ejemplo de uso: calculando el factorial de 5
main :: IO ()
main = do
  let resultado = factorial 5
  putStrLn ("El factorial de 5 es: " ++ show resultado)
Para editar y ejecutar programas en Haskell, puedes utilizar un entorno de desarrollo 
integrado (IDE) como:

1. **GHCi**: GHCi (Glasgow Haskell Compiler interactive environment) es una herramienta interactiva 
que permite editar y ejecutar código Haskell directamente en la línea de comandos. 
Puedes instalar GHCi como parte del paquete Haskell Platform.

2. **Haskell for Mac**: Es un entorno de desarrollo específico para Haskell en el sistema 
operativo macOS. Proporciona una interfaz gráfica de usuario y herramientas adicionales para 
facilitar el desarrollo en Haskell.

3. **Haskell IDE Engine (HIE)**: Es un servidor de lenguaje para Haskell que proporciona funciones 
de autocompletado, resaltado de sintaxis y otras características de IDE. Puede integrarse con 
varios editores de texto como Visual Studio Code, Atom y Emacs.`,
`Ruby es un lenguaje de programación dinámico y de propósito general que se enfoca en la 
simplicidad y la elegancia. Aquí tienes algunos aspectos clave sobre los símbolos, sintaxis, 
estructura básica de los programas y un ejemplo de código en Ruby:

Símbolos en Ruby:
Un símbolo en Ruby es un objeto inmutable que se utiliza comúnmente como identificador único. 
Se denotan con un dos puntos seguido del nombre, como ':nombre_simbolo'. 
Los símbolos son frecuentemente utilizados como claves en los hashes (tablas hash) debido a 
su eficiencia y unicidad.

Sintaxis de Ruby:
Ruby tiene una sintaxis limpia y concisa. No requiere de caracteres especiales para delimitar 
bloques de código; en cambio, utiliza la indentación y palabras clave para estructurar el código. 
Los bloques se definen con las palabras clave 'do' y 'end' o con llaves '{}'.

Estructura básica de un programa en Ruby:
Un programa básico en Ruby puede tener la siguiente estructura:

# Comentario de una línea

=begin
Comentario de varias líneas
Puedes escribir múltiples líneas de comentario aquí
=end

# Definición de una función
def mi_funcion(parametro1, parametro2)
  # Código de la función
end

# Llamada a la función
mi_funcion(valor1, valor2)

Aplicación para editar y ejecutar Ruby:
Para editar y ejecutar código Ruby, puedes utilizar varios entornos de desarrollo integrados 
(IDE) o editores de texto. Algunas opciones populares son:
- RubyMine (de JetBrains)
- Visual Studio Code (con la extensión "Ruby")
- Sublime Text (con el complemento "RubyTest")

Paradigma de programación de Ruby:
Ruby es conocido por ser un lenguaje multiparadigma, ya que permite abordar problemas utilizando 
diferentes enfoques. Principalmente, Ruby se considera un lenguaje orientado a objetos, donde 
todo es un objeto y se enfatiza la encapsulación y la reutilización del código. También se pueden 
utilizar conceptos de programación funcional en Ruby.

# Clase de ejemplo
class Persona
  attr_accessor :nombre, :edad

  def initialize(nombre, edad)
    @nombre = nombre
    @edad = edad
  end

  def saludar
    puts "Hola, soy #{@nombre} y tengo #{@edad} años."
  end
end

# Crear una instancia de la clase Persona
persona = Persona.new("Juan", 30)

# Llamar al método saludar
persona.saludar

`,
`import javax.swing.JOptionPane;

public class ConversionTemperatura {
    public static void main(String[] args) {
        String[] opciones = { "De °C a °F", "De °F a °C" };

        int opcionSeleccionada = JOptionPane.showOptionDialog(null, "Seleccione una conversión:", 
        "Conversión de Temperatura", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, 
        null, opciones, opciones[0]);

        switch (opcionSeleccionada) {
            case 0:
                String entradaCelsius = 
                JOptionPane.showInputDialog("Ingrese la temperatura en grados Celsius:");
                double celsius = Double.parseDouble(entradaCelsius);
                double fahrenheit = (celsius * 9 / 5) + 32;
                JOptionPane.showMessageDialog(null, celsius + " °C equivale a " + fahrenheit + 
                " °F.");
                break;
            case 1:
                String entradaFahrenheit = JOptionPane.showInputDialog("Ingrese la temperatura en 
                grados Fahrenheit:");
                double fahrenheit2 = Double.parseDouble(entradaFahrenheit);
                double celsius2 = (fahrenheit2 - 32) * 5 / 9;
                JOptionPane.showMessageDialog(null, fahrenheit2 + " °F equivale a " + celsius2 + 
                " °C.");
                break;
            default:
                JOptionPane.showMessageDialog(null, "Opción inválida. Saliendo del programa.");
                break;
        }
    }
}
`,
`import javax.swing.JOptionPane;

public class ConversionMoneda {
    public static void main(String[] args) {
        String[] opciones = { "Dólar", "Euro", "Yen (Japonés)", "Dólar de Hong Kong" };
        int opcionSeleccionada = JOptionPane.showOptionDialog(null, "Seleccione una moneda:", 
        "Conversión de Moneda", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, null, 
        opciones, opciones[0]);

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

        JOptionPane.showMessageDialog(null, pesos + " pesos equivale a " + conversion + " " + 
        moneda + ".");
    }
}
`,
`import java.util.Scanner;

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
`,
`import java.util.Scanner;

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

        System.out.println("\nEl número " + numero + " aparece " + contador 
        + " veces en el vector.");
    }
}
`,
`import java.util.Scanner;

public class BusquedaEnMatriz {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de filas de la matriz: ");
        int filas = scanner.nextInt();

        System.out.print("Ingrese el número de columnas de la matriz: ");
        int columnas = scanner.nextInt();

        int[][] matriz = new int[filas][columnas];

        System.out.println("Ingrese los elementos de la matriz:");
        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                System.out.print("Elemento [" + i + "][" + j + "]: ");
                matriz[i][j] = scanner.nextInt();
            }
        }

        System.out.print("Ingrese el número a buscar: ");
        int numero = scanner.nextInt();
        scanner.close();

        int contador = 0;

        System.out.println("Matriz:");
        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                System.out.print(matriz[i][j] + " ");

                if (matriz[i][j] == numero) {
                    contador++;
                }
            }
            System.out.println();
        }

        System.out.println("El número " + numero + " aparece " + contador + 
        " veces en la matriz.");
    }
}`,
`import java.util.Scanner;

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
`,
`import java.util.Scanner;

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
`];

function imprimirtareas() {
    const etiquet = document.getElementById("contenido");
    const tarea = document.getElementById("numtarea");
    let texttarea = tarea.textContent;
    var numtarea = texttarea.slice(7);
    etiquet.innerText = tareas[numtarea-1];
}
imprimirtareas();