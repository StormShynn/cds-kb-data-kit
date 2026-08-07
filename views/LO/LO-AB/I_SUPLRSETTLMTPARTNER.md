---
name: I_SUPLRSETTLMTPARTNER
description: Supplier Settlement Partner
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPARTNER')/$value
semantic_en: Supplier Settlement Partner
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRSETTLMTPARTNER

**Supplier Settlement Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` |  | |  |  | `CHAR(10)` | Supplier Settlement |
| `PartnerFunction` |  | |  |  | `CHAR(2)` | Partner Function |
| `PartnerCounter` |  | |  |  | `NUMC(3)` | Partner counter |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ContactPerson` |  | |  |  | `NUMC(10)` | Number of Contact Person |
| `Personnel` |  | |  |  | `NUMC(8)` | Personnel Number |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `ReferenceBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `SuplrSettlmtPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
