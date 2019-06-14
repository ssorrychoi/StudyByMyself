//190615.html의 Footer 부분
function takeValues(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    
    ps = new Person(name,email,comments);

    alert(returnValue());
    welcome();
}
let ps;

function Person(name_,email_,comments_){
    this.name = name_;
    this.email = email_;
    this.comments = comments_;
}

function returnValue(){
    return "["+ps.name+"] ["+ps.email+"] ["+ps.comments+"]" ;
}

function welcome(){
    document.getElementById("footer_sec").innerHTML="<h2>"+ps.name+"님 보이루!</h2>";
}

//power.html의 '조회'버튼 부분
function submit_btn_handler(){
    const val = document.getElementById("select_box").value;
    const car_number = document.getElementById("number").value;
    if(val=="조회타입"){
        alert("차량번호 혹은 차대번호를 선택해주세요.");
    }else{
        alert("["+val+"] "+car_number);
        document.getElementById("example").innerHTML="<table><th>제조사</th><th>현대</th>\
        <tr><td>자동차명</td><td>에쿠스</td></tr>\
        <tr><td>배기량</td><td>2,977CC</td></tr>\
        <tr><td>사용연료</td><td>가솔린</td></tr>\
        <tr><td>연식</td><td>2004</td></tr>\
        <tr><td>차체형상</td><td>4도어 세단</td></tr>\
        <tr><td>용도 및 차종</td><td>자가용 승용</td></tr>\
        <tr><td>최초 보험 가입일자</td><td>2004년 1월 3일</td></tr\
        </table>";
    }
}

//Subscribe 부분
function subs(){
    const subs_email = document.getElementById("subs_email").value;
    const email = document.getElementById("email").value;
    if(subs_email==email){
        alert(email+"님 보이루!");
    }else{
        alert("이메일이 다릅니다.");
    }
}