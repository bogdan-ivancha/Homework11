// the first level
for (var i = 0; i < 2; i++) {
	north()
};
// the second level
for (var i = 0; i < 16; i++) {
	east()
};
// the third level
for (var i = 0; i < 7; i++) {
  south()
  east()
};
// the fourth level
for (var i = 0; i < 13; i++) {
	if (isFree("south")) {
		south()
	}
	else {
		east()
	}
}
//the fifth level
for (var i = 0; i < 8; i++) {
	if (isFree("east")) {
		east()
	}
	else {
		south()
	}
}
for (var i = 0; i < 2; i++) {
	west()
}
for (var i = 0; i < 5; i++) {
	if (isFree("south")) {
		south()
	}
	else {
		west()
	}
}
for (var i = 0; i < 5; i++) {
	if (isFree("north")) {
		north()
	}
	else {
		west()
	}
}
for (var i = 0; i < 11; i++) {
	if (isFree("south")) {
		south()
	}
	else {
		east()
	}
}
// the sixth level
for (var i = 0; i < 7; i++) {
	if (isFree("south")) {
		south()
	}
	else {
		east()
	}
}
for (var i = 0; i < 9; i++) {
	if (isFree("north")) {
		north()
	}
	else {
		east()
	}
}
for (var i = 0; i < 4; i++) {
	south()
}
for (var i = 0; i < 5; i++) {
	if (isFree("west")) {
		west()
	}
	else {
		south()
	}
}
for (var i = 0; i < 2; i++) {
	east()
}
//the seventh level
for (var i = 0; i < 12; i++) {
	if (isFree("south")) {
		south()
	}
	else {
		east()
	}
}
for (var i = 0; i < 3; i++) {
	east()
}
for (var i = 0; i < 11; i++) {
	north()
}
for (var i = 0; i < 4; i++) {
	if (isFree("east")) {
		east()
	}
	else {
		south()
	}
}
for (var i = 0; i < 5; i++) {
	south()
}
for (var i = 0; i < 8; i++) {
	if (isFree("west")) {
		west()
	}
	else {
		south()
	}
}
for (var i = 0; i < 18; i++) {
	if (isFree("east")) {
		east()
	}
	else {
		south()
	}
}
