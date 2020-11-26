import { countDecimalDigits } from './utils'
import { version } from '../package.json'

export default class {
	constructor(options = {}){
		const {
			el,
			from = 0,
			to = 100,
			incRange = 10,
			overflow = 0,
			time = 50,
			start = false
		} = options 
    
    this.version = version
		this.el = el
		this.from = from
		this.to = to
		this.incRange = incRange
		this.overflow = overflow
		this.time = time
		this.toFixedValue = countDecimalDigits(this.incRange)
		
		if(start){
			this.start()
		}
		
  }
  	
	start(){
		let inc = this.from
		let isOver = false
		const max = this.to + (this.to * this.overflow)
		
		const intervalID = setInterval(() => {
				if(inc >= max) 
					isOver = true
			
				if(!isOver){
					inc += this.incRange
				}
				else {
					inc -= this.incRange

					if(inc < this.to){
						clearInterval(intervalID)
						return
					}
				}

				this.el.textContent = inc.toFixed(this.toFixedValue)
		}, this.time)
	}
}