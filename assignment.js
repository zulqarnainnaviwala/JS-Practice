//1
class Shape{
    name;
    sides;
    sideLength;

    constructor(name,sides,sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        console.log(`Perimeter of ${this.name} is : ${this.sides*this.sideLength}`);
    }
    }
    let square =  new Shape('Square',4,5);
    square.calcPerimeter();

    let triangle =  new Shape('Triangle',3,3);
    triangle.calcPerimeter();


    //2
    class Player {
        PlayerID;
        PlayerName;
        PlayerRuns;
        PlayerDateofBirth;
        PlayerShirtNumber;
        static totalRuns=0;

        constructor(PlayerID,PlayerName,PlayerRuns,PlayerDateofBirth,PlayerShirtNumber,totalRuns){
            this.PlayerID =PlayerID;
            this.PlayerName =PlayerName;
            this.PlayerRuns = PlayerRuns;
            this.PlayerDateofBirth =PlayerDateofBirth;
            this.PlayerShirtNumber = PlayerShirtNumber;
            Player.totalRuns = Player.totalRuns + PlayerRuns;
        }

        DisplayInfo(){
            confirm.log(
                `Player ID : ${this.PlayerID}
                 Player Name : ${this.PlayerName}
                 Player Date of Birth : ${this.PlayerDateofBirth}
                 Player Shirt Number : ${this.PlayerShirtNumber}
                `
            );
        }

        GetRuns(){
            console.log(`Player Runs : ${this.PlayerRuns}`);
        }

        AddRuns(run){
            this.PlayerRuns += run;
            
            //added player runs also need to be updated in total
            Player.totalRuns += run;
        }
        static displayTotalRuns(){
            console.log(`total runs of all players are ${this.totalRuns}`);
        }

    }
    let Zul = new Player(001,'Zul',94,'1999',10);
    console.log(Zul.PlayerRuns);
    console.log(Player.totalRuns);

    let Osama = new Player(002,'Osama',90,'1998',11);
    console.log(Osama.PlayerRuns);
    console.log(Player.totalRuns);

    Zul.AddRuns(10);
    console.log(Player.totalRuns);

    Osama.AddRuns(10);
    console.log(Player.totalRuns);

    Player.displayTotalRuns();


    

//3
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    let iterateLibrary = function() {
        for (const element of library ) {    
            for (const property in element) {
                console.log(`${property}: ${element[property]}`);
              }
            
        }
    }
    

//4
class bankAccount {
    //class variables
    #accountId ;
    #accountTitle;
    #balance;
    #emailID;

    //constructor
    constructor(accountId,accountTitle,balance,emailID){
        this.#accountId = accountId;
        this.#accountTitle = accountTitle;
        this.#balance = balance;
        this.#emailID = emailID;
    }
    //getter setters
    getAccountId(){
        return this.#accountId;
    }
    setAccountId(){
         this.#accountId = accountId;
    }
    getAccountTitle(){
        return this.#accountTitle;
    }
    setAccountTitle(){
         this.#accountTitle = accountTitle;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(){
         this.#balance = balance;
    }
    getEmailID(){
        return this.#emailID;
    }
    setEmailID(){
         this.#emailID = emailID;
    }


    //Methods
    withdrawAmount(amount){
        if(amount >= this.#balance){
            console.log("out of balance")
        }
        else{
            console.log(`
        you have successfully withdrawn : ${amount},
        your remaining balance is : ${this.#balance-amount}
        `)
        this.#balance -= amount;
        }
        
    }

    depositAmount(amount){
        console.log(`
        you have successfully deposited : ${amount},
        your new balance is : ${this.#balance+amount}
        `)
        this.#balance += amount;
    }
}
let account1 = new bankAccount(001, 'M Zulqarnain', 10000, 'z@gmail.com');
console.log(account1.getAccountId());
account1.withdrawAmount(10000);
account1.withdrawAmount(1);
account1.depositAmount(1000);
account1.depositAmount(100);
account1.withdrawAmount(1);

