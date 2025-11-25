export const adminData = {
    citizenRequests: [
        { id: "req1", type: "ID Renewal", citizen: "Samuel Bekele", status: "pending", date: "2025-11-20" },
        { id: "req2", type: "Birth Certificate", citizen: "Hana Mamo", status: "in_progress", date: "2025-11-21" },
        { id: "req3", type: "Business License", citizen: "Dawit Alemu", status: "completed", date: "2025-11-18" },
        { id: "req4", type: "Land Registration", citizen: "Tigist Assefa", status: "pending", date: "2025-11-22" },
        { id: "req5", type: "Marriage Certificate", citizen: "Abebe Kebede", status: "in_progress", date: "2025-11-19" },
    ],
    employees: [
        { id: "emp01", name: "Liya Kebede", role: "Officer", tasksCompleted: 120, rating: 4.7, hoursWorked: 310, status: "Active" },
        { id: "emp02", name: "Abel Fikru", role: "Clerk", tasksCompleted: 98, rating: 4.2, hoursWorked: 240, status: "Active" },
        { id: "emp03", name: "Sara Tesfaye", role: "Manager", tasksCompleted: 150, rating: 4.9, hoursWorked: 320, status: "Active" },
        { id: "emp04", name: "Kebede Tadesse", role: "Officer", tasksCompleted: 85, rating: 4.0, hoursWorked: 200, status: "On Leave" },
    ],
    ratings: [
        { id: 1, employee: "Liya Kebede", score: 5, comment: "Very fast and reliable!", citizen: "Anonymous", date: "2025-11-20" },
        { id: 2, employee: "Abel Fikru", score: 4, comment: "Good support.", citizen: "Anonymous", date: "2025-11-21" },
        { id: 3, employee: "Liya Kebede", score: 5, comment: "Excellent service!", citizen: "Anonymous", date: "2025-11-19" },
        { id: 4, employee: "Sara Tesfaye", score: 5, comment: "Very professional.", citizen: "Anonymous", date: "2025-11-18" },
    ],
    hours: [
        { employee: "Liya Kebede", date: "2025-11-22", hours: 8, type: "Regular" },
        { employee: "Abel Fikru", date: "2025-11-22", hours: 6, type: "Regular" },
        { employee: "Sara Tesfaye", date: "2025-11-22", hours: 9, type: "Overtime" },
        { employee: "Liya Kebede", date: "2025-11-21", hours: 8, type: "Regular" },
    ],
    tracking: [
        { id: "req1", step: "Submission", status: "completed", date: "2025-11-20 10:00 AM" },
        { id: "req1", step: "Verification", status: "pending", date: "2025-11-20 11:00 AM" },
        { id: "req2", step: "Submission", status: "completed", date: "2025-11-21 09:00 AM" },
        { id: "req2", step: "Verification", status: "completed", date: "2025-11-21 10:30 AM" },
        { id: "req2", step: "Processing", status: "in_progress", date: "2025-11-21 11:00 AM" },
    ],
    performance: [
        { metric: "Avg Task Speed", value: "15 mins", trend: "+5%" },
        { metric: "Avg Rating", value: "4.5/5", trend: "+2%" },
        { metric: "Total Points", value: "12,450", trend: "+10%" },
    ],
    rewards: [
        { employee: "Sara Tesfaye", reason: "Extra Hours (Nov)", points: 500, status: "Approved" },
        { employee: "Liya Kebede", reason: "High Rating Bonus", points: 300, status: "Pending" },
    ],
    queue: [
        { token: "A-101", service: "ID Renewal", waitTime: "10 mins", status: "Waiting" },
        { token: "B-202", service: "Birth Certificate", waitTime: "5 mins", status: "Serving" },
        { token: "C-303", service: "Business License", waitTime: "20 mins", status: "Waiting" },
    ]
};
