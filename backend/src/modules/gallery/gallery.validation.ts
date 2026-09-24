import { z } from "zod"

const urlSchema = z.string().trim().url()

export const createGalleryImageSchema = z.object({
    title: z.string().trim().max(180).nullable().optional(),
    imageUrl: urlSchema,
    category: z.string().trim().min(1, "Category is required").max(120),
    companyId: z.string().uuid("Company id must be a valid uuid").nullable().optional(),
    displayOrder: z.number().int().min(0).optional(),
    isPublished: z.boolean().optional(),
})

export const updateGalleryImageSchema = createGalleryImageSchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
})
