---
name: C_MDQANLYTSSCRCUSTCOCODEQ
description: MDQ Score for Cust Company Code - Query
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTCOCODEQ')/$value
semantic_en: MDQ Score for Cust Company Code - Query
keywords:
  - MDQ Score for Cust Company Code
  - MDQ Score for Cust Company Code
  - MDQ Score for Cust Company Code
tags:
  - CA
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_MDQANLYTSSCRCUSTCOCODEQ

**MDQ Score for Cust Company Code - Query**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTCOCODEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `BillingIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central billing block for customer |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `DeliveryIsBlocked` |  | |  |  | `CHAR(2)` | Central delivery block for the customer |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Key |
| `IsSalesProspect` |  | |  |  | `CHAR(1)` | Indicator: Sales prospect |
| `NielsenRegion` |  | |  |  | `CHAR(2)` | Nielsen ID |
| `OrderIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central order block for customer |
| `PaymentIsBlockedForCustomer` |  | |  |  | `CHAR(1)` | Payment Block |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CashPlanningGroup` |  | |  |  | `CHAR(10)` | Planning Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CustomerHeadOffice` |  | |  |  | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `DunningBlock` |  | |  |  | `CHAR(1)` | Dunning Block |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `DunningProcedure` |  | |  |  | `CHAR(4)` | Dunning Procedure |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `PaymentBlockingReason` |  | |  |  | `CHAR(1)` | Block Key for Payment |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PhysicalInventoryBlockInd` |  | |  |  | `CHAR(1)` | Posting block for company code |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `SupplierReleaseGroup` |  | |  |  | `CHAR(4)` | Release Approval Group |
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Maste Data Quality Table Name of Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `BPFirstNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
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
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records OK |
| `Score` |  | |  |  | `DECF(34)` |  |
| `MDQltyAlPgNavigationPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
