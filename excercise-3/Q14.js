f2 = f1 => {
    f1();
}

f1 = () => {
    console.log("Function through function");
}

f2(f1);