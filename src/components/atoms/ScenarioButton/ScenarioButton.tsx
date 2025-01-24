import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';

const ScenarioButton: React.FC = () => {
    return (
        <Button
            style={{
                borderRadius: "50%",
                width: "250px",
                height: "250px",
                outline: "none",
                boxShadow: "0px 0px 0px rgba(86, 204, 242, 0.5)",
                transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            <FontAwesomeIcon
                icon={faCirclePlus}
                style={{
                    fontSize: 200,
                    color: "#56CCF2",
                    cursor: "pointer",
                }}
            />
        </Button>
    );
};

export default ScenarioButton;