import React from 'react';

function Employee() {
  const employee = {
    name: 'Trần Nhân Hiếu',
    position: 'IT Staff',
    workingHours: '09:00 AM - 06:00 PM',
    homepage: ['9', '8', '11', '7', '12', '6'],
    leaveRequest: '50 days, 09:01 AM, 28/07/2024',
    attendance: {
      present: 21,
      absent: 3,
    },
  };

  return (
    <div>
      <h2>{employee.name}</h2>
      <address>
        <p>{employee.position}</p>
        <p>{employee.workingHours}</p>
        <p>Leave request: {employee.leaveRequest}</p>
      </address>
      <dl>
        <dt>Attendance</dt>
        <dd>
          <p>Present: {employee.attendance.present}</p>
          <p>Absent: {employee.attendance.absent}</p>
        </dd>
      </dl>
      <h3>Homepage</h3>
      <div dangerouslySetInnerHTML={{ __html: `<ul>${employee.homepage.map(link => `<li><a href="http://example.com/${link}">${link}</a></li>`).join('')}</ul>` }} />
    </div>
  );
}

export default Employee;