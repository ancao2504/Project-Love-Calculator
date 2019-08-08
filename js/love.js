function checkloveper() {
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
    if (name == "") {
        alert('Vui lòng nhập tên my boy !!!');
    } else if (name.length <= 1) {
        alert('Tên dài hơn 1 kí tự')
    } else if (!isNaN(name)) {
        alert('Không được nhập số nè');
    } else if (lname == "") {
        alert('Vui lòng nhập tên my girls !!!');
    } else if (lname.length <= 1) {
        alert('Tên dài hơn 2 kí tự')
    } else if (!isNaN(lname)) {
        alert('Không được nhập số nè');
    } else {
        var lovedata = Math.random() * 100;
        var text = '';
        lovedata = Math.floor(lovedata);
        if ( lovedata < 12 ) {
            text = 'Thương anh hơi ít nè';
        }
        if (lovedata <= 50) {
            text = 'Thương anh vừa vừa nè';
        }
        else {
            text = 'Thương anh nhiều nè';
        }
        document.getElementById('lovevalue').value = name +' dành cho '+ lname + ' - ' + lovedata + "%" + ' - ' + text;
    }
}
