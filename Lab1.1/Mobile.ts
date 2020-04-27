class Mobile{
	private mobileid:number;
	private mobilename:string;
	private mobilecost:number;

	constructor(mobileid:number, mobilename:string, mobilecost:number){
		this.mobileid=mobileid;
		this.mobilename=mobilename;
		this.mobilecost=mobilecost;
}	
	printMobileInfo():string{
		return this.mobileid+" "+this.mobilename+" "+this.mobilecost;
}
}