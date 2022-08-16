var Links = {
    setColor:function(color){
    var a_tag = document.querySelectorAll('a');
    var i = 0;
    while (i < a_tag.length) {
        a_tag[i].style.color = color;
        i++;
    }
}
}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}


function nightDayChanger(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');

        Links.setColor('#C9201D');
        self.value = 'day';
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');

        Links.setColor('#23B8DC');
        self.value = 'night';
    }
}