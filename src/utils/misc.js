

export function numberInThousands(number)
{
    // round to precision in integers, then divide further to
    // get the actual wanted magnitude (in thousands in this case)
    const renderedNum = number < 1000
        ? number.toString()
        : Math.round(number/100)/10 + "k";
    
    return renderedNum;
}