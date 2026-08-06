---
name: I_CABILLGDOCREFERENCE
description: Object Relationships for Billing Document
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value
semantic_en: Object Relationships for Billing Document
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CABILLGDOCREFERENCE

**Object Relationships for Billing Document**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CAInvcgReferenceObject` | `CHAR(10)` | Reference Object |
| `CAReferenceObjectID` | `CHAR(40)` | Reference Object ID |
| `CABillgDocCreationDate` | `DATS(8)` | Date on Which Billing Document Was Created |
| `CABillgDocument` | `CHAR(12)` | Number of Billing Document |
| `CABillgIsDocumentSimulated` | `CHAR(1)` | Billing Document Is Simulated |
| `CAReferenceObjectAddlText` | `CHAR(128)` | Additional Data for Reference Object |
