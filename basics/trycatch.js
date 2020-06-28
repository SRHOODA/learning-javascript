//**we use it so our whole program or application dont get freezes after an error

const dollerConverter = (dollar) => {
    //1st method
    if (typeof dollar !== 'number') {
        throw Error('input should be a number');

    } else {
        return dollar * 72;        
    };
   
    //2nd method
    // if (typeof dollar === 'string') {
    //     throw Error('input should be a number');

    // } else {
    //     return dollar * 72;        
    // };
   
    //3rd method
    // if (typeof dollar === 'number') {
    //     return dollar * 72;

    // } else {
    //     throw Error('input should be a number');
        
    // }
};

// const convertedValue = dollerConverter('five');
// console.log(convertedValue);

try {
    // const convertedValue = dollerConverter('five');
    // const convertedValue = dollerConverter('5');
    const convertedValue = dollerConverter(5);
    console.log(convertedValue);
    
} catch (error) {
    console.log(error);
    console.log(error.message);
}

console.log('will run even if dere is an error due to trycatch block');


// console.log('will not run if above console statement outside of trycatch block');