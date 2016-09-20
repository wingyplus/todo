*** Settings ***
Library           Selenium2Library
Suite Setup       Open Browser    about:blank    browser=gc
Suite Teardown    Close Browser
Test Setup        Open Todo Application


*** Test Cases ***
List Todos
    It Should Found Todo 2 Items

New Todo
    Create Todo With Title "Learn Node.js"
    It Should Has Todo Append In The List


*** Keywords ***
Open Todo Application
    Go To    http://localhost:8080/

It Should Found Todo ${n} Items
    ${n}=              Convert To Integer    ${n}
    ${items}=          Execute Javascript    return $('.todo-list .view').length
    Should Be Equal    ${items}              ${n}

Enter
    Press Key    css=.new-todo    \\13

Create Todo With Title "Learn Node.js"
    Input Text    css=.new-todo    Learn Node.js
    Enter

It Should Has Todo Append In The List
    It Should Found Todo 3 Items
