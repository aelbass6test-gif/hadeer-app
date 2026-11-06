export const GAS_URL = "https://script.google.com/macros/s/AKfycbz4ouAvqjUwPvvdAnfYFjfdhehwPCVCjRjXuvYme7eiTSDMvFmClRpG7_Y2W3YXCtbF/exec"; 

export const apiCall = async (action: string, data: any = {}, user: any = {username: 'admin', role: 'Admin'}) => {
  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify({ action, data, user }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }, 
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result;
  } catch (error: any) {
    console.error("API Error:", error);
    alert(error.message || "حدث خطأ في الاتصال.");
    throw error;
  }
};
