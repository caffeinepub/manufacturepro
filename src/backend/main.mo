import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    companyName : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, companyName : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      companyName;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
