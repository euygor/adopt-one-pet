import { useState, useEffect } from "react";
import { Report } from "../../../@types/Report";
import { ApiService } from "../../../services/ApiService";

export const useReport = () => {
    const [listReport, setListReport] = useState<Report[]>([]);

    useEffect(() => {
        ApiService.get('adoptions').then(response => {
            setListReport(response.data);
        });
    }, []);

    return { listReport };
}