import List "mo:core/List";
import Types "types/users";
import UsersApi "mixins/users-api";

actor {
  let profiles = List.empty<Types.UserProfile>();
  include UsersApi(profiles);
};

