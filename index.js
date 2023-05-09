console.log("Hello World!");

// Bai 1

/*

    1 + 2 + 3 + ... + n > 10000

    step 1: sum = 0
    step 2: n = 1
    // Loop
    step 3: while sum < 10000
    step 4: sum = sum + n
    step 5: n = n + 1
    step 6: if sum > 10000
    step 7: break

    output: n


*/

function soNguyenDuongNhoNhat() {
    console.log("Bai 1");
    
    var sum = 0;
    var n = 1
    while (sum < 10000) {
        sum += n;
        if (sum > 10000) {
            // n--;
            break;
        }
        n++;
    }

    document.getElementById("bai1KQ").innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}


// Bai 2

/*
    S(n) = x + x^2 + x^3 + ... + x^n

    input: x, n

    step 1: sum = 0
    // Loop
    step 2: for i = 1 to n
    step 3: sum = sum + x^i

    output: sum
*/

function tinhSofN() {
    console.log("Bai 2");
    var x = document.getElementById("soX").value;
    var n = document.getElementById("soN").value;

    if (n <= 0){
        alert("Vui lòng nhập số nguyên dương lớn hơn 0");
        return;
    }

    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    document.getElementById("bai2KQ").innerHTML = "Kết quả là: " + sum;
}

// Bai 3

/*
    N! = 1 * 2 * 3 * ... * N
    0! = 1

    input: n

    step 1: giaiThua = 1

    // Loop
    step 2: for i = 1 to n
    step 3: giaiThua = giaiThua * i

    output: n!
*/

function tinhGiaiThua() {
    console.log("Bai 3");
    var n = document.getElementById("soN3").value;

    if (n <= 0){
        alert("Vui lòng nhập số nguyên dương lớn hơn 0");
        return;
    }

    var giaiThua = 1;

    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    document.getElementById("bai3KQ").innerHTML = "Kết quả là: " + giaiThua;
}

// Bai 4

/*


*/

function createRedBlueDiv() {
    console.log("Bai 4");

    for(var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = "Div: " + i;
        div.classList.add("py-2","my-2");

        if (i % 2 == 0) {
            div.style.backgroundColor = "red";
        } else {
            div.style.backgroundColor = "blue";
        }

        document.getElementById("bai4KQ").appendChild(div);
    }

}


// Bai 5

/*

    input: n

    step 1: check if n < 2
        if true: return false (n is not prime)
        else: step 2
    step 2: for i = 2 to sqrt(n)
    step 3: check if n % i == 0
        if true: return false (n is not prime)
        else: step 4
    step 4: return true (n is prime)   

    return: true/false;

*/

function isPrime(n){

    var isPrime = true;

    if (n < 2) {
        isPrime = false;
        return isPrime;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                return isPrime;
            }
        }
    }

    return isPrime;
}

/*

    input: n

    step 1: result = ""
    step 2: for i = 2 to n
    step 3: check if i is prime using the previous function
        if true: result = result + i + ", "
        else: continue through the loop
    step 4: return result

    return: result

*/

function printPrimes() {
    console.log("Bai 5");

    var n = document.getElementById("soN5").value;

    if (n <= 0){
        alert("Vui lòng nhập số nguyên dương lớn hơn 0");
        return;
    }

    var result = "";

    for (var i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result += i + " , ";
            // console.log(i);
        }
    }

    document.getElementById("bai5KQ").innerHTML = "Các số nguyên tố nhỏ hơn " + n + " là: " + result;
}
