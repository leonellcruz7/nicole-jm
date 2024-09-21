import React, { useState } from "react";
import Input from "../ui/input";
import { Button } from "../ui/button";
import MultipleInput from "../ui/multiple-input";
import Swal from "sweetalert2";

interface IForm {
  name: string;
  contact: string;
  list: string[];
}

const Rsvp = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IForm>({
    name: "",
    contact: "",
    list: [],
  });

  const handleSubmit = async () => {
    setLoading(true);
    const { name, contact, list } = form;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/arcane/google_sheets/JdaAGVbCszGxqWxU?tabId=Sheet1",
        {
          method: "POST",
          redirect: "follow",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify([[name, contact, list.join(",")]]),
        }
      );
      await response.json();

      setForm({
        name: "",
        contact: "",
        list: [],
      });
      Swal.fire("Great!", "Your response has been submitted!", "success");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="rsvp"
      className="px-10 py-12 pt-4 bg-main"
    >
      <div className="max-w-[600px] mx-auto space-y-4 mt-10">
        <p className="text-center cursive text-white font-bold text-[40px]">
          Nicole and Vince Rsvp Form
        </p>
        <p className="text-white text-[12px]">
          RSVP reminder: We have limited our invites to the people closest to us
          considering the venue’s limited capacity.{" "}
        </p>
        <Input
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
          label="Name"
        />
        <Input
          placeholder="Enter Contact Number"
          value={form.contact}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, contact: e.target.value }))
          }
          label="Contact Number"
        />
        <MultipleInput
          max={5}
          list={form.list}
          handleAdd={(val) =>
            setForm((prev) => ({ ...prev, list: [...prev.list, val] }))
          }
          label="List of attendees"
          placeholder="Enter Name"
          handleRemove={(val) =>
            setForm((prev) => ({
              ...prev,
              list: prev.list.filter((item) => item !== val),
            }))
          }
        />
        <div className="flex justify-end pt-10">
          <Button
            disabled={loading}
            onClick={handleSubmit}
            variant="default"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
