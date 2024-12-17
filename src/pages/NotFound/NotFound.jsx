import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound =()=>{
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
            <Card className="text-center shadow-lg max-w-lg">
              <CardHeader>
                <CardTitle>404 Not Found</CardTitle>
                <p className="text-gray-600">
                    The you are looking for does not exits.
                </p>
              </CardHeader>
              <CardContent>
                <img className="rounded-lg shadow-lg"
                 src="https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png"/>
                <Button
                   varient="outline"
                   onClick={()=>navigate(-1)}
                   className="mt-4"

                >
                    Go Back
                </Button>
              </CardContent>
            </Card>
        </div>
    );
}