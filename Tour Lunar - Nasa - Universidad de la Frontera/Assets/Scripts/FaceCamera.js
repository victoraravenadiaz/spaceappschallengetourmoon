#pragma strict
public var rotativeCamera : Transform;

function Start () {
	gameObject.transform.localEulerAngles = new Vector3(180,180, 0);
}

function Update () {

	
	gameObject.transform.LookAt(rotativeCamera);
	
	

}