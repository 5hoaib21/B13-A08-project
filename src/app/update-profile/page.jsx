"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";
import { BiEdit, BiUser } from "react-icons/bi";

export const UpdateProfilePage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
    toast.success("Updated");
  };
  return (
    <>
    {/* <div>
      {" "}
      <Modal>
        <Button variant="secondary">
          <BiEdit /> Update Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Your Profile</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="url">
                      <Label>Image URL</Label>
                      <Input placeholder="Image URL" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div> */}

    <Card className="border-0 shadow-2xl mx-auto w-125 py-10 mt-5">
        <h1 className="text-center text-2xl font-bold">Update Your Profile</h1>
<Form className="flex w-fit mx-auto flex-col gap-4" onSubmit={onSubmit}>
 <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>
        <div className="flex justify-between">
            <Button slot="close" variant="danger-soft">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Update
                      </Button>
        </div>
</Form>
    </Card>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};
export default UpdateProfilePage;
