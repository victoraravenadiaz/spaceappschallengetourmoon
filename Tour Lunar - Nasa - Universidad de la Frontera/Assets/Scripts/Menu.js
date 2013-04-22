#pragma strict
public var rotativeCamera : GameObject;


function Start () {

}

function Update () {

	rotativeCamera.transform.Rotate(Vector3.up * Time.deltaTime*2);
}