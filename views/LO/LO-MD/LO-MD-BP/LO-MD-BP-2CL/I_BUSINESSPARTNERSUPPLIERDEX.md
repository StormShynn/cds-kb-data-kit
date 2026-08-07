---
name: I_BUSINESSPARTNERSUPPLIERDEX
description: Data Extraction for BP Supplier
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value
semantic_en: Data Extraction for BP Supplier
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_BUSINESSPARTNERSUPPLIERDEX

**Data Extraction for BP Supplier**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERSUPPLIERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `TitleSupplier` |  | |  |  | `CHAR(15)` | Title |
| `InternationalLocationNumber1` |  | |  |  | `NUMC(7)` | International location number  (part 1) |
| `InternationalLocationNumber2` |  | |  |  | `NUMC(5)` | International location number (Part 2) |
| `InternationalLocationNumber3` |  | |  |  | `NUMC(1)` | Check digit for the international location number |
| `ReferenceAccountGroup` |  | |  |  | `CHAR(4)` | Reference Account Group for One-Time Account (Vendor) |
| `SupplierAlternativePayee` |  | |  |  | `CHAR(10)` | Account Number of the Alternative Payee |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `PurchasingIsBlocked` |  | |  |  | `CHAR(1)` | Centrally imposed purchasing block |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
| `PaymentIsBlockedForSupplier` |  | |  |  | `CHAR(1)` | Payment Block |
| `SuplrProofOfDelivRlvtCode` |  | |  |  | `CHAR(1)` | Supplier indicator relevant for proof of delivery |
| `BR_TaxIsSplit` |  | |  |  | `CHAR(1)` | Tax Split |
| `IsActiveEntity` |  | |  |  | `CHAR(1)` | Draft - Indicator - Is active document |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsToBeAcceptedAtOrigin` |  | |  |  | `CHAR(1)` | Acceptance At Origin |
| `SupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `ResponsibleType` |  | |  |  | `CHAR(2)` | Tax Type |
| `FiscalAddress` |  | |  |  | `CHAR(10)` | Account number of the master record with fiscal address |
| `SupplierProcurementBlock` |  | |  |  | `CHAR(2)` | Function That Will Be Blocked |
| `DataExchangeInstructionKey` |  | |  |  | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `BPIsEqualizationTaxSubject` |  | |  |  | `CHAR(1)` | Checkbox |
| `BRSpcfcTaxBasePercentageCode` |  | |  |  | `NUMC(1)` | Tax Base in Percentage |
| `DataMediumExchangeIndicator` |  | |  |  | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `TranspServiceAgentStstcGrp` |  | |  |  | `CHAR(2)` | Shipment: statistics group, transportation service agent |
| `TaxNumberResponsible` |  | |  |  | `CHAR(18)` | Tax Number at Responsible Tax Authority |
| `TaxNumberType` |  | |  |  | `CHAR(2)` | Tax Number Type |
| `SuplrQualityManagementSystem` |  | |  |  | `CHAR(4)` | Actual QM System of Supplier |
| `SuplrQltyInProcmtCertfnValidTo` |  | |  |  | `DATS(8)` | Validity Date of Certification |
| `SupplierIsSubRangeRelevant` |  | |  |  | `CHAR(1)` | Indicator: vendor sub-range relevant |
| `TrainStationName` |  | |  |  | `CHAR(25)` | Train station |
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Alternative Payee in Document Allowed? |
| `PaytSlipWthRefSubscriber` |  | |  |  | `CHAR(11)` | ISR Subscriber Number |
| `SupplierIsPlantRelevant` |  | |  |  | `CHAR(1)` | Indicator: plant level relevant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory calendar key |
| `SupplierPlant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `SupplierCentralDeletionIsBlock` |  | |  |  | `CHAR(1)` | Central deletion block for master record |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `IsOneTimeAccount` |  | |  |  | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `BusinessPartnerPanNumber` |  | |  |  | `CHAR(40)` | Permanent Account Number |
