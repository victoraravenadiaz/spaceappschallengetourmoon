var isQuitButton = false;
public var capturaNo : int;
public var capturaNombre : String;

function OnMouseEnter(){
renderer.material.color = Color.red; 
}

function OnMouseExit(){ 
renderer.material.color = Color.white; 
}

function OnMouseUp(){

   	if( isQuitButton ){
		Application.Quit();
	}
	else
	{
	
		Application.LoadLevel("Luna1Player");
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}

}