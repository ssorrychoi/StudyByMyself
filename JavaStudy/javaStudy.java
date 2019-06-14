import java.util.*;
import java.lang.*;
public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        System.out.println(Calc(A,B));
    }
    public static int Calc(int A,int B){
        return A-B;
    }
}