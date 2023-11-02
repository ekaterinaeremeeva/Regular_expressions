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

function task2()
{
    function isName(str)
    {
    let re = /^[a-zA-Z$_]{1}[\w$]*/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите имя переменной");
    if (isName(str))
        alert("Имя переменной введено правильно");
    else
        alert("Имя переменной введено неправильно");
}

function task3()
{
    function isStr(str)
    {
    let re = /^[a-zA-Z0-9]+$/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите строку, состоящую только из букв и цифр");
    if (isStr(str))
        alert("Строка введена правильно");
    else
        alert("Строка введена неправильно");
}

