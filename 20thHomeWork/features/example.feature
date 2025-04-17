Feature: Todo list

        Scenario: User adds a new todo item
            Given the user is on the todo page
             When the user enters "Buy milk" and presses enter
             Then the todo list should contain "Buy milk"

        Scenario: User marks a todo item as completed
            Given the user is on the todo page
             When the user enters "Read book" and presses enter
              And the user marks "Read book" as completed
             Then the todo item "Read book" should be marked as completed

        Scenario: User deletes a todo item
            Given the user is on the todo page
             When the user enters "Walk the dog" and presses enter
              And the user deletes the todo item "Walk the dog"
             Then the todo list should not contain "Walk the dog"
