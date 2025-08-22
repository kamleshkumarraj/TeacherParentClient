import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import { useGetMyBranchQuery, useLazyGetMyClassroomAndBatchQuery, useLazyGetSemesterForBranchQuery } from "@/store/api/faculty.api";

export default function SelectionPage() {
  const [branch, setBranch] = useState({
    _id : "",
    branchName : "",
    branchCode : ""
  });
  const [semester, setSemester] = useState({
    _id : "",
    semesterName : "",
    semesterCode : ""
  });
  const [classroom, setClassroom] = useState("");
  console.log(semester)
  const {data : branches} = useGetMyBranchQuery('');
  const [getSemesterForBranch, {data : semesters}] = useLazyGetSemesterForBranchQuery();
  const [getClassroom, {data : classroomData}] = useLazyGetMyClassroomAndBatchQuery();
  // const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"];
  


  useEffect(() => {
    if(branch?._id) getSemesterForBranch(branch?._id);
  },[branch])

  useEffect(() => {
    if(semester?.semesterCode) getClassroom({branch : branch?._id, semester : semester?._id});
    if(semester?.semesterCode) console.log("Hello")
  },[semester])

  const isReady = branch && semester && classroom;

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1470&q=80')` }}>
      <div className="w-full max-w-3xl p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6">
            <CardContent className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">
                🎓 Teacher Portal – Selection
              </h2>

              {/* Branch Selection */}
              <div>
                <label className="text-white font-medium flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" /> Choose Branch
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {branches &&  branches?.map((b) => (
                    <Button
                      key={b}
                      variant={branch === b ? "default" : "secondary"}
                      className="w-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30"
                      onClick={() => setBranch(b)}
                    >
                      {b?.branchCode}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Semester Selection */}
              {branch && (
                <div>
                  <label className="text-white font-medium flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5" /> Choose Semester
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {semesters && semesters.map((s) => (
                      <Button
                        key={s}
                        variant={semester === s ? "default" : "secondary"}
                        className="w-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30"
                        onClick={() => setSemester(s)}
                      >
                        {s?.semesterCode}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Classroom Selection */}
              {semester && (
                <div>
                  <label className="text-white font-medium flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5" /> Choose Classroom/Batch
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {classroomData && classroomData?.classroom?.map((c) => (
                      <Button
                        key={c}
                        variant={classroom === c ? "default" : "secondary"}
                        className="w-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30"
                        onClick={() => setClassroom(c)}
                      >
                        {c?.classroomCode}
                      </Button>
                    ))
                  }
                   { classroomData && classroomData?.batch?.map((b) => (
                      <Button
                        key={b}
                        variant={classroom === b ? "default" : "secondary"}
                        className="w-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30"
                        onClick={() => setClassroom(b)}
                      >
                        {b?.batchName}
                      </Button>
                    ))
                    }
                  </div>
                </div>
              )}

              {/* Continue Button */}
              {isReady && (
                <div className="text-center pt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-10 py-3 rounded-2xl shadow-lg hover:opacity-90"
                    
                  >
                    🚀 Go to Dashboard
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
