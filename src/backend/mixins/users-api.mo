import List "mo:core/List";
import Types "../types/users";
import UsersLib "../lib/users";

mixin (profiles : List.List<Types.UserProfile>) {
  /// Create or update the caller's profile.
  public shared ({ caller }) func createOrUpdateProfile(
    nickname : Text,
    state : Text,
    city : Text,
    branch : Text,
    year : Nat,
    interests : ?Text,
    contact : ?Text,
  ) : async Types.ProfileResult {
    let input : Types.CreateProfileInput = {
      nickname;
      state;
      city;
      branch;
      year;
      interests;
      contact;
    };
    UsersLib.createOrUpdate(profiles, caller.toText(), input);
  };

  /// Return the caller's profile, or null.
  public shared query ({ caller }) func getMyProfile() : async ?Types.UserProfile {
    UsersLib.getById(profiles, caller.toText());
  };

  /// Return all user profiles.
  public query func getAllUsers() : async [Types.UserProfile] {
    UsersLib.getAll(profiles);
  };

  /// Return all profiles from the given state (case-insensitive).
  public query func getUsersByState(state : Text) : async [Types.UserProfile] {
    UsersLib.filterByState(profiles, state);
  };

  /// Return profiles matching all supplied optional filters.
  public query func getUsersByFilters(
    state : ?Text,
    city : ?Text,
    branch : ?Text,
    year : ?Nat,
  ) : async [Types.UserProfile] {
    UsersLib.filterByMultiple(profiles, state, city, branch, year);
  };

  /// Return up to `limit` most recently joined users.
  public query func getRecentlyJoined(limit : Nat) : async [Types.UserProfile] {
    UsersLib.recentlyJoined(profiles, limit);
  };
};
