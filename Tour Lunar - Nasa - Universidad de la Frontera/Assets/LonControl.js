#pragma strict

public var lon = "";

function Update () {

lon = "Lon : "+ (26.8+(gameObject.transform.position.z/26960))+" N "; 	
gameObject.GetComponent(TextMesh).text = lon;

}