function Person(name,email,comments){
    this.name=name;
    this.email=email;
    this.comments=comments;
}

Person.prototype.returnValue=function(){
    return "["+this.name+"] ["+this.email+"] ["+this.comments+"]";
}

let ps;

$(document).ready(function(){

    //Footer부분
    $("#send_btn").click(function(){
        const name = $('#name').val();
        const email = $('#email').val();
        const comments = $('#comments').val();
        
        ps = new Person(name,email,comments);
        
        alert(ps.returnValue());
        $("#footer_sec").html("<h2>"+ps.name+"님 보이루!</h2>");
    });

    $("#subs").click(function(){
        const subs_email = $("#subs_email").val();
        if(subs_email==ps.email){
            alert(subs_email+" 이메일이 같습니다.");
            $("#subscribe").html("<h2 style='color:blue'>"+subs_email+"님 어서오십쇼</h2>");
            $("#subscribe").css("fontsize","20px");

        }else{
            alert("다시 입력해주세요~");
        }

    });

    //icon LOVE 모양 누르면 love.html이 열리도록.
    $("#love_icon").click(function(){
        window.open('love.html','_blank','width=500,height=800,left=200,top=100');
    });

    //love.html부분
    $("#submit_btn").click(function(){
        const select_box = $("#select_box");
        const table=$("#example_table");

        if(select_box.val()=="조회타입"){
            alert("차량번호 혹은 차대번호를 선택해주세요~");
        }else{
            alert("["+select_box.val() + "] "+$('#car_number').val());
            table.html("<table><th>제조사</th><th>현대</th>\
                <tr><td>자동차명</td><td>에쿠스</td></tr>\
                <tr><td>배기량</td><td>2,977CC</td></tr>\
                <tr><td>사용연료</td><td>가솔린</td></tr>\
                <tr><td>연식</td><td>2004</td></tr>\
                <tr><td>차체형상</td><td>4도어 세단</td></tr>\
                <tr><td>용도 및 차종</td><td>자가용 승용</td></tr>\
                <tr><td>최초 보험 가입일자</td><td>2004년 1월 3일</td></tr\
                </table>");
        }
    });
});