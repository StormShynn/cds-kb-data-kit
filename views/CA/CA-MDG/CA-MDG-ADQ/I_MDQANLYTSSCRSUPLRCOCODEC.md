---
name: I_MDQANLYTSSCRSUPLRCOCODEC
description: MDQ Score for Suplr Company Code - Cube
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value
semantic_en: MDQ Score for Suplr Company Code - Cube
keywords:
  - MDQ Score for Suplr Company Code - Cube
  - MDQ Score for Suplr Company Code - Cube
  - MDQ Score for Suplr Company Code - Cube
tags:
  - CA
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_MDQANLYTSSCRSUPLRCOCODEC

**MDQ Score for Suplr Company Code - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRSUPLRCOCODEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MDQualityBusinessRuleUUID` |  | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Maste Data Quality Table Name of Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Key |
| `PaymentIsBlockedForSupplier` |  | |  |  | `CHAR(1)` | Payment Block |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `PurchasingIsBlocked` |  | |  |  | `CHAR(1)` | Centrally imposed purchasing block |
| `SupplierProcurementBlock` |  | |  |  | `CHAR(2)` | Function That Will Be Blocked |
| `ResponsibleType` |  | |  |  | `CHAR(2)` | Tax Type |
| `SuplrProofOfDelivRlvtCode` |  | |  |  | `CHAR(1)` | Supplier indicator relevant for proof of delivery |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SuplrQualityManagementSystem` |  | |  |  | `CHAR(4)` | Actual QM System of Supplier |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `SupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `SupplierIsPlantRelevant` |  | |  |  | `CHAR(1)` | Indicator: plant level relevant |
| `SupplierIsSubRangeRelevant` |  | |  |  | `CHAR(1)` | Indicator: vendor sub-range relevant |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `BPFirstNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerGrouping` |  | |  |  | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerIsBlocked` |  | |  |  | `CHAR(1)` | Central Block for Business Partner |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User who created the object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on which the object was created |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `GenderCodeName` |  | |  |  | `CHAR(1)` | Gender of Business Partner (Person) |
| `IsMarkedForArchiving` |  | |  |  | `CHAR(1)` | Central Archiving Flag |
| `IsNaturalPerson` |  | |  |  | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date when object was last changed |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last user to change object |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `LegalForm` |  | |  |  | `CHAR(2)` | BP: Legal form of organization |
| `OrganizationBPName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `OrganizationFoundationDate` |  | |  |  | `DATS(8)` | Date organization founded |
| `SearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 for Business Partner |
| `SearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 for Business Partner |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `PaymentBlockingReason` |  | |  |  | `CHAR(1)` | Block Key for Payment |
| `SupplierIsBlockedForPosting` |  | |  |  | `CHAR(1)` | Posting block for company code |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk Abbreviation |
| `SupplierClerk` |  | |  |  | `CHAR(15)` | Clerk at vendor |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `WithholdingTaxCountry` |  | |  |  | `CHAR(3)` | Withholding Tax Country/Region Key |
| `CashPlanningGroup` |  | |  |  | `CHAR(10)` | Planning Group |
| `SupplierReleaseGroup` |  | |  |  | `CHAR(4)` | Release Approval Group |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment method supplement |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
