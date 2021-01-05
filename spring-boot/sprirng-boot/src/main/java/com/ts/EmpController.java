package com.ts;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.EmployeeDao;
import com.model.Employee;

@RestController
public class EmpController {
	
	@Autowired
	EmployeeDao employeeDao;
	
//	@Autowired
//	DepartmentDao deptDao;	
	
	@PostMapping("/registerEmp")			//Data from Angular
	//@RequestMapping("/registerEmp")		//Data Hard Coded
	public void register(@RequestBody Employee employee){
		
		System.out.println("Employee Data Received From Angular");
		System.out.println(employee);//		
		employeeDao.register(employee);
		
		//List<Department> deptList = deptDao.getDepartment();
		
		/*Employee e1 = new Employee();
		e1.setEmpName("PASHA");
		e1.setSalary(8989.89);
		e1.setGender("M");
		e1.setMobile("9898987676");
		e1.setCountry("IND");
		e1.setDoj(new Date("1/5/2021"));
		e1.setLoginId("pasha123");
		e1.setPassword("password");*/
		
		//e1.setDepartment(deptList.get(0));
		
		/*Employee e2 = new Employee();
		e2.setEmpName("HARSHA");
		e2.setSalary(8888.88);
		e2.setGender("M");
		e2.setMobile("9700251531");
		e2.setCountry("IND");
		e2.setDoj(new Date("1/5/2021"));
		e2.setLoginId("harsha123");
		e2.setPassword("password");*/
		//e2.setDepartment(deptList.get(0));
		
		/*Employee e3 = new Employee();
		e3.setEmpName("ARUN");
		e3.setSalary(7777.77);
		e3.setGender("M");
		e3.setMobile("9989988988");
		e3.setCountry("IND");
		e3.setDoj(new Date("1/5/2021"));
		e3.setLoginId("arun123");
		e3.setPassword("password");*/
		//e3.setDepartment(deptList.get(0));
					
		/*employeeDao.register(e1);
		employeeDao.register(e2);
		employeeDao.register(e3);	*/	
	}
	
	@RequestMapping("/showAllEmployee")
	public List <Employee> showAllEmployee(){		
		List<Employee> empList = employeeDao.getEmployee();
		return empList;
	}
		
	@RequestMapping("/getEmpById/{empId}")
	public Employee getEmpById(@PathVariable("empId") Integer empId){
		Employee employee = employeeDao.getEmployeeById(empId);
		return employee;		
	}
	
}
