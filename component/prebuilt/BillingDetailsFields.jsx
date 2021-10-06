import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Reena mehta"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="reena.mehta@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="510 Townsend St"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="Redmond"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="Seattle"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="98005"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
