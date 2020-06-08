drop table if exists questionOption;
drop table if exists question;

create table question(
	questionID int primary key auto_increment,
	title varchar(255),
	rightAnw varchar(255)
);

create table questionOption(
	questionID int not null,
	A varchar(255),
	B varchar(255),
	C varchar(255),
	D varchar(255),
	foreign key(questionID) references question(questionID)
);

insert into question (title,rightAnw) values ("1+1=多少","B");

insert into questionOption(questionID,A,B,C,D) values (1,"1","2","3","4"); 
