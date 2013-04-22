public var botonBack : GameObject;
public var botonOtroMapa : GameObject;
public var botonAutomovil : GameObject;
public var botonModeBack : GameObject;
public var botonOtro : GameObject;


function OnMouseUp(){
	
		botonOtroMapa.GetComponent(MeshRenderer).enabled = false;
   		botonOtroMapa.GetComponent(BoxCollider).enabled = false;
   		botonBack.GetComponent(MeshRenderer).enabled = false;
   		botonBack.GetComponent(BoxCollider).enabled = false;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		
   		botonAutomovil.GetComponent(MeshRenderer).enabled = true;
   		botonAutomovil.GetComponent(BoxCollider).enabled = true;
   		botonOtro.GetComponent(MeshRenderer).enabled = true;
   		botonOtro.GetComponent(BoxCollider).enabled = true;
   		botonModeBack.GetComponent(MeshRenderer).enabled = true;
   		botonModeBack.GetComponent(BoxCollider).enabled = true;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}