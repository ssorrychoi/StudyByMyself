# CH.4 트리

### 용어

- Root Node - 트리의 최상위에 있는 노드

- Child Node - 노드 하위에 연결된 노드

- Parent Node - 노드의 상위에 연결된 노드

- Degree(차수) - 자식 노드의 수

- Leaf Node - 자식이 없는 노드

- Silbling Node - 동일한 부모를 가지는 노드

- Level - Root Node가 Level 1에 있고, 아래층으로 내려가면서 1씩 증가한다.

- Height - 트리의 최대 레벨

- Key - 탐색에 사용되는 노드에 저장된 정보

  

## 이진 트리

- 각 노드의 자식 수가 2이하인 트리

- 정의 : 이진 트리는 Empty이거나, Empty가 아니면, 루트노드와 2개의 이진트리인 왼쪽 서브트리와 오른쪽 서브트리로 구성된다.

- **포화 이진트리** : 모든 Leaf Node의 깊이가 같고 각 내부노드가 2개의 자식노드를 가지는 트리

- **완전이진트리** : 마지막 레벨을 제외한 각 레벨이 노드들로 꽉 차있고, 마지막 레벨에는 노드들이 왼쪽부터 빠짐없이 채워진 트리이다. 

  <img width="1180" alt="스크린샷 2019-07-30 오후 8 45 53" src="https://user-images.githubusercontent.com/43080040/62126962-de791480-b30b-11e9-9747-c9293d3a0d23.png">

## 이진트리의 연산

- 전위순회 ( Preorder Traversal )

  ```java
  public void preorder(Node n){
    if(n != null){
  		System.out.print(n.getKey()+" ");
      preorder(n.getLeft());
      preorder(n.getRight());
    }
  }
  ```

- 중위순회 ( Inorder Traversal )

  ```java
  public void inorder(Node n){
    if(n != null){
      inorder(n.getLeft());
      System.out.print(n.getKey()+" ");
      inorder(n.getRight());
    }
  }
  ```

- 후위순회 ( Postorder Traversal )

  ```java
  public void postorder(Node n){
  	if(n != null){
      postorder(n.getLeft());
      postorder(n.getRight());
      System.out.print(n.getKey()+" ");
    }
  }
  ```

- 레벨순회 ( Levelorder Traversal )

  