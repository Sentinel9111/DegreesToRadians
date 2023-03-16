/*
Fijne π-dag 🙂
*/
const π = Math.PI
const radialenBerekenen = graden => {
    console.log(`\n${graden} graden is ${graden * (π / 180)} radialen, oftewel ${graden / 180}π radialen.`);
    if (graden / 180 >= 2) {
        console.log(`Dat is hetzelfde als ${(graden / 180) % 2}π radialen.`);
    };
};
radialenBerekenen(360); // vervang dit getal door het aantal graden wat je wilt omrekenen naar radialen.