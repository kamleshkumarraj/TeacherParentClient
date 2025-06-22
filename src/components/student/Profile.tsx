import React from 'react'

function Profile() {
    const studentData = {
      name: "Kamlesh Raj Kushwaha",
      email: "kamlesh@example.com",
      username: "kamleshraj",
      university: "XYZ Technological University",
      college: {
        name: "ABC Institute of Technology",
        branch: "Computer Science and Engineering",
        semester: "6th",
        address: "123 Tech Road, Gwalior, MP, India"
      }
    };
    
  return (
     <main className="col-span-10 p-8">
        <h1 className="text-3xl font-semibold mb-6">Student Profile</h1>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-lg font-medium">{studentData.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-medium">{studentData.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Username</p>
              <p className="text-lg font-medium">{studentData.username}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">University</p>
              <p className="text-lg font-medium">{studentData.university}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">College</p>
              <p className="text-lg font-medium">{studentData.college.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Branch</p>
              <p className="text-lg font-medium">{studentData.college.branch}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Semester</p>
              <p className="text-lg font-medium">{studentData.college.semester}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">College Address</p>
              <p className="text-lg font-medium">{studentData.college.address}</p>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Profile
