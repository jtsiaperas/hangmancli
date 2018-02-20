
function Letter(char){
	this.char = char;
	this.guessed = false;
	this.toString = function(){
        if (this.guessed)
        {
        	return this.char;
        }
        return "_"; 
	}
    this.isMatch = function(char){
    	if (this.char === char)
    	{ 
    	    this.guessed = true;
    	    return true;
    	}
    	return false;
    } 
}

module.exports = Letter;