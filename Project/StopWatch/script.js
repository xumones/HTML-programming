var minute = 0;
var second = 0;
var millisecond = 0;
var startfunction;
function start()
{
    startfunction = setInterval(timer,16.9);
}
function timer()
{
    var zeromillisecond = '0';
    var zerosecond = '0';
    var zerominute = '0';
    millisecond = millisecond + 1;
    if(millisecond >= 60)
    {
        millisecond = millisecond - 60;
        second = second + 1;
    }
    if(second >= 60)
    {
        second = second - 60;
        minute = minute + 1;
    }
    if(millisecond > 9 )
    {
        var zeromillisecond = '';
    }
    if(second > 9)
    {
        var zerosecond = '';
    }
    if(minute > 9)
    {
        var zerominute = '';
    }
    document.getElementById('timer').innerHTML = zerominute + minute + ':' + zerosecond + second + ':' + zeromillisecond + millisecond;
}

function stop()
{
    clearInterval(startfunction);
}
function reset()
{
    minute = 0;
    second = 0;
    millisecond = -1;
    clearInterval(start());
    clearInterval();
}