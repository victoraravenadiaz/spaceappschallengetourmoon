#pragma strict
public var autito: GameObject;

function OnCollisionEnter(col : Collision){
 if(col.gameObject.name == "player"){
 var carrito = Instantiate(autito,transform.position, Camera.main.transform.rotation);
 Destroy(gameObject); 
 Destroy(col.gameObject); 
 }
 }