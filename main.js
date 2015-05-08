/**
 * Splits input text into an array of sub strings of a length length or equal to the provided len value
 *
 * @param  {String} str
 * @param  {Number} len
 * @return {Array}
 */
module.exports = {
  split: function(str, len, delimiter){
	len = len || 140;
  	delimiter = delimiter || "..."
	len = len - delimiter.length
	var returnArray = []
	if(str.length <= len){
		return [str]
	}
	while(str.length > len){
		var tmpString = str.substring(0,len);
		if(tmpString.lastIndexOf(' ') <= 0){
			returnArray.push(str.substring(0,len) + delimiter);
			str = str.substring(len);
		} else {
			returnArray.push(str.substring(0,tmpString.lastIndexOf(' ')) + delimiter);
			str = str.substring(tmpString.lastIndexOf(' ')+1);
		}
	}
	returnArray.push(str);
	return returnArray;
	}
};