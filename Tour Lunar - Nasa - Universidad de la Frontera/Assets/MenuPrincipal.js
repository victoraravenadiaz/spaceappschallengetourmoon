public var pausa : int;
public var botonOtroMapa : GameObject;
public var botonBack : GameObject;
public var botonOtroModo : GameObject;

function Start(){

   botonOtroMapa.GetComponent(MeshRenderer).enabled = false;
   botonOtroMapa.GetComponent(BoxCollider).enabled = false;
   botonBack.GetComponent(MeshRenderer).enabled = false;
   botonBack.GetComponent(BoxCollider).enabled = false;
   botonOtroModo.GetComponent(MeshRenderer).enabled = false;
   botonOtroModo.GetComponent(BoxCollider).enabled = false;

}


function Update(){
	//Time.timeScale = pausa;
}
function OnMouseUp(){
	
		pausa = 0;
		botonOtroMapa.GetComponent(MeshRenderer).enabled = true;
   		botonOtroMapa.GetComponent(BoxCollider).enabled = true;
   		botonOtroModo.GetComponent(MeshRenderer).enabled = true;
   		botonOtroModo.GetComponent(BoxCollider).enabled = true;
   		botonBack.GetComponent(MeshRenderer).enabled = true;
   		botonBack.GetComponent(BoxCollider).enabled = true;
		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
		//capturaNo = capturaNo + 1;
		
        //Application.CaptureScreenshot(capturaNombre+capturaNo+".png",1);
	}