import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://jsonplaceholder.org/users");
        setListOfUser(response.data);

        setLoading(false);
      } catch (error) {
        setError("Une erreur est survenue lors de la récupération des données");
        setLoading(false);
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    };
    fetchUsers();
    console.log(fetchUsers);
  }, []);
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Date de naissance</th>
            <th>Téléphone</th>
            <th>Site Web</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {listOfUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.lastname}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
