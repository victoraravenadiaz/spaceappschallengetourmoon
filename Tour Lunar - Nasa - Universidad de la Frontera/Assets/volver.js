var botonInicio : GameObject;
var botonCredits : GameObject;
var correo1 : GameObject;
var correo2 : GameObject;


function OnMouseEnter(){
renderer.material.color = Color.red; 
}

function OnMouseExit(){ 
renderer.material.color = Color.white; 
}


function OnMouseUp(){
	
		botonInicio.GetComponent(MeshRenderer).enabled = true;
   		botonInicio.GetComponent(BoxCollider).enabled = true;
   		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		
   		botonCredits.GetComponent(MeshRenderer).enabled = true;
   		botonCredits.GetComponent(BoxCollider).enabled = true;
   		correo1.GetComponent(MeshRenderer).enabled = false;
   		correo1.GetComponent(BoxCollider).enabled = false;
   		correo2.GetComponent(MeshRenderer).enabled = false;
   		correo2.GetComponent(BoxCollider).enabled = false;

	}