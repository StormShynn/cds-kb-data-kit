---
name: I_ENGMNTPROJCUSTINFO
description: This CDS view provides about customers, that is relevant for managing projects.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value
semantic_en: This CDS view provides about customers, that is relevant for managing projects.
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGMNTPROJCUSTINFO

**This CDS view provides about customers, that is relevant for managing projects.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerFullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person who Created the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Created On |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DeliveryIsBlocked` |  | |  |  | `CHAR(2)` | Central delivery block for the customer |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `BillingIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central billing block for customer |
| `OrderIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central order block for customer |
| `InternationalLocationNumber1` |  | |  |  | `NUMC(7)` | International location number  (part 1) |
| `IsOneTimeAccount` |  | |  |  | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Key |
| `TaxNumberType` |  | |  |  | `CHAR(2)` | Tax Number Type |
| `TaxNumber1` |  | |  |  | `CHAR(16)` | Tax Number 1 |
| `TaxNumber2` |  | |  |  | `CHAR(11)` | Tax Number 2 |
| `TaxNumber3` |  | |  |  | `CHAR(18)` | Tax Number 3 |
| `TaxNumber4` |  | |  |  | `CHAR(18)` | Tax Number 4 |
| `TaxNumber5` |  | |  |  | `CHAR(60)` | Tax Number 5 |
| `CustomerCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `NielsenRegion` |  | |  |  | `CHAR(2)` | Nielsen ID |
| `IndustryCode1` |  | |  |  | `CHAR(10)` | Industry Code 1 |
| `IndustryCode2` |  | |  |  | `CHAR(10)` | Industry Code 2 |
| `IndustryCode3` |  | |  |  | `CHAR(10)` | Industry Code 3 |
| `IndustryCode4` |  | |  |  | `CHAR(10)` | Industry Code 4 |
| `IndustryCode5` |  | |  |  | `CHAR(10)` | Industry Code 5 |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `OrganizationBPName1` |  | |  |  | `CHAR(35)` | Name |
| `OrganizationBPName2` |  | |  |  | `CHAR(35)` | Name 2 |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `StreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `AlternativePayerAccount` |  | |  |  | `CHAR(10)` | Account Number of an Alternative Payer |
| `DataMediumExchangeIndicator` |  | |  |  | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `ResponsibleType` |  | |  |  | `CHAR(2)` | Tax Type |
| `FiscalAddress` |  | |  |  | `CHAR(10)` | Account number of the master record with the fiscal address |
| `NFPartnerIsNaturalPerson` |  | |  |  | `CHAR(1)` | Natural Person |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BPCustomerName` |  | |  |  | `CHAR(81)` | Customer Name |
| `BPCustomerFullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
