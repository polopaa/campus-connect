import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/users";
import Int "mo:core/Int";

module {
  public type UserProfile = Types.UserProfile;
  public type CreateProfileInput = Types.CreateProfileInput;
  public type ProfileResult = Types.ProfileResult;

  /// Create or update the profile for the given principal-derived id.
  public func createOrUpdate(
    profiles : List.List<UserProfile>,
    callerId : Text,
    input : CreateProfileInput,
  ) : ProfileResult {
    let now = Time.now();
    let profile : UserProfile = {
      id = callerId;
      nickname = input.nickname;
      state = input.state;
      city = input.city;
      branch = input.branch;
      year = input.year;
      interests = input.interests;
      contact = input.contact;
      createdAt = now;
    };
    switch (profiles.findIndex(func(p) { p.id == callerId })) {
      case (?idx) { profiles.put(idx, profile) };
      case null { profiles.add(profile) };
    };
    #ok(profile);
  };

  /// Return the profile for the given principal-derived id, or null.
  public func getById(
    profiles : List.List<UserProfile>,
    callerId : Text,
  ) : ?UserProfile {
    profiles.find(func(p) { p.id == callerId });
  };

  /// Return all profiles as an immutable array.
  public func getAll(profiles : List.List<UserProfile>) : [UserProfile] {
    profiles.toArray();
  };

  /// Return profiles whose state matches (case-insensitive).
  public func filterByState(
    profiles : List.List<UserProfile>,
    state : Text,
  ) : [UserProfile] {
    let lower = state.toLower();
    profiles.filter(func(p) { p.state.toLower() == lower }).toArray();
  };

  /// Return profiles matching all supplied optional filters.
  public func filterByMultiple(
    profiles : List.List<UserProfile>,
    state : ?Text,
    city : ?Text,
    branch : ?Text,
    year : ?Nat,
  ) : [UserProfile] {
    profiles.filter(func(p) {
      let stateOk = switch (state) {
        case (?s) { p.state.toLower() == s.toLower() };
        case null { true };
      };
      let cityOk = switch (city) {
        case (?c) { p.city.toLower() == c.toLower() };
        case null { true };
      };
      let branchOk = switch (branch) {
        case (?b) { p.branch.toLower() == b.toLower() };
        case null { true };
      };
      let yearOk = switch (year) {
        case (?y) { p.year == y };
        case null { true };
      };
      stateOk and cityOk and branchOk and yearOk;
    }).toArray();
  };

  /// Return up to `limit` most recently joined profiles (desc by createdAt).
  public func recentlyJoined(
    profiles : List.List<UserProfile>,
    limit : Nat,
  ) : [UserProfile] {
    let sorted = profiles.sort(func(a, b) { Int.compare(b.createdAt, a.createdAt) });
    sorted.toArray().sliceToArray(0, limit);
  };
};
