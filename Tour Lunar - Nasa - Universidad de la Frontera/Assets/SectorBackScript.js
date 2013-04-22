public var botonSector1 : GameObject;
public var botonSector2 : GameObject;
public var botonSector4 : GameObject;
public var botonOtroModo : GameObject;
public var botonOtroMapa : GameObject;
public var botonBack : GameObject;

function OnMouseUp(){
	
		botonOtroMapa.GetComponent(MeshRenderer).enabled = true;
   		botonOtroMapa.GetComponent(BoxCollider).enabled = true;
   		botonBack.GetComponent(MeshRenderer).enabled = true;
   		botonBack.GetComponent(BoxCollider).enabled = true;
   		botonOtroModo.GetComponent(MeshRenderer).enabled = true;
   		botonOtroModo.GetComponent(BoxCollider).enabled = true;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		botonSector1.GetComponent(MeshRenderer).enabled = false;
   		botonSector1.GetComponent(BoxCollider).enabled = false;
   		botonSector2.GetComponent(MeshRenderer).enabled = false;
   		botonSector2.GetComponent(BoxCollider).enabled = false;
   		botonSector4.GetComponent(MeshRenderer).enabled = false;
   		botonSector4.GetComponent(BoxCollider).enabled = false;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}