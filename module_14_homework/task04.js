/*������� 4.
����������� ��������� ���������� ���������� ������� �������, ������� ���������� � �����. 
���������� ��� �� ����������. ���������� �������� ���������������. �������� ��������� � �������. 
��������� ������������ ��������. ����� �������� ������ ����, ��� �������, ��� 
(��������, ���������� ����� � ���������). ������ ������, ���������, ������ ���������� �� ��������..*/

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

function wifiEnabled(color, elecName, requiredPower, wifiEnable) {       //����� ������������ ������� wi-fi
	this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
	this.wifiEnable = wifiEnable,
  this.turnPowerOn = function(){                         //����� ��� �����������
    console.log(`Wi-fi ${elecName} is on.`)
    }
  }

wifiEnabled.prototype = new Electronics();   //��������� ������������ �����

const tableLamp = new Electronics('black', 'tableLamp', 60); //������ ���������� �����

tableLamp.turnPowerOn(tableLamp); //�������� �����

const notebook = new wifiEnabled('grey', 'notebook', 100, true); //������ ������� � ������������ ����������� � wi-fi
notebook.turnPowerOn(notebook); // ��������� wi-fi 

console.log(`Overall required power is: ${tableLamp['requiredPower'] + notebook['requiredPower']}`); //������� � ������� ������������ ��������

//console.log(notebook);
//console.log(tableLamp);