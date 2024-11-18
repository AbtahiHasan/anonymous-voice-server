import express from "express";

import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { MentorController } from "./mentor.controller";
import { MentorValidation } from "./mentor.validation";

const router = express.Router();

router.get(
  "/:userName",
  // auth(
  //   ENUM_USER_ROLE.SUPER_ADMIN,
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.FACULTY,
  //   ENUM_USER_ROLE.FACULTY,
  //   ENUM_USER_ROLE.MENTOR
  // ),
  MentorController.getSingleMentor
);
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  MentorController.deleteMentor
);

router.patch(
  "/:id",
  validateRequest(MentorValidation.updateMentorZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  MentorController.updateMentor
);
router.get(
  "/",
  // auth(
  //   ENUM_USER_ROLE.SUPER_ADMIN,
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.FACULTY,
  //   ENUM_USER_ROLE.FACULTY,
  //   ENUM_USER_ROLE.MENTOR
  // ),
  MentorController.getAllMentors
);

router.patch("/schedule", MentorController.updateMentorSchedule);

export const MentorRoutes = router;
