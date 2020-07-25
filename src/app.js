var clicks = 0;

function clickCheck() {
    var clickBox = document.getElementById('clickBox')
    var clickCount = document.getElementById('cps')

    if (clicks === 0) {
        timer()
        clicks++
    document.getElementById('cps').innerHTML = 'Clicks - ' + clicks;
    } else {
        clicks++
    document.getElementById('cps').innerHTML = 'Clicks - ' + clicks;
    }

}

function timer() {
    setTimeout(function() {
        alert('Your CPS Was: ' + clicks / 10)
        clicks = 0;
        document.getElementById('cps').innerHTML = 'Clicks - ' + clicks;
    }, 10000)
    
}