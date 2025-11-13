package binarysearch;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class BinarySearch {
    //function to perform binary search
    public static int binarySearch  (int[] arr, int target) {
      int left =0;
      int right = arr.length -1;
      while(left <= right){
          int mid = left +(right -left)/2;
          if(arr[mid] == target){
          return mid;
          }else if(arr[mid] < target){
          left = mid+1;
          }else{
          right = mid-1;
          }
      }
        
        return -1;
    }
    public static void main(String[] args) {
        Random random = new Random();
        int[] numbers = new int[100];
        //generate 100 random numbers between 1 and 500
        for(int i=0; i<numbers.length; i++){
         numbers[i] =random.nextInt(500) +1;
        }
        //sort the array because its required for binary searching
        
        Arrays.sort(numbers);
        System.out.println("Sorted Array:" +Arrays.toString(numbers));
        
        System.out.println("\nEneter the number to search:");
        Scanner sc = new Scanner(System.in);
        int target = sc.nextInt();
        
        int index = binarySearch(numbers,target);
        
        //display result
        if(index != -1){
            System.out.println("Element " + target + "Found at index:" +index);
        }else{
          System.out.println("Element " + target + "not found in the array.");  
        }
        sc.close();
    }
    
}
