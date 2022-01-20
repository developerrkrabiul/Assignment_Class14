
const age_year = document.getElementById('age_year');
const age_manth = document.getElementById('age_manth');
const age_week = document.getElementById('age_week');
const age_day = document.getElementById('age_day');
const age_hour = document.getElementById('age_hour');
const age_min = document.getElementById('age_min');
const age_sic = document.getElementById('age_sic');

const ageCal = document.getElementById('age_btn');

// let stopcount;

ageCal.addEventListener('click', function(){

      
       

        let brthDate = document.getElementById('bath_date').value;
        let ageOnDath = document.getElementById('a_on_d').value;

        let bdath = new Date(brthDate);
        let age_on_dath = new Date(ageOnDath);

        let boyos = Math.floor(age_on_dath.getTime() - bdath.getTime());


        let totalSec = Math.floor(boyos / 1000);

        let totalMin = Math.floor(totalSec / 60);

        let totalHour = Math.floor(totalMin / 60);

        let totalDay = Math.floor(totalHour / 24);

        let totalweek = Math.floor(totalDay / 7);

        let totalmanth = Math.floor(totalSec / 60 / 60 / 24 / 30);

        let totalYear = Math.floor(totalmanth / 12);


        // let mainManth = totalmanth - (totalYear * 30);

        // console.log(mainManth);



        // let totalDay = totalDay - (totalHour / 365);

        // let mainHour = totalHour - (totalDay * 24);
        // let mainMin = totalMin - (totalDay * 24 * 60) - (mainHour * 60);
        // let mainSic = totalSec - (totalDay * 24 * 60 * 60) - (mainHour * 60 * 60) - (mainMin * 60);

        age_year.children[1].innerHTML = totalYear;
        age_manth.children[1].innerHTML = totalmanth;
        age_week.children[1].innerHTML = totalweek;
        age_day.children[1].innerHTML = totalDay;
        age_hour.children[1].innerHTML = totalHour;
        age_min.children[1].innerHTML = totalMin;
        age_sic.children[1].innerHTML = totalSec;

        console.log(bdath);
        console.log(age_on_dath);
        console.log(boyos);





});