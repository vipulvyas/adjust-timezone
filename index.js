/**
 * @author vipul vyas (vipulvyas0813@gmail.com)
 * This is for adjust date time while sending and receiving date time in different time zone 
 * 
 * @date {date} date which you send from client to server or server to client
 * @clientTZOffset {integer} client offset
 * @direction {string} server to client or client to server [SERVER_TO_CLIENT, CLIENT_TO_SERVER]
 * @return adjustedTime
 */

const adjustTimezone = (
    date, clientTZOffset, direction = 'SERVER_TO_CLIENT'
) => {
    if (date && !(date instanceof Date)) {
        throw `Invalid date object`;
    }
    let adjustedDate = date;
    if (clientTZOffset) {
        const serverTime = new Date();
        const serverTimezoneOffset = (serverTime).getTimezoneOffset();
        const minutesToAdjust = serverTimezoneOffset - clientTZOffset;
        if (minutesToAdjust !== 0) {
            if (direction === 'CLIENT_TO_SERVER') {
                adjustedDate = adjustedDate.getTime() / (1000 * 60) - minutesToAdjust;
            } else {
                adjustedDate = adjustedDate.getTime() / (1000 * 60) + minutesToAdjust;
            }
        }
    }
    return new Date(adjustedDate * 1000 * 60); 
}

module.exports = {
    adjustTimezone
}