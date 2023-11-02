function task1()
{
    function isURL(str)
    {
    let re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите URL");
    if (isURL(str))
        alert("URL введен правильно");
    else
        alert("URL введен неправильно");
}
