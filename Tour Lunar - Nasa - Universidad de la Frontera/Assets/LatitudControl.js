#pragma strict

public var lat = "";

function Update () {

lat = "Lat : "+ (20.02+(gameObject.transform.position.x/299.256506))+" E "; 	
gameObject.GetComponent(TextMesh).text = lat;

}