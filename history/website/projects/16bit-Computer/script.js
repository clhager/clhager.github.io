function Fibonacci() {
	var source = document.getElementById('main_img').src;
	var part = document.getElementById('computer-part').innerHTML;
	var descrip = document.getElementById('computer-descrip').innerHTML;
	document.getElementById('main_img').src='Fibonacci.gif';
	document.getElementById('computer-part').innerHTML="Running Fibonacci...";
	document.getElementById('computer-descrip').innerHTML="";
	setTimeout(function(){ document.getElementById('main_img').src=source; }, 17000);
	setTimeout(function(){ document.getElementById('computer-part').innerHTML=part; }, 17000);
	setTimeout(function(){ document.getElementById('computer-descrip').innerHTML=descrip; }, 17000);
}

function CPU() {
	var descrip = "This is the main part of the CPU. It contains the different parts of the CPU and \
	shows the overall architecture concepts.";
	document.getElementById('main_img').src='logo.png';
	document.getElementById('computer-part').innerHTML='<strong> Main CPU: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function Register() {
	var descrip = "Registers A and B hold 16-bit registers to hold a single binary value for mathematical \
		operations and writing numbers to memory. These registers have In and Out lines that enable or \
		disable writing values to the Register or loading values from the Register so that the Register \
		is not affecting by interference from other processes.";
	document.getElementById('main_img').src='register.png';
	document.getElementById('computer-part').innerHTML='<strong> Register (A/B): </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function ALU() {
	var descrip = "The ALU runs all the mathematical operations in the CPU. It is connected to the two registers, \
	A and B, and can perform all four basic arithmetic operations. All operations are performed simultaneously, with \
	the desired operation effectively selected by which output line is enabled. Rather than have all of the wiring \
	for each operation, I just used the arithmetic blocks in Logisim to add a layer of abstraction, which also makes \
	the CPU more effecient when running a simulation off of Logisim. The ALU also automatically outputs the comparator \
	outputs, which give comparison information related to the values in Registers A and B.";
	document.getElementById('main_img').src='alu.png';
	document.getElementById('computer-part').innerHTML='<strong> ALU: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function ProgramMemory() {
	var descrip = "The program memory here is a ROM register that I kept separate from the RAM for simplicity. This holds \
	all of the instructions for a certain program. The address feed comes from the program counter, so by default the \
	ROM starts at address 0 and moves to the next address when the program counter increments. All instructions are held \
	in Program Memory in 24 bit chunks, with an 8-bit machine code and a 16-bit operand.";
	document.getElementById('main_img').src='program_memory.png';
	document.getElementById('computer-part').innerHTML='<strong> Program Memory: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function InstReg() {
	var descrip = "The instruction register recieves 24-bit instructions from Program Memory and split them into the 8-bit \
	machine codes, which it feeds to the MicroInstruction Processor, and the 24-bit operand, which is fed to various parts \
	if the operand output is enabled.";
	document.getElementById('main_img').src='inst_reg.png';
	document.getElementById('computer-part').innerHTML='<strong> Instruction Register: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function MIU() {
	var descrip = "The MicroInstruction Unit is the link from the machine codes to the execution of the computer functions. \
	The Unit takes in the 8-bit machine codes as inputs and executes a series of microinstructions corresponding to that \
	machine code. It contains its own 3-bit counter to count through microinstructions, with a maximum of 8 time steps. \
	Each time step, the Unit executes a microinstruction corresponding to the machine code at that time step, which through \
	the pre-programmed ROM module activates the appropriate lines to enable input and/or output to the right parts of the \
	computer architecture. As an optimization, each machine code microinstruction set ends with a reset step that resets the \
	counter, so that the Unit doesn't go through empty time steps (as most machine codes only have 3-4 microinstructions. \
	Find the microinstruction table <a href='MicroInstructions.pdf' target='_blank'>here</a> and the machine code  \
	list <a href='Machine Code Table.pdf' target='_blank'>here</a>.";
	document.getElementById('main_img').src='miu.png';
	document.getElementById('computer-part').innerHTML='<strong> MicroInstruction Unit: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function RAM() {
	var descrip = "The RAM module contains all the memory used by the program being executed to hold and assign \
	variables, instantiate objects, and store any other needed information. The RAM module can be read from or \
	written to using the appropriate machine codes. The RAM module also has a register in it, called the memory \
	register, that indexes values at different parts of memory so that each function call in a recursive stack \
	can access variables in its scope without having to know where it is in the recursive stack. The value in the memory \
	register is automatically added any time the RAM is interacted with, so it can essentially set the address of the \
	current 'scope'.";
	document.getElementById('main_img').src='ram.png';
	document.getElementById('computer-part').innerHTML='<strong> RAM Module: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}

function Output() {
	var descrip = "The output register holds the values being sent through to the output decimal displays. Outside the output \
	register, there is a set of Shift Add-3 modules that implement an algorithm for translating binary numbers into \
	binary encoded decimal in order to communicate the correct value to the hexadecimal displays available in Logisim.";
	document.getElementById('main_img').src='output.png';
	document.getElementById('computer-part').innerHTML='<strong> Output Register: </strong>';
	document.getElementById('computer-descrip').innerHTML=descrip;
}