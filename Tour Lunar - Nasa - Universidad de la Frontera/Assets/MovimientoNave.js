#pragma strict

var speed = 0.1;

function Start () {

}

function Update () {
//Movimientos de izquierda-derecha
	if(Input.GetAxis("Horizontal")>0){
		rigidbody.AddRelativeForce(speed,0,0);
	}
	if(Input.GetAxis("Horizontal")<0){
		rigidbody.AddRelativeForce(-speed,0,0);
	}	
	if(Input.GetAxis("Horizontal")==0){
		rigidbody.AddRelativeForce(0,0,0);
	}
//movimiento de adelante-atras	
	if(Input.GetAxis("Vertical")>0){
		rigidbody.AddRelativeForce(0,0,speed);
	}
	if(Input.GetAxis("Vertical")<0){
		rigidbody.AddRelativeForce(0,0,-speed);
	}
	if(Input.GetAxis("Vertical")==0){
		rigidbody.AddRelativeForce(0,0,0);
	}
//Movimientos de elvacion	
	if(Input.GetKey(KeyCode.T)){
		rigidbody.AddRelativeForce(0,speed,0);
	}
	if(!Input.GetKey(KeyCode.T)){
		rigidbody.AddRelativeForce(0,0,0);
	}
	
	if(Input.GetKey(KeyCode.G)){
		rigidbody.AddRelativeForce(0,-speed,0);
	}
	if(!Input.GetKey(KeyCode.G)){
		rigidbody.AddRelativeForce(0,0,0);
	}
	
	gameObject.transform.rotation =  Camera.main.transform.rotation;
}