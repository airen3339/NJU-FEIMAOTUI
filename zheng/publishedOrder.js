function confirmBtn() {
    var result = confirm("确认要完成订单吗？");
    if (result == true) {
        alert("You choose YES! Great!");
        location.reload()
    } else {
        alert("What a bitch you are !");
    }
}
function cancelBtn() {
    var result = confirm("确认要取消订单吗？");
    if (result == true) {
        alert("You choose YES! Great!");
        location.reload()
    } else {
        alert("What a bitch you are !");
    }
}
function addComment(obj) {
    var html='<div class="form-group comment">\n' +
        '                <textarea class="form-control" rows="4" style="resize:none"></textarea>\n' +
        '                <button type="button" class="btn btn-success pushCommentBtn" style="float: right;"onclick="pushComment(this)">提交</button>\n' +
        '            </div>'
    obj.insertAdjacentHTML('afterEnd',html)
}
function pushComment(obj) {
    var ff=obj.parentNode.parentNode
    var ch=ff.getElementsByClassName("comment")
    ff.removeChild(ch[0])
    location.reload()
}
function displayDetails(obj) {
    var html='<div id="myAlert" class="alert alert-success">\n' +
        '    <a href="#" class="close" data-dismiss="alert">&times;</a>\n' +
        '    <strong>物品</strong><br>可口可乐x1 ￥3.00<br>黄金脆皮鸡x1 ￥996.00<br>'+
        '<strong>赏金</strong><br>￥0.99<br>'+
        '<strong>地址</strong><br>五栋5B666<br>'+
        '<strong>期望时间</strong><br>13:20<br>' +
        '<strong>留言</strong><br>阔落不冰怎么喝'
    '</div>'
    obj.insertAdjacentHTML('beforeBegin',html)
}