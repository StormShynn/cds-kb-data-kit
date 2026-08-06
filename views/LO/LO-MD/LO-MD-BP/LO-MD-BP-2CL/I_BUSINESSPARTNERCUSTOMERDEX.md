---
name: I_BUSINESSPARTNERCUSTOMERDEX
description: Data Extraction for Business Partner Customer
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value
semantic_en: Data Extraction for Business Partner Customer
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-2CL
  - customer
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - metadata-only
---
# I_BUSINESSPARTNERCUSTOMERDEX

**Data Extraction for Business Partner Customer**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `Customer` | `CHAR(10)` | Customer Number |
| `BusinessPartnerUUID` | `RAW(16)` | Business Partner GUID |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `AlternativePayerAccount` | `CHAR(10)` | Account Number of an Alternative Payer |
| `DataMediumExchangeIndicator` | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `VATLiability` | `CHAR(1)` | Liable for VAT |
| `PostingIsBlocked` | `CHAR(1)` | Central Posting Block |
| `DeliveryIsBlocked` | `CHAR(2)` | Central delivery block for the customer |
| `BillingIsBlockedForCustomer` | `CHAR(2)` | Central billing block for customer |
| `OrderIsBlockedForCustomer` | `CHAR(2)` | Central order block for customer |
| `IsNaturalPerson` | `CHAR(1)` | Natural Person |
| `BusinessPartnerGrouping` | `CHAR(4)` | Business Partner Grouping |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `DeliveryDateTypeRule` | `CHAR(1)` | Delivery Date Rule |
| `IsActiveEntity` | `CHAR(1)` | Draft - Indicator - Is active document |
| `ExpressTrainStationName` | `CHAR(25)` | Express train station |
| `TrainStationName` | `CHAR(25)` | Train station |
| `CityLocationCoordinatesCode` | `CHAR(10)` | City Coordinates |
| `Plant` | `CHAR(4)` | Plant |
| `CustomerCorporateGroup` | `CHAR(10)` | Group Key |
| `DataExchangeInstructionKey` | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `IndustryCode1` | `CHAR(10)` | Industry Code 1 |
| `IndustryCode2` | `CHAR(10)` | Industry Code 2 |
| `IndustryCode3` | `CHAR(10)` | Industry Code 3 |
| `IsCompetitor` | `CHAR(1)` | Indicator: Competitor |
| `IsSalesPartner` | `CHAR(1)` | Indicator: Sales partner |
| `IsDefaultSoldToParty` | `CHAR(1)` | ID for default sold-to party |
| `IsConsumer` | `CHAR(1)` | Indicator: Consumer |
| `FiscalAddress` | `CHAR(10)` | Account number of the master record with the fiscal address |
| `FreeDefinedAttribute03` | `CHAR(2)` | Attribute 3 |
| `CustomerConditionGroup1` | `CHAR(2)` | Customer Condition Group 1 |
| `CustomerConditionGroup2` | `CHAR(2)` | Customer Condition Group 2 |
| `CustomerConditionGroup3` | `CHAR(2)` | Customer Condition Group 3 |
| `CustomerConditionGroup4` | `CHAR(2)` | Customer Condition Group 4 |
| `CustomerConditionGroup5` | `CHAR(2)` | Customer Condition Group 5 |
| `AddressID` | `CHAR(10)` | Address |
| `InternationalLocationNumber1` | `NUMC(7)` | International location number  (part 1) |
| `InternationalLocationNumber2` | `NUMC(5)` | International location number (Part 2) |
| `InternationalLocationNumber3` | `NUMC(1)` | Check digit for the international location number |
| `CityCode` | `CHAR(4)` | City Code |
| `County` | `CHAR(3)` | County Code |
| `CustomerHasUnloadingPoint` | `CHAR(1)` | Indicator: Unloading points exist |
| `CustomerWorkingTimeCalendar` | `CHAR(2)` | Working Time Calendar |
| `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `BPIsEqualizationTaxSubject` | `CHAR(1)` | Checkbox |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `DeletionIndicator` | `CHAR(1)` | Central Deletion Flag for Master Record |
| `Language` | `LANG(1)` | Language Key |
| `SalesIsBlockedForCustomer` | `CHAR(1)` |  |
| `PaymentReason` | `CHAR(4)` | Payment Reason |
| `CustomerCentralDeletionIsBlock` | `CHAR(1)` | Central deletion block for master record |
| `AlternativePayerIsAllowed` | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `BPPlannedAnnualSalesYear` | `NUMC(4)` | Year For Which Sales are Given |
| `BPPlannedAnnualSalesCurrency` | `CUKY(5)` | Currency of sales figure |
| `BPPlannedAnnualSalesAmount` | `CURR(8)` | Annual sales |
| `CustomerTradingPartnerID` | `CHAR(6)` | Company ID of Trading Partner |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `AccountTaxType` | `CHAR(2)` | Tax Number Type |
| `IndustryCode4` | `CHAR(10)` | Industry Code 4 |
| `IndustryCode5` | `CHAR(10)` | Industry Code 5 |
| `TaxInvoiceRepresentativeName` | `CHAR(10)` | Name of Representative |
| `BusinessType` | `CHAR(30)` | Type of Business |
| `IndustryType` | `CHAR(30)` | Type of Industry |
| `FreeDefinedAttribute01` | `CHAR(2)` | Attribute 1 |
| `FreeDefinedAttribute02` | `CHAR(2)` | Attribute 2 |
| `FreeDefinedAttribute04` | `CHAR(2)` | Attribute 4 |
| `FreeDefinedAttribute05` | `CHAR(2)` | Attribute 5 |
| `FreeDefinedAttribute06` | `CHAR(3)` | Attribute 6 |
| `FreeDefinedAttribute07` | `CHAR(3)` | Attribute 7 |
| `FreeDefinedAttribute08` | `CHAR(3)` | Attribute 8 |
| `FreeDefinedAttribute09` | `CHAR(3)` | Attribute 9 |
| `FreeDefinedAttribute10` | `CHAR(3)` | Attribute 10 |
| `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
