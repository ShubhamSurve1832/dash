"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import DownArrow from "@/images/icons/DownArrow";
import { Form, Formik } from "formik";
import { personalVals } from "../../../config/constants/initialValues";
import { FormikForm } from "@/components/FormikForm";
import SaveIcon from "@/images/icons/SaveIcon";
import CommentModal from "@/components/Shared/CommentModal";
import DriverLicenseModal from "@/container/Home/HomeComponents/DriverLicenseModal";
import SSNModal from "@/container/Home/HomeComponents/SSNModal";
import Equifax_logo from '../../../../public/images/equifax_logo.png'
import SecondaryBtn from "@/components/UI/SecondaryBtn";

const PersonalTab = () => {
  const [initialValues, setInitialValues] = useState(personalVals);
  const [open, setOpen] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [showSsnModel, setShowSsnModel] = useState(false);

  useEffect(() => {
    setInitialValues({
      firstName: "Lauren",
      lastName: "Smith",
      email: "lauren@email.com",
      mobileNumber: "+1 123 456-7890",
      dateOfBirth: "02/14/1995",
      ssn: "387 - 43 - 4324",
      driverLicenseNumber: "D84738",
      driverLicenseState: "California",
      streetAddress: "Queen Towers",
      city: "Los Angeles",
      state: "California",
      zipCode: "90001",
    });
  }, []);

  const onSubmit = (values) => {
    console.log("values", values);
  };
  const states = [{ value: "Option1", label: "California" }];
  const city = [{ value: "Option1", label: "Las Angeles" }];

  return (
    <div className="p-4 bg-[#fff] rounded-[4px]">
      <Disclosure as="div" defaultOpen={true}>
        <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
          <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
            Personal
          </span>
          <div className="flex items-center justify-center text-black">
            <DownArrow />
          </div>
        </DisclosureButton>
        <DisclosurePanel className="pt-5 pb-7">
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={profileValidationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <h3 className="text-[#000000B2] font-medium text-xl pb-4 border-b">
                    Information
                  </h3>
                  <div className="grid grid-cols-2 gap-7 gap-y-4 my-7">
                    <FormikForm.Input
                      name="firstName"
                      placeholder="Enter your first name"
                      label="First Name"
                      styles="placeholder-[#00000066]  placeholder-sm"
                    />
                    <FormikForm.Input
                      name="lastName"
                      placeholder="Enter your last name"
                      label="Last Name"
                      styles="placeholder-[#00000066]  placeholder-sm"
                    />
                    <FormikForm.Input
                      name="email"
                      placeholder="Enter your email"
                      label="Email"
                      styles="placeholder-[#00000066]  placeholder-sm"
                    />
                    <FormikForm.Input
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
                      label="Mobile Number"
                      styles="placeholder-[#00000066]  placeholder-sm"
                    />
                    <FormikForm.DatePicker
                      placeholder="Enter your date of birth"
                      label="Date of Birth"
                      name="dateOfBirth"
                      styles="placeholder-[#00000066]  placeholder-sm"
                    />
                  </div>

                  <div className="mt-11">
                    <h3 className="text-[#000000B2] font-medium text-xl pb-4 border-b">
                      Identification
                    </h3>
                    <div className="grid grid-cols-2 gap-7 gap-y-4 my-7">
                      <FormikForm.Input
                        name="ssn"
                        placeholder=""
                        label="SSN"
                        styles="placeholder-[#00000066]  placeholder-sm"
                      />
                      <FormikForm.Input
                        name="driverLicenseNumber"
                        placeholder=""
                        label="Driver License No."
                        styles="placeholder-[#00000066]  placeholder-sm"
                      />
                      <div className="col-span-2">
                        <FormikForm.FileUpload
                          value=""
                          label="OR"
                          name="or"
                          updateFilesCb=""
                        />
                        <div className="flex items-center mt-6 gap-4">
                          <div className="font-semibold flex gap-2 border border-[#CCCCCC] rounded-[4px] bg-[#FFFFFF0D] p-2 w-full">
                            <SaveIcon /> <span>Driver License Front.jpg</span>
                          </div>
                          <div className="font-semibold flex gap-2 border border-[#CCCCCC] rounded-[4px] bg-[#FFFFFF0D] p-2 w-full">
                            <SaveIcon /> <span>Driver License Back.jpg</span>
                          </div>
                        </div>
                      </div>
                      <FormikForm.Select
                        label="Driver License State"
                        name="driverLicenseState"
                        options={states}
                      />
                    </div>
                  </div>

                  <div className="mt-11">
                    <h3 className="text-[#000000B2] font-medium text-xl pb-4 border-b">
                      Address
                    </h3>
                    <div className="grid grid-cols-2 gap-7 gap-y-4 my-7">
                      <FormikForm.Input
                        name="ssn"
                        placeholder=""
                        label="Street Address"
                        styles="placeholder-[#00000066]  placeholder-sm"
                      />
                      <FormikForm.Select
                        label="City"
                        name="city"
                        options={city}
                      />
                      <FormikForm.Select
                        label="State"
                        name="state"
                        options={states}
                      />
                      <FormikForm.Input
                        name="zipCode"
                        placeholder=""
                        label="Zipcode"
                        styles="placeholder-[#00000066]  placeholder-sm"
                      />
                    </div>
                  </div>
                  {/* <PrimaryBtn title="Search All Vehicles" className='w-full text-xl' /> */}


                  <div className="mt-11">
                    <h3 className="text-[#000000B2] font-medium text-xl pb-4 border-b">
                      Credit History
                    </h3>
                    <div className="border border-[#572E91] rounded-[4px] p-4 my-7">
                      <Image src={Equifax_logo} width={90} height={30} alt="equifax logo" />
                      <p className='text-[#572E91] text-xl font-semibold mt-6 border-b border-[#572E91] inline-block leading-[20px]'>View Equifax Credit Report</p>

                    </div>
                    <div className="my-6">
                      <FormikForm.Input rows='6' type="textarea" name='note' label='Note' placeholder='Enter your notes' />
                    </div>
                  </div>

                  <SecondaryBtn title="Submit" className="mt-6 py-4 px-10 bg-[#572E910D] text-xl" />
                  <div className="mt-8">
                    <p
                      className="inline-block border-b border-[#572E91] text-[#572E91] font-semibold cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      + Add Co-applicant
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <CommentModal open={openComment} setOpen={setOpenComment} />
      {/* { open && <DriverLicenseModal open={open} setOpen={setOpen} />} */}
      {showSsnModel ? (
        <SSNModal
          open={open}
          setOpen={setOpen}
          setShowSsnModel={setShowSsnModel}
          title="Co-signer Identification"
        />
      ) : (
        <DriverLicenseModal
          open={open}
          setOpen={setOpen}
          setShowSsnModel={setShowSsnModel}
          title="Co-signer Driver License"
        />
      )}
    </div>
  );
};

export default PersonalTab;
