# Stack

- 후입 선출 방식으로 LIFO(Last In First Out)이라고 한다. 

- Stack은 java.util.Stack을 import 해주면 바로 사용할 수 있다.

- 초기화 하는 방법

  ```java
  Stack stk = new Stack();
  ```

- Stack의 입력(push), 출력(pop)

  ```java
  stk.push(1);
  stk.push(2);
  stk.push(3);
  stk.pop(); // 3이 출력됨.
  stk.pop(); // 2가 출력됨.
  stk.pop(); // 1이 출력됨.
  //이대로 돌리면 출력은 되지 않는다.
  //출력해보려면 System.out.println(stk.pop()); 으로 해야한다.
  ```

- Stack의 method

  ```java
  stk.peek(); //Stack의 가장 위에 있는 항목을 반환한다.
  stk.isEmpty(); //스택이 비어있을 때 True를 반환
  ```

- 예제

  ```java
  class Ideone
  {
    public static void main (String[] args) throws java.lang.Exception
    {
      // your code goes here
      Stack stk = new Stack();
      stk.push(1);
      stk.push(2);
      stk.push(3);
      System.out.println(stk.size());
      System.out.println(stk.peek());
      System.out.println(stk.pop());
      System.out.println(stk.size());
      System.out.println(stk.peek());
    }
  }
  ```

- 백준 예제

  https://www.acmicpc.net/problem/10828



# Queue

- 큐는 스택과 달리 FIFO( First In First Out )이다. 

- 입력된 데이터가 먼저 출력된다.

- 초기화 하는 방법

  ```java
  Queue<Integer> que1 = new LinkedList<Integer>();
  Queue<String> que2 = new LinkedList<String>();
  Queue que3 = new LinkedList();
  ```

- 입력 PUT, 출력 GET

  ```java
  //Java에서는 입력은 add, 출력은 poll 함수를 사용한다.
  que1.add(43);
  que1.poll();
  ```

- Queue의 method

  ```java
  que1.isEmpty();		//Queue가 비어있을 경우 True 반환
  que3.offer("90");	//삽입
  que1.peek();			//가장 위에있는 함수 반환
  ```

  

- 예제

  ```java
  class Ideone
  {
    public static void main (String[] args) throws java.lang.Exception
    {
      // your code goes here
      Scanner sc = new Scanner(System.in);
      Queue<Integer> que1 = new LinkedList<Integer>();
      Queue<String> que2 = new LinkedList<String>();
  
      que1.add(10);
      que1.add(20);
      que1.add(30);
      System.out.println(que1.poll());
      System.out.println(que1.poll());
      System.out.println(que1.poll());
      que2.add("SSORRY");
      que2.add("CHOI");
      System.out.println(que2.poll());
      System.out.println(que2.poll());
    }
  }
  ```

- 백준예제

  https://www.acmicpc.net/problem/10845

