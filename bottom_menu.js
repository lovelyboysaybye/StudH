function Set_Color(val)
		{
			ID = "ICON" + val;
			console.log(ID)
			for (let i = 1; i <=5; i +=1)
			{
				ID_for = "ICON" + i;
				document.getElementById(ID_for).style.backgroundColor = "white";
				try{document.getElementById(ID_for + "PP").style.fill = "#2c3840";}
				catch{}
				document.getElementById(ID_for + "P").style.fill = "#2c3840";
			}

			document.getElementById(ID + "P").style.fill = "white";	
			try{
				document.getElementById(ID + "PP").style.fill = "white";	
			}
			catch{}
			document.getElementById(ID).style.backgroundColor = "#2c3840";
			
			console.log("Fuck")
		}