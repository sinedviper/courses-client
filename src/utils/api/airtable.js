import Airtable from "airtable";

import {SECRET_ID_AIRTABLE, SECRET_KEY_AIRTABLE} from "../contants";

export const table = new Airtable({apiKey: SECRET_KEY_AIRTABLE}).base(SECRET_ID_AIRTABLE).table("Courses");