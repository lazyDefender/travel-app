import moment from 'moment';

moment.locale('uk', {
    months : 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
    monthsShort : 'січ._лют._берез._квіт._трав._черв._лип._серп._верес._жовт._листоп._груд.'.split('_'),
    monthsParseExact : true,
    weekdays : `понеділок_вівторок_середа_четвер_п'ятниця_субота_неділя`.split('_'),
    weekdaysShort : 'пн._вт._ср._чт._пт._сб._нд.'.split('_'),
    weekdaysMin : 'ПН_ВТ_СР_ЧТ_ПТ_СБ_НД'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
});