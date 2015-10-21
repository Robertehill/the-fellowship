    var b1 = document.getElementById('b1')
    var b2 = document.getElementById('b2')
    var b3 = document.getElementById('b3')
    var b4 = document.getElementById('b4')
    var b5 = document.getElementById('b5')
    var b6 = document.getElementById('b6')
    var b7 = document.getElementById('b7')
    var b8 = document.getElementById('b8')
    var b9 = document.getElementById('b9')
    var b10 = document.getElementById('b10')
    var q1 = document.getElementById('q1')
    var q2 = document.getElementById('q2')
    var q3 = document.getElementById('q3')
    var q4 = document.getElementById('q4')
    var q5 = document.getElementById('q5')
    var deathbtn1 = document.getElementById('deathbtn1')
    var deathbtn2 = document.getElementById('deathbtn2')
    var deathbtn3 = document.getElementById('deathbtn3')
    var deathbtn4 = document.getElementById('deathbtn4')
    var deathbtn5 = document.getElementById('deathbtn5')
    var reply = document.getElementById('reply')


    b1.addEventListener('click', function() {
    	q2.hidden = true;
    	deathbtn1.hidden = false;
    	b1.hidden = true;
    	b2.hidden = true;
    })
    b2.addEventListener('click', function() {
    	q2.hidden = false;
    	b3.hidden = false;
    	b4.hidden = false;
    })
    b3.addEventListener('click', function() {
    	q3.hidden = true;
    	deathbtn2.hidden = false;
    	b3.hidden = true;
    	b4.hidden = true;
    })
    b4.addEventListener('click', function() {
    	q3.hidden = false;
    	b5.hidden = false;
    	b6.hidden = false;
    })
    b5.addEventListener('click', function() {
    	q4.hidden = true;
    	deathbtn3.hidden = false;
    	b5.hidden = true;
    	b6.hidden = true;
    })
    b6.addEventListener('click', function() {
    	q4.hidden = false;	
    	b7.hidden = false;
    	b8.hidden = false;
    })
    b7.addEventListener('click', function() {
    	q5.hidden = true;
    	deathbtn4.hidden = false;
    	b7.hidden = true;
    	b8.hidden = true;
    })
    b8.addEventListener('click', function() {
    	q5.hidden = false;
    	b9.hidden = false
    	b10.hidden = false;
    })

    b9.addEventListener('click', function() {
    	q5.hidden = true;
    	deathbtn5.hidden = false;
    	b9.hidden = true;
    	b10.hidden = true;
    })
    b10.addEventListener('click', function() {
    	b9.hidden = false;
    	b10.hidden = false;
    	reply.hidden = false;
    })


