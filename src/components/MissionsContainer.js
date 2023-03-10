import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions } from "../Redux/MissionsSlice";
import Mission from "./Missions";

const MissionsContainer = () => {
    // get mission data from the store
    const missions = useSelector((state) => state.missions.missions);
    const { length } = missions || {};
    const dispatch = useDispatch();
    useEffect(() => {
        if (length === 0) {
            dispatch(fetchMissions());
        }
        
    }, [dispatch]);
    return (
        <Container fluid className="table-responsive-sm">
        <Table className="my-3 table-bordered table-striped">
            <thead>
                <tr>
                    <td><b>Mission</b></td>
                    <td><b>Description</b></td>
                    <td><b>Status</b></td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {missions.map((e) => (
                    <Mission 
                        key={e.mission_id}
                        missionId={e.mission_id}
                        missionName={e.mission_name}
                        description={e.description}
                        reserved={e.reserved}
                    />
                ))}
            </tbody>
        </Table>
        </Container>
    );
};

export default MissionsContainer;