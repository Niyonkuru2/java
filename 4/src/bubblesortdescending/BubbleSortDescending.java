package bubblesortdescending;
import java.util.Scanner;

public class BubbleSortDescending {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[30];

        System.out.println("Enter 30 integer elements:");

        // Input 30 elements
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            numbers[i] = sc.nextInt();
        }

        // Bubble sort in descending order
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - 1 - i; j++) {
                if (numbers[j] < numbers[j + 1]) { 
                    // Swap numbers[j] and numbers[j+1]
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        // Display sorted array
        System.out.println("\nArray sorted in descending order:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        sc.close();
    }
}
