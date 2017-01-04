/**
 * Created by rain on 2017/01/04.
 */

function rgbToHex(r, g, b) {
    var rgb = b | (g << 8) | (r << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

function getAllSelectedSchedule() {
    
}