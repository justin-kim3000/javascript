class employee {
  businessDay = 25;
  fullTime_hourlyWage = 10000;
  partTime_hourlyWage = 8000;

  constructor(name, department, workHours_day) {
    this.name = name;
    this.department = department;
    this.workHours_day = workHours_day;
  }
}

class fullTimeEmployee extends employee {
  salary() {
    console.log(
      `${this.workHours_day * this.fullTime_hourlyWage * this.businessDay}원`
    );
  }
}

class partTimeEmployee extends employee {
  salary() {
    console.log(
      `${this.workHours_day * this.partTime_hourlyWage * this.businessDay}원`
    );
  }
}

const fullTime = new fullTimeEmployee("Kall", "seculity", 8);

console.log(fullTime);
fullTime.salary();
