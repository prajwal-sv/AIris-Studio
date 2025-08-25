import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
users: defineTable({
  name: v.string(),
  tokenIdentifier: v.string(),
  imgeURl: v.optional(v.string()),
  plan:v.union(v.literal("free"),v.literal("pro")),
  //usage tracking for plan limts
  projectsUsed:v.number(),
  exportsThisMonth:v.number(),

  createdAt : v.number(),
  lastActiveAt : v.number(),


}).index("by_token", ["tokenIdentifier"])
  .index("by_email", ["email"])
  .searchIndex("search_name",{searchField : "name"})
  .searchIndex("search_name",{searchField : "email"}),

});