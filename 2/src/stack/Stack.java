
package stack;
public class Stack {
     private int[] stackArray;
     private int top;
     private int maxSize;
    //constructor to set the maximum size of the stack
     public Stack(int size){
     maxSize = size;
     stackArray = new int[maxSize];
     top=-1;//Stack is empty
     }
     
      //Push operation -  to add element to the top
     public void Push(int value){
     if (isFull()){
       System.out.println("We can not push because stack is full" +value);
     }else{
      stackArray[++top] = value;
      System.out.println(value+ "Pushed to the stack");
      }
     }
     //Push operation -  remove and return  top element
     public int pop(){
     
         if (isEmpty()){
       System.out.println("We can not pop because stack is empty");
        return -1;
     }else{
      int poppedValue = stackArray[top--];
      System.out.println(poppedValue+ "Popped from the stack");
      
      return poppedValue;
      }
   }
     
//Push operation return top element without removing it
     public int peek(){
     
         if (isEmpty()){
       System.out.println("We can not peek because stack is empty");
        return -1;
     }else{
      System.out.println(stackArray[top]+ "Is Top from the stack");
      
      return stackArray[top];
      }
     
     }
     
     //Check if stack is empty
     public boolean isEmpty(){
     
         return  top == -1;
     
     }
     //Check if stack is full
     public boolean isFull(){
     
         return top == maxSize -1;
     
     }
     //prints all the elements of the stack from top to bottom.
     public void display(){
       if (isEmpty()){
       System.out.println("Stack is empty");
     }else{
      System.out.println("Stack Element is(top to bottom):");
      for (int i = top; i>=0; i--){
       System.out.println(stackArray[i]);
      }
      }
     }
    
    public static void main(String[] args) {
        Stack stack = new Stack(5);
        
        stack.Push(0);
        stack.pop();
    }
    
}
