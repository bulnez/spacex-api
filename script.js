const grid = {
  x: 5,
  y: 5,
};

const directionsLeft = ["north", "west", "south", "east"]; //defining directions

let robotOne = {
  x: 1,
  y: 2,
  direction: "south",
};

let robotTwo = {
  x: 1,
  y: 2,
  direction: "north",
};

function changeDirectionLeft() {
  if (robotTwo.direction === "north") {
    robotTwo.direction = "west";
  } else if (robotTwo.direction === "west") {
    robotTwo.direction = "south";
  } else if (robotTwo.direction === "south") {
    robotTwo.direction = "east";
  } else if (robotTwo.direction === "east") {
    robotTwo.direction = "north";
  }
}

function changeDirectionRight() {
  if (robotTwo.direction === "north") {
    robotTwo.direction = "east";
  } else if (robotTwo.direction === "east") {
    robotTwo.direction = "south";
  } else if (robotTwo.direction === "south") {
    robotTwo.direction = "west";
  } else if (robotTwo.direction === "west") {
    robotTwo.direction = "north";
  }
}

function moveForward() {
  if (robotTwo.direction === "south" || robotTwo.direction === "north") {
    robotTwo.y = robotTwo.y + 1; //changing X + 1
  } else if (robotTwo.direction === "west" || robotTwo.direction === "east") {
    robotTwo.x = robotTwo.x + 1; //changing Y + 1
  }
}

function mainFunction(input) {
  const commands = input.split();
  console.log(commands);
  commands.forEach((command) => {
    if (command === "M") {
      moveForward();
      //move the robot one block forward
    } else if (command === "R") {
      changeDirectionRight();
      //change the robot's direction to the one on the right
    } else if (command === "L") {
      changeDirectionLeft();
      //change the robot's direction to the one on the left
    } else {
      return "Invalid";
    }
  });

  console.log(robotTwo);
}

mainFunction("LMLMLMLMM");
