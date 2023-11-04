"use server";

import { prisma } from "@/lib/prisma";
import { createCollectionSchemaType } from "@/schema/createCollection";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function createCollection(form: createCollectionSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not found");
  }

  const res = await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });

  revalidatePath("/");
  return res;
}

export async function deleteCollection(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new Error("user not found");
  }

  const res = await prisma.collection.delete({
    where: {
      id: id,
      userId: user.id,
    },
  });

  return res;
}
