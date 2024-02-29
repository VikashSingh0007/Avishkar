export default {
  getParticipationList: async function (token, eventId) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/event/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            participation: data["participation"],
            success: true,
            message: "Success",
          };
        case 401:
          return {
            success: false,
            message: "Invalid token!",
          };
        default:
          return {
            success: false,
            message: "Please try again later!",
          };
      }
    } catch {
      return {
        success: false,
        message: "Please try again later!",
      };
    }
  },
  toggleEventStatus: async function (token, eventId) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/event-status/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: "Registration status updated",
          };
        case 401:
          return {
            success: false,
            message: "Invalid token!",
          };
        default:
          return {
            success: false,
            message: "Please try again later!",
          };
      }
    } catch {
      return {
        success: false,
        message: "Please try again later!",
      };
    }
  },
  // get departmental event
  getAllDepartmentEvents: async function () {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dept-event/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            departmentEvents: data["departmentEvents"],
            success: true,
            message: "Success",
          };
        default:
          return {
            success: false,
            message: "Please try again later!",
          };
      }
    } catch {
      return {
        success: false,
        message: "Please try again later!",
      };
    }
  },
};
