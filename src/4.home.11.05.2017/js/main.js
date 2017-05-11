var number = 1;

for (var j = 1; j <= 100; j++) {

    if (j % 3 == 0) {
        number = number * j;
    }
}
alert(number)