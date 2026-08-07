---
name: C_SLSMATLDETNRECORDDEX
description: Material Detn Condition Recd Extraction
app_component: SD-MD-MM-DET-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value
semantic_en: Material Detn Condition Recd Extraction
tags:
  - SD
  - component:SD-MD-MM-DET-2CL
  - consumption-view
  - lob:sales & distribution
  - lob:sourcing & procurement
  - material
  - SD-MD
  - SD-MD-MM
  - SD-MD-MM-DET
  - SD-MD-MM-DET-2CL
  - metadata-only
---
# C_SLSMATLDETNRECORDDEX

**Material Detn Condition Recd Extraction**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-DET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSMATLDETNRECORDDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `SlsMatlDetnSequenceNumber` |  | |  |  | `CHAR(3)` | Number |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Material Determination Type |
| `ConditionTable` |  | |  |  | `CHAR(3)` | Condition Table |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SlsMatlDetnSubstituteMaterial` |  | |  |  | `CHAR(40)` | Substitute Material |
| `SlsMatlDetnSubstitMaterialUoM` |  | |  |  | `UNIT(3)` | Substitute Unit of Measure |
| `MaterialSubstitutionReason` |  | |  |  | `CHAR(4)` | Reason for material substitution |
| `ConditionValidityEndDate` |  | |  |  | `DATS(8)` | Validity end date of the condition record |
| `ConditionValidityStartDate` |  | |  |  | `DATS(8)` | Validity start date of the condition record |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `ForwardingAgent` |  | |  |  | `CHAR(10)` | Forwarding Agent |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `OriginallyRequestedMaterial` |  | |  |  | `CHAR(40)` | Material Entered |
| `PricingReferenceMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Material |
