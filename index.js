function result() {
    let m = document.getElementById("money").value;
    let y = document.getElementById("year").value;
    let result = m + m * y * 0.08;
    document.getElementById("output").innerHTML=result;
}
