public var botonCar : GameObject;
public var botonOtroModo : GameObject;
public var botonOtroMapa : GameObject;
public var botonBack : GameObject;
public var botonOtro : GameObject;

function OnMouseUp(){
	
		botonOtroMapa.GetComponent(MeshRenderer).enabled = true;
   		botonOtroMapa.GetComponent(BoxCollider).enabled = true;
   		botonBack.GetComponent(MeshRenderer).enabled = true;
   		botonBack.GetComponent(BoxCollider).enabled = true;
   		botonOtroModo.GetComponent(MeshRenderer).enabled = true;
   		botonOtroModo.GetComponent(BoxCollider).enabled = true;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		botonCar.GetComponent(MeshRenderer).enabled = false;
   		botonCar.GetComponent(BoxCollider).enabled = false;
   		botonOtro.GetComponent(MeshRenderer).enabled = false;
   		botonOtro.GetComponent(BoxCollider).enabled = false;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}