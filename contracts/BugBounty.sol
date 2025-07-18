// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BugBounty {
    struct BugReport {
        string url;
        string description;
        bool verified;
    }

    BugReport[] private bugReports;

    function submitBug(string memory _url, string memory _description) external {
        bugReports.push(BugReport({
            url: _url,
            description: _description,
            verified: false
        }));
    }

    function getAllBugs() external view returns (BugReport[] memory) {
        return bugReports;
    }
}

    function getAllBugs() external view returns (BugReport[] memory) {
        return bugReports;
    }
}

