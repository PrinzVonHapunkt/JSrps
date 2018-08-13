
		function computerPlay ()
		{
			let compchoice = Math.floor(Math.random()*3);
			switch(compchoice)
			{
				case 0:
				return "Rock";
				break;

				case 1:
				return "Paper";

				case 2:
				return "Scissors";
			}
		}


		function playRound(playerSelection, computerSelection)
		{
			console.log("Computer choice: " + computerSelection);
			if(playerSelection == computerSelection)
			{
				return "Draw";
			}
			else if (playerSelection == "Rock")
			{
				if(computerSelection == "Paper")
				{
					return "Computer wins!";
				}
				else
				{
					return "Player wins!";
				}
			}
			else if(playerSelection == "Scissors")
			{
				if(computerSelection == "Rock")
				{
					return "Computer wins!";
				}
				else
				{
					return "Player wins!";
				}
			}
			else if(playerSelection == "Paper")
			{
				if(computerSelection == "Scissors")
				{
					return "Computer wins!";
				}
				else
				{
					return "Player wins!";
				}
			}
		}

		function game()
		{
			let playerscore = 0;
			let cpuscore = 0;
			let winner = "";
			let playerP;
			let computerP = computerPlay();

			let rbn = document.getElementById('rock');
			let pbn = document.getElementById('paper');
			let sbn = document.getElementById('scissors');
			let div = document.getElementById('status');

			rbn.addEventListener("click", () => {computerP = computerPlay(); winner=playRound("Rock",computerP); div.textContent=winner;});
			pbn.addEventListener("click", () => {computerP = computerPlay(); winner=playRound("Paper",computerP); div.textContent=winner;});
			sbn.addEventListener("click", () => {computerP = computerPlay(); winner=playRound("Scissors",computerP); div.textContent=winner;});


				


				

				


				


		
		}

		game();

