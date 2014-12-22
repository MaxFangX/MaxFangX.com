//CUSTOMIZATION
var getCustomization = function(identifier){
/* Given a string identifier of each slide, return
 * a plain object with jQuery selectors as keys and 
 * plain objects of animatable css pairs as the values. 
 *  
 * For future note: consider adding another root key for 
 * values that can and can't be animated. 
 */
	switch(identifier){
		/* 
		 * For every custom property value added in here,
		 * it needs to be reset in the default option. 
		 */
		case 'Bitcoiner.':
			//{'opacity': 1}
			return {
				'animated': {
					'.foreground':{
						'margin-top': '-115px'
					}
				},
				'static':{
					'.maxfang': {
						'color': '#60D4FF'
					},
					'.x': {
						'color': '#FFF'
					}
				}
			};
		case 'Marketer.':
			return {
				'animated': {
					'.foreground':{
						'margin-top': '-100px'
					}
				},
				'static': {}
			}
		case 'Percussionist.':
			return {
				'animated': {
					'.foreground':{
						'margin-top': '-10.7%'
					}
				},
				'static': {}
			}
		case 'default':
		default:
			return {
				'animated': {
					'.foreground':{
						'margin-top': '0%'
					}
				},
				'static':{
					'.maxfangx': {
						'color': '#FFF'
					},
					'.x': {
						'color': '#F00'
					}
				}
			};
	}
}

var getDefault = function(){
	return getCustomization('default');
}