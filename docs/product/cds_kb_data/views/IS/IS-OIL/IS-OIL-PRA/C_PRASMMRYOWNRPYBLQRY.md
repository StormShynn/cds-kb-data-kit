---
name: C_PRASMMRYOWNRPYBLQRY
description: "PRA Summary Owner Payable Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYOWNRPYBLQRY')/$value
semantic_en: "PRA Summary Owner Payable Query"
semantic_vi: "PRA Summary Owner Payable Query — CDS view tiêu dùng dựa trên I_PRAAcctgDocSmmryOwnrPybl."
keywords:
  - "pra"
  - "summary"
  - "owner"
  - "payable"
  - "query"
  - "interest"
  - "type"
  - "sequence"
  - "joint"
  - "venture"
  - "division"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRASMMRYOWNRPYBLQRY

**PRA Summary Owner Payable Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYOWNRPYBLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAOwner` | ✓ | |  |  | `CHAR(10)` | PRA owner |
| `OwnerInterestType` | ✓ | |  |  | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | ✓ | |  |  | `CHAR(2)` | Owner Interest Sequence Number |
| `JointVenture` | ✓ | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | ✓ | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  |  | `CHAR(5)` | Well Completion Number |
| `SalesDate` | ✓ | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` | ✓ | |  |  | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account Number |
| `RecordType` | ✓ | |  |  | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCodeCurrency` | ✓ | |  |  | `CUKY(5)` | Currency Key |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit venture |
| `OwnerIsJntIntrstBilgEnabled` |  | |  |  | `CHAR(1)` | Job Interest Billing Indicator |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  |  | `CHAR(3)` | County Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `CalculationBasis` |  | |  |  | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `SuspenseReason` |  | |  |  | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` |  | |  |  | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `PaymentCycle` |  | |  |  | `CHAR(1)` | Payment Processing - Future Pay Flag |
| `NetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Net Revenue Interest Percent |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Unit |
| `GrossVolInVolUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Gross Energy |
| `GrossAmount` |  | |  |  | `CURR(13)` | Gross value |
| `OwnerNetVolInVolUnit` |  | |  |  | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` |  | |  |  | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYOWNRPYBLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYOWNRPYBLQRY')/$value)*

```abap
@EndUserText.label: 'PRA Summary Owner Payable Query' 
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVSUMOWNPBLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRASmmryOwnrPyblQry
//  with parameters
//    @Consumption.hidden: true
//    @Environment.systemField: #SYSTEM_LANGUAGE
//    P_Language : sylangu
  as select from I_PRAAcctgDocSmmryOwnrPybl
{
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 1
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
  key PRAOwner,
  @AnalyticsDetails.query.display: #TEXT
  key OwnerInterestType,
  key OwnerInterestSequence,
  key JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key DivisionOfInterest,
  key Well,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key WellCompletion,
  key SalesDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Product,
  key DisbursementDecimalRatio,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key GLAccount,
  @AnalyticsDetails.query.display: #TEXT
  key RecordType,
  key CompanyCodeCurrency,

      UnitJointVenture,
      @AnalyticsDetails.query.display: #TEXT
      OwnerIsJntIntrstBilgEnabled,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #TEXT
      Country,
      @AnalyticsDetails.query.display: #TEXT
      Region,
      @AnalyticsDetails.query.display: #TEXT
      County,
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryNetwork,
      @AnalyticsDetails.query.display: #TEXT
      CalculationBasis,
      @AnalyticsDetails.query.display: #TEXT
      SuspenseReason,
      @AnalyticsDetails.query.display: #TEXT
      PriorPeriodAdjustmentReason,
      @AnalyticsDetails.query.display: #TEXT
      PaymentCycle,
      @AnalyticsDetails.query.hidden     
      NetRevenueInterestRatio,
      VolumeUnit,
      EnergyUnit,
      @AnalyticsDetails.query.hidden     
      GrossVolInVolUnit,
      @AnalyticsDetails.query.hidden     
      GrossEnergyInEnergyUnit,
      @AnalyticsDetails.query.hidden     
      GrossAmount,
      @AnalyticsDetails.query.hidden     
      OwnerNetVolInVolUnit,
      @AnalyticsDetails.query.hidden     
      OwnerEnergyInEnergyUnit,
      @AnalyticsDetails.query.hidden     
      OwnerGrossAmount,
      @AnalyticsDetails.query.axis: #COLUMNS
      OwnerNetAmount
}
```
