---
name: I_EXPNSETTLMTITEMPARTNER
description: Expense Settlement Item Partner
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value
semantic_en: Expense Settlement Item Partner
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMTITEMPARTNER

**Expense Settlement Item Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ExpnSettlmt` | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` | `NUMC(6)` | Document Item |
| `PartnerFunction` | `CHAR(2)` | Partner Function |
| `PartnerCounter` | `NUMC(3)` | Partner counter |
| `CreatedByUser` | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` | `DATS(8)` | Date of Document Creation |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `ContactPerson` | `NUMC(10)` | Number of Contact Person |
| `Personnel` | `NUMC(8)` | Personnel Number |
| `AddressID` | `CHAR(10)` | Address Number |
| `AddressPersonID` | `CHAR(10)` | Person Number |
| `ReferenceBusinessPartner` | `CHAR(10)` | Business Partner Number |
| `ExpnSettlmtPartAddrRefType` | `CHAR(1)` | Address indicator |
| `AddressObjectType` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` | `CHAR(20)` | VAT Registration Number |
