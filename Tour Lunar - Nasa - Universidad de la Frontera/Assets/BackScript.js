public var botonOtroMapa : GameObject;
public var botonOtroModo : GameObject;
public var botonMenu : GameObject;

function OnMouseUp(){
	
		botonOtroMapa.GetComponent(MeshRenderer).enabled = false;
   		botonOtroMapa.GetComponent(BoxCollider).enabled = false;
   		botonMenu.GetComponent(MeshRenderer).enabled = true;
   		botonMenu.GetComponent(BoxCollider).enabled = true;
   		botonOtroModo.GetComponent(MeshRenderer).enabled = false;
   		botonOtroModo.GetComponent(BoxCollider).enabled = false;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}