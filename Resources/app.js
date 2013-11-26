var Cloud = require('ti.cloud');
Cloud.debug = true;

var win1 = Ti.UI.createWindow({
        backgroundColor: 'white'
});

var win3 = Ti.UI.createWindow({
        backgroundColor: 'white'
});

var tableView = Ti.UI.createTableView({
        backgroundColor:'#d0d0d0',
        data: data1
 });

var view1 = Ti.UI.createView();

var view3 = Ti.UI.createView();

var data1=[];


var view2 = Ti.UI.createView();

var usname = Ti.UI.createTextField({
        hintText: 'Username',
        borderColor:'657738',
        height: 70,
        top : 180,
		width: 250,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
});

var pwd = Ti.UI.createTextField({
        hintText: 'Password',
        borderColor:'657738',
        height: 70,
        top : 270,
        width: 250
});

var win2 = Ti.UI.createWindow({
      backgroundColor: 'white'
});

var button1 = Ti.UI.createButton({
        title: 'Login',
        top: 350,
        width: 250,
        height: 70
});

button1.addEventListener('click',function(e){
Cloud.Users.login({
    login: usname.value,
    password: pwd.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Login Successfully!');
        win2.open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});

// new


//
var id = Ti.UI.createTextField({
        hintText: 'Enter ID here',
        borderColor:'657738',
        height: 70,
        top : 300,
        width: 250
});

var caseid = Ti.UI.createTextField({
        hintText: 'Enter Case ID',
        borderColor:'657738',
        height: 70,
        top : 100,
        width: 250
});

var button2 = Ti.UI.createButton({
        title: 'Lookup Mentor',
        top: 200,
        width: 250,
        height: 70
});

var button3 = Ti.UI.createButton({
        title: 'Lookup Case ID',
        top: 400,
        width: 250,
        height: 70
});


button2.addEventListener('click',function(e){
Cloud.Objects.query({
    classname: 'Checkin',
    page: 1,
    per_page: 10,
    where: {
        ID: id.value
    }
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.Checkin.length);
        for (var i = 0; i < e.Checkin.length; i++) {
            var Checkin = e.Checkin[i];
            tbldata.push({title: e.Checkin[i].ID});
        }
        
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
    
tbldata.sort(sortByTitle);
table.data=tbldata;
});
});
///

var table = Titanium.UI.createTableView({
});


win3.add(table);

view2.add(id);

view2.add(caseid);

view1.add(button1);

view2.add(button2);

view2.add(button3);

view1.add(usname);

view1.add(pwd);

win1.add(view1);

win2.add(view2);

win1.open();










