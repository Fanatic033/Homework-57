const UserItem = () => {
  return (
    <div>
      <div className="card mb-2">
        <div className="row g-0">
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">Имя Пользователя:</h5>
              <p className="card-text small">Почта:</p>
              <p className="card-text">Активен</p>
              <p className="card-text">Роль:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;