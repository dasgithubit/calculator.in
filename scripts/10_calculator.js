let calculation = localStorage.getItem('calculation') || 0;
            document.getElementById('display').innerText = calculation;

            let isResult = false;

            function addOne(value) {

                if(!isResult) {
                    calculation +=value;
                    // console.log(calculation);
                    document.getElementById('display').innerText = calculation;
                    localStorage.setItem('calculation',JSON.stringify(calculation));

                    
                }
            }

            function equal() {
                calculation = eval(calculation);
                // console.log(calculation);
                document.getElementById('display').innerText = calculation;
                isResult = true;
                localStorage.setItem('calculation',JSON.stringify(calculation));
            }

            function clearCalc() {
                calculation = 0;
                document.getElementById('display').innerText = calculation;
                isResult = false;
                localStorage.removeItem('calculation');
            }