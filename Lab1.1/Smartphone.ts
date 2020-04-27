class Smartphone extends Mobile{
	private mobiletype:string;

	constructor(mobileid:number, mobilename:string, mobilecost:number, mobiletype:string){
		super(mobileid, mobilename, mobilecost);
		this.mobiletype=mobiletype;
}
	get mobileInfo():any{
		return this.printMobileInfo()+"type is"+this.mobiletype;
}
}
let basicphone:Basicphones[]=[
	new Smartphones(101, "Samsung Galaxy s duos", 	9000,"basicphone"),
    	new Smartphones(102, "Speria K5 Notch", 4999 	,"basicphone"),
   	new Smartphones(103, "Redmi 8A", 5000,"basicphone")
]
for(let i=0;i<basicphone.length;i++){
	console.log(basicphone[i].mobileInfo());
}