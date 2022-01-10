/*������� 5.

���������� ���������� ���������� �� ����������� ����� �� ������.*/

function Electronics(color, elecName, requiredPower) { //������� - �����������
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){                         //����� ��� ���������
  console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //����� ��� ���������� �� ��������� 
  console.log(`Power ${elecName} is off.`)
} 

class Notebook extends Electronics {   //������� ����� 
    constructor(color, elecName, requiredPower) {
    super(color, elecName, requiredPower),   
    this.turnWifiOn = function(){		//����� - ����������� �������� Wi-fi
     console.log(`Wi-fi ${elecName} is on now.`)
      }
   }
  }

const tableLamp = new Electronics('black', 'tableLamp', 60); //������ ���������� �����

tableLamp.turnPowerOn(tableLamp); //�������� �����

const notebook = new Notebook('grey', 'notebook', 100, true); //������ ������� � ������������ ����������� � wi-fi
notebook.turnWifiOn(notebook); // ��������� wi-fi 

console.log(`Overall required power is: ${tableLamp['requiredPower'] + notebook['requiredPower']}`); //������� � ������� ������������ ��������

//console.log(notebook);
//console.log(tableLamp);