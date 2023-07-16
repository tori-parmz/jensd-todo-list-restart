const THIS_ENDPOINT = "https://64ade178b470006a5ec67770.mockapi.io/Tasks";

export const todoServerAPI = {
  getTasks: async () => {
    const response = await fetch(THIS_ENDPOINT);
    const data = await response.json();
    return data;
  },
  postTask: async (body) => {
    const response = await fetch(THIS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  },
  deleteTask: async (id) => {
    const response = await fetch(`${THIS_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
  putTask: async (id, body) => {
    const response = await fetch(`${THIS_ENDPOINT}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response;
  }
};

export const postTask = async (header, isCompleted = false, description = "") => {
  const body = {
    isCompleted: isCompleted,
    title: header,
    description: description
  };
  return await todoServerAPI.postTask(body);
};

export const putTask = async (id, header, isCompleted, description) => {
  const body = {
    id: id,
    isCompleted: isCompleted,
    title: header,
    description: description
  };
  return await todoServerAPI.putTask(id, body);
};
