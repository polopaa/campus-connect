import Time "mo:core/Time";

module {
  public type UserId = Text;
  public type Timestamp = Int;

  public type UserProfile = {
    id : UserId;
    nickname : Text;
    state : Text;
    city : Text;
    branch : Text;
    year : Nat;
    interests : ?Text;
    contact : ?Text;
    createdAt : Timestamp;
  };

  public type CreateProfileInput = {
    nickname : Text;
    state : Text;
    city : Text;
    branch : Text;
    year : Nat;
    interests : ?Text;
    contact : ?Text;
  };

  public type ProfileResult = { #ok : UserProfile; #err : Text };
};
