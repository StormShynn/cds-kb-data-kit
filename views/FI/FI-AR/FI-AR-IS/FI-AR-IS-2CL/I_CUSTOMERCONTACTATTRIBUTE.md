---
name: I_CUSTOMERCONTACTATTRIBUTE
description: Customer Contact Attribute
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value
semantic_en: Customer Contact Attribute
tags:
  - FI
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CUSTOMERCONTACTATTRIBUTE

**Customer Contact Attribute**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CustomerContactUUID` | `CHAR(32)` | Customer Contact Key |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `CollectionSegment` | `CHAR(10)` | Collection Segment |
| `CollectionCustomerContact` | `NUMC(6)` | Contact ID |
| `CollectionSpecialist` | `CHAR(12)` | Collection Specialist |
| `ContactPerson` | `CHAR(10)` | Contact Person Key |
| `ContactPersonName` | `CHAR(40)` | Name of Contact Person at Business Partner |
| `ContactPersonEmailAddress` | `CHAR(128)` | Email Address of Contact Person at Business Partner |
| `ContactPersonPhoneNumber` | `CHAR(30)` | Telephone Number of Contact Person at Business Partner |
| `ContactPersonFaxNumber` | `CHAR(30)` | Fax Number of Contact Person at Business Partner |
| `ContactPersonFaxCountry` | `CHAR(3)` | Country/Region of Fax Number |
| `CustomerContactDirection` | `CHAR(1)` | Contact Direction |
| `CustomerContactType` | `CHAR(3)` | Contact Type |
| `CustomerContactResult` | `CHAR(3)` | Result of Contact |
| `CustomerIsReached` | `CHAR(1)` | Customer Reached |
| `CustomerContactDateTime` | `DEC(15)` | Customer Contact Time |
| `CustContactDurationInMinutes` | `NUMC(3)` | Duration of Customer Contact |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created At |
| `ChangedBy` | `CHAR(12)` | Last Changed By |
| `ChangedOnDateTime` | `DEC(15)` | Last Changed At |
| `CollectionWorklistItemUUID` | `RAW(16)` | Key of Worklist Item |
