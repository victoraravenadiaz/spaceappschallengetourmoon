public var botonBack : GameObject;
public var botonOtroModo : GameObject;
public var botonSector1 : GameObject;
public var botonSector2 : GameObject;
public var botonSector4 : GameObject;
public var botonSectorBack : GameObject;

function OnMouseUp(){
	
		botonOtroModo.GetComponent(MeshRenderer).enabled = false;
   		botonOtroModo.GetComponent(BoxCollider).enabled = false;
   		botonBack.GetComponent(MeshRenderer).enabled = false;
   		botonBack.GetComponent(BoxCollider).enabled = false;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		
   		botonSector1.GetComponent(MeshRenderer).enabled = true;
   		botonSector1.GetComponent(BoxCollider).enabled = true;
   		botonSector2.GetComponent(MeshRenderer).enabled = true;
   		botonSector2.GetComponent(BoxCollider).enabled = true;
   		botonSector4.GetComponent(MeshRenderer).enabled = true;
   		botonSector4.GetComponent(BoxCollider).enabled = true;
   		botonSectorBack.GetComponent(MeshRenderer).enabled = true;
   		botonSectorBack.GetComponent(BoxCollider).enabled = true;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}