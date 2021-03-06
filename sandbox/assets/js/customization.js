//CUSTOMIZATION
var getCustomization = function(identifier){
/* Given a string identifier of each slide, return
 * a plain object with jQuery selectors as keys and 
 * plain objects of animatable css pairs as the values. 
 *  
 * For future note: consider adding another root key for 
 * values that can and can't be animated. 
 */
 	var result = {
 		'animated': {},
 		'static': {}
 	}
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
						'margin-top': '-7.75%'
					},
					'.maxfang': {
						'color': '#60D4FF'
					},
					'.x': {
						'color': '#FFF'
					},			
				},
				'static':{}
			};
		case 'Marketer.':
			return {
				'animated': {
					'.foreground':{
						'margin-top': '-7.75%'
					},
					'.maxfang': {
						'color': '#000'
					},
				},
				'static': {}
			}
		case 'Percussionist.':
			return {
				'animated': {
					'.foreground':{
						'margin-top': '-10.7%'
					},
				},
				'static': {}
			}
		/* 
		 * Set background as well for the initial style to
		 * fix the jump when transitioning from initial slide.
		 * Code should mirror '.foreground' except with
		 * '.background'
		 */
		case 'initial':
			result['animated']['.background'] = {
				'margin-top': '-7.5%'
			}
		case 'X.':
			result['animated']['.foreground'] = {
				'margin-top': '-7.5%'
			};
			return result;
		case 'default':
		default:
			return {
				'animated': {
					'.foreground':{
						'margin-top': '0%'
					},
					'.maxfang': {
						'color': '#FFF'
					},
					'.x': {
						'color': '#F00'
					},
				},
				'static':{},
			};
	}
}

var getDefault = function(){
	return getCustomization('default');
}