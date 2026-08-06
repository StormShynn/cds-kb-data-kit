---
name: I_BPRELATIONSHIP
description: This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship.
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value
semantic_en: This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship.
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - bo:businesspartner
  - component:AP-MD-BP
  - interface-view
  - metadata-only
---
# I_BPRELATIONSHIP

**This CDS view retrieves business partner and its relationship data such as relationship type and validity of the relationship.**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPRELATIONSHIP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RelationshipNumber` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartnerCompany` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerPerson` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | `DATS(8)` | Validity Date (Valid To) |
| `BusinessPartner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` | `CHAR(10)` | Business Partner Number |
| `ValidityStartDate` | `DATS(8)` | Validity Date (Valid From) |
| `IsStandardRelationship` | `CHAR(1)` | Standard Relationship |
| `RelationshipCategory` | `CHAR(6)` | Business Partner Relationship Category |
| `BPRelationshipType` | `CHAR(4)` | Business partner relationship type |
| `BusPartRelshpIsRoleDefinition` | `CHAR(1)` | Business partner role definition instead of BP relationship |
| `CreatedByUser` | `CHAR(12)` | User who created the object |
| `CreationDate` | `DATS(8)` | Date on which the object was created |
| `CreationTime` | `TIMS(6)` | Time at which the object was created |
| `LastChangedByUser` | `CHAR(12)` | Last user to change object |
| `LastChangeDate` | `DATS(8)` | Date when object was last changed |
| `LastChangeTime` | `TIMS(6)` | Time at which object was last changed |
