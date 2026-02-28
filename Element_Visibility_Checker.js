var isPresent = true, isDisplayed = true, isEnabled = false;
if(isPresent === true || isDisplayed === true || isEnabled === true)
{console.log("Element is ready");
}
if (isPresent === true && isDisplayed === true && isEnabled === false)
    {console.log("element is present and displayed but not enabled"); 
    }
if (isPresent === true && isDisplayed === false)

    {console.log("element is present but not displayed"); }
if (isPresent === false)
    {console.log("element is not present");
 }
 