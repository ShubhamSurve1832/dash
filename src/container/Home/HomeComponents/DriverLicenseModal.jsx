import React, { useState } from "react";
import Modal from "../../../components/UI/Modal";
import Cross from "@/images/icons/Cross";
import { Form, Formik } from "formik";
import { FormikForm } from "@/components/FormikForm";
import PrimaryBtn from "@/components/UI/PrimaryBtn";
import CameraCapture from "@/components/UI/CameraCapture";

const DriverLicenseModal = ({ open, setOpen, setShowSsnModel, title }) => {
  const onSubmit = () => {
    setShowSsnModel(true);
  };

  const [openCamera, setOpenCamera] = useState(false);
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="fixed inset-0 z-1000 overflow-y-auto">
        <div className="flex md:min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden p-4 rounded-lg bg-white text-left shadow-xl transition-all sm:my-auto w-full sm:max-w-lg">
            <div className="flex justify-between items-center border-b border-[#0000001A] pb-4">
              <h3 className="text-xl text-[#000000] font-semibold">
                {title ? title : "Driver License"}
              </h3>
              <button
                className="text-sm font-semibold text-[#000000] hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                <Cross />
              </button>
            </div>
            <div>
              <div>
                <Formik
                  enableReinitialize
                  initialValues={{ driverLicenseBack: "" }}
                  // validationSchema={dateSchema}
                  onSubmit={onSubmit}
                >
                  {({ handleSubmit }) => {
                    return (
                      <>
                        <Form onSubmit={handleSubmit}>
                          {/* <div
                            onClick={() => setOpenCamera(true)}
                            className="flex justify-between items-center py-2 px-3 rounded-md border !border-[#B6B4B3]"
                          >
                            <div className="flex items-center gap-2 text-[#938F8F] max-sm:w-[75%]">
                              <BlueAddIcon />
                              <p className="text-base font-semibold text-[#572E91] max-sm:truncate">
                                Upload Image
                              </p>
                            </div>
                          </div> */}
                          <FormikForm.FileUpload
                            value=""
                            inlineStyle="mt-4"
                            label="Driver License (front)"
                            name="driverLicenseBack"
                            updateFilesCb=""
                          />
                          <FormikForm.FileUpload
                            value=""
                            inlineStyle="mt-4"
                            label="Driver License (Back)"
                            name="driverLicenseBack"
                            updateFilesCb=""
                          />
                          <PrimaryBtn
                            title="Submit"
                            className="w-full text-2xl font-normal my-6"
                          />
                          {!title && (
                            <div className="text-center">
                              <p
                                className="border-b border-[#00000099] inline-block"
                                onClick={() => setShowSsnModel(true)}
                              >
                                Skip
                              </p>
                            </div>
                          )}

                          {openCamera && (
                            <CameraCapture showCamera={setOpenCamera} />
                          )}
                        </Form>
                      </>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DriverLicenseModal;
