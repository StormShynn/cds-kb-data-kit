---
name: I_PRAROYALTYRPTGHISTTEXASGLO
description: "PRA Royalty Reporting History Texas GLO"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value
semantic_en: "PRA Royalty Reporting History Texas GLO"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_PRAROYALTYRPTGHISTTEXASGLO

**PRA Royalty Reporting History Texas GLO**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume type code |
| `UniqueOwnerReference` |  | |  |  | `CHAR(24)` | Royalty 2.0 - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX - Reversal/Booking/Reversal Adjustment/Adjs |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Template cost center |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OwnerPaymentStatus` |  | |  |  | `CHAR(2)` | Pay Code |
| `Purchaser` |  | |  |  | `CHAR(10)` | Purchaser Number |
| `IsAffiliatedSale` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX GLO - Affiliated Sale Indicator |
| `AgencyReportType` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX GLOTAMU - Original Report |
| `AgencyGasDispositionType` |  | |  |  | `NUMC(2)` | Royalty 2.0 - TX GLO/TAMU - Royalty Gas Disposition Code |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX GLO - Master Level |
| `RailRoadCommsnMstrDataRecgLvl` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX GLO - RRC Master Level |
| `PurchaserIDByAgency` |  | |  |  | `NUMC(11)` | Royalty 2.0 - Texas GLO/TAMU - Purchaser ID |
| `OperatorIDByAgency` |  | |  |  | `CHAR(10)` | Royalty 2.0 - TX GLO - Operator ID |
| `ReportingAgencyLease` |  | |  |  | `NUMC(6)` | Royalty 2.0 - TX GLO/TAMU Lease |
| `UnitNumberByAgency` |  | |  |  | `CHAR(5)` | Royalty 2.0 - Texas GLO/TAMU - Unit Number |
| `JointVentureIsUnit` |  | |  |  | `CHAR(1)` | Roy 2.0 - Texas GLO/TAMU - Unit Venture |
| `TexasRailRoadCommsnDistrict` |  | |  |  | `CHAR(2)` | Royalty 2.0 - TX GLO/TAMU - District Number |
| `TexasRailRoadCommsnOilLease` |  | |  |  | `CHAR(5)` | Royalty 2.0 - TX GLO/TAMU - RRC Oil Lease Number |
| `TexasRailRoadCommsnGasWell` |  | |  |  | `CHAR(6)` | Royalty 2.0 - TX GLO/TAMU - RRC Gas Well ID |
| `TexasRailRoadCommsnDrillPermit` |  | |  |  | `CHAR(6)` | Royalty 2.0 - TX GLO/TAMU - RRC Drilling Permit |
| `TexasRailRoadCommsnFieldName` |  | |  |  | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - RRC Field Name |
| `TexasRailRoadCommsnLeaseName` |  | |  |  | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - RRC Lease Name |
| `PropertyAliasName` |  | |  |  | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - Property Alias Name |
| `Operator` |  | |  |  | `CHAR(10)` | Operator Number |
| `AgencyPayOrReportType` |  | |  |  | `CHAR(1)` | Royalty 2.0 - TX GLO/TAMU - Pay/Report Flag |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `AgencyNetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Royalty 2.0 - Texas GLO - Royalty Decimal |
| `AllocationPercent` |  | |  |  | `DEC(9)` | Royalty 2.0 - TX GLO/TAMU - Allocation Percent |
| `TractParticipationFactor` |  | |  |  | `DEC(9)` | Royalty 2.0 - Texas GLO - Tract Participation Factor |
| `PressureBaseQty` |  | |  |  | `QUAN(13)` | Pressure Base |
| `APIGravityRatio` |  | |  |  | `DEC(6)` | Oil/gas density at standard/base conditions |
| `NetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Royalty 2.0 - TX GLO - Owner NRI |
| `DisbursementDecimalRatio` |  | |  |  | `DEC(9)` | Owner Disbursement (Balance) Decimal |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `OwnerGrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Royalty 2.0 - TX GLO - Owner Gross Value |
| `JournalEntryTransacAmtVal` |  | |  |  | `CURR(11)` | JE Transaction Amount |
| `JournalEntryTransacQtyVal` |  | |  |  | `DEC(12)` | JE Transaction Quantity |
| `OwnerEnergyInMMBTU` |  | |  |  | `DEC(12)` | Owner MMBTU |
| `GrossVolReducnInMCF` |  | |  |  | `DEC(12)` | Gross Plant Volume Reduction amount |
| `OwnerVolReducnInMCF` |  | |  |  | `DEC(12)` | Owner  Plant Volume Reduction amount |
| `DdctnOrReimbmtAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Deduction/Reimbursement Amount |
| `TranspMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `OtherMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement Amount |
| `HeatingValue` |  | |  |  | `DEC(7)` | BTU Quantity |
