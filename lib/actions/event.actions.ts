'use server';

import { connectToDatabase } from '../database';
import { CreateEventParams } from '@/types';
import Event from '../database/models/event.model';
import Category from '../database/models/category.model';
import User from '../database/models/user.model';
import { handleError } from '../utils';

export const createEvent = async ({
	userId,
	event,
	path,
}: CreateEventParams) => {
	try {
		await connectToDatabase();

		const organizer = await User.findById(userId);

		if (!organizer) {
			throw new Error('Organizer not found');
		}

		const newEvent = await Event.create({
			...event,
			category: event.categoryId,
			organizer: userId,
		});

		return JSON.parse(JSON.stringify(newEvent));
	} catch (error) {
		handleError(error);
	}
};
