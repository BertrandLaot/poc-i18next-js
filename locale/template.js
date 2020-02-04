for(let i = 1 ; i < 10 ; i++) {
    console.log(i);
}


console.log(i18next.t('test'));
console.log(i18next.t('test2'));
console.log(i18next.t('test3'));
console.log(i18next.t('testDeep.inner'));

console.log(i18next.t(`testDeep.inner ${test}`));

console.log(i18next.t('day', { date: String((new Date()).now()) }));