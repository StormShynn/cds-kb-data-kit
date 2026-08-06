---
name: I_CNDNCONTRPROCESSCATEGORY
description: This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value
semantic_en: This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_CNDNCONTRPROCESSCATEGORY

**This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrProcessCategory` | `CHAR(2)` | Process Category of a Condition Contract |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
