var Cloud = require('ti.cloud');
Cloud.debug = true;

var win1 = Ti.UI.createWindow({
        backgroundColor: 'white'
});

var view1 = Ti.UI.createView();

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
button2.addEventListener('click',function(e){
Cloud.Objects.query({
    classname: 'checkin',
    page: 1,
    per_page: 10,
    where: {
        id: id.value
    }
      }, function(e) {
    if (e.success) {
              label.text = JSON.stringify(e.books);
    } else {
              alert('Error: ' +((e.error && e.message) || JSON.stringify(e)));        
    } 
  });
});

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

/// new 
var scroll = Titanium.UI.createScrollView({ 
        backgroundColor:'#fff',
        contentWidth:300, 
        contentHeight:"auto", 
        showVerticalScrollIndicator:true, 
        showHorizontalScrollIndicator:true,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#999',
        top:145, 
        left:10,
        right:10,
        bottom:10 
});
win2.add(scroll);

var label = Ti.UI.createLabel({
    backgroundColor:'#fff',
    left:5,
    top:5,
    right:5,
    font:{fontSize:15},
    color:'#000'
});
scrollView.add(label);


///



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










