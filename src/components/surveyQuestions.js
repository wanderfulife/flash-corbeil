export const questions = [
	{
		id: "Poste",
		text: "Positionnement enquêteur (possibilité de se déplacer)",
		options: [
			{ id: "2", text: "Passerelle côté Est", next: "Sens" },
			{ id: "3", text: "Passerelle côté Ouest", next: "Sens" },
			{ id: "4", text: "PASO côté Est", next: "Sens" },
			{ id: "5", text: "PASO côté Ouest", next: "Sens" },
		],
	},

	{
		id: "Sens",
		text: "Sens",
		options: [
			{ id: "1", text: "entre en gare (si l'enquêteur est situé sur le quai et que les interviewés vont prendre le train, considérer que l'interviewé entre en gare)", next: "Destination" },
			{ id: "2", text: "sort de la gare (si l'enquêteur est situé sur le quai et que les interviewés sortent du train, considérer que l'interviewé sort de la gare)", next: "Origine" },
		],
	},
	{
		id: "Destination",
		text: "Où allez-vous ?",
		options: [
			{ id: 1, text: "Je vais prendre le RER", next: "end" },
			{ id: 2, text: "Je vais prendre le bus", next: "end" },
			{ id: 3, text: "Je traverse uniquement la gare", next: "end" },
			{ id: 4, text: "Je viens du bus et je traverse la gare", next: "end" }
		],
	},
	{
		id: "Origine",
		text: "D'où venez-vous ?",
		options: [
			{ id: 1, text: "Je viens du RER", next: "end" },
			{ id: 2, text: "Je viens du bus", next: "end" },
			{ id: 3, text: "Je viens de l'autre côté de la gare et je ne fais que traverser la gare", next: "end" },
			{ id: 4, text: "Je viens de l'autre côté de la gare et je vais prendre le bus", next: "end" }
		],
	},
]
	