public var botonInicio : GameObject;
var botonBack : GameObject;
var correo1 : GameObject;
var correo2 : GameObject;


function OnMouseEnter(){
renderer.material.color = Color.red; 
}

function OnMouseExit(){ 
renderer.material.color = Color.white; 
}


function Start(){

   botonBack.GetComponent(MeshRenderer).enabled = false;
   botonBack.GetComponent(BoxCollider).enabled = false;

}

function OnMouseUp(){
	
		botonInicio.GetComponent(MeshRenderer).enabled = false;
   		botonInicio.GetComponent(BoxCollider).enabled = false;
   		gameObject.GetComponent(MeshRenderer).enabled = false;
   		gameObject.GetComponent(BoxCollider).enabled = false;
   		
   		botonBack.GetComponent(MeshRenderer).enabled = true;
   		botonBack.GetComponent(BoxCollider).enabled = true;
   		correo1.GetComponent(MeshRenderer).enabled = true;
   		correo1.GetComponent(BoxCollider).enabled = true;
   		correo2.GetComponent(MeshRenderer).enabled = true;
   		correo2.GetComponent(BoxCollider).enabled = true;

	}