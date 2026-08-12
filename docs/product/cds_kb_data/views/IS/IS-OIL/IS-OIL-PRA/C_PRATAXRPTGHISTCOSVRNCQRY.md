---
name: C_PRATAXRPTGHISTCOSVRNCQRY
description: "PRA Tax Rptg Hist Colorado Severance Qry"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value
semantic_en: "PRA Tax Rptg Hist Colorado Severance Qry"
semantic_vi: "PRA Tax Rptg Hist Colorado Severance Qry — CDS view tiêu dùng dựa trên I_PRATaxRptgHistCOSvrnc."
keywords:
  - "pra"
  - "tax"
  - "rptg"
  - "hist"
  - "colorado"
  - "severance"
  - "qry"
  - "company"
  - "code"
  - "sales"
  - "date"
  - "product"
  - "well"
  - "completion"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRATAXRPTGHISTCOSVRNCQRY

**PRA Tax Rptg Hist Colorado Severance Qry**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `SalesDate` | ✓ | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` | ✓ | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  |  | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` | ✓ | |  |  | `CHAR(20)` | Measurement point number |
| `JointVenture` | ✓ | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` | ✓ | |  |  | `CHAR(20)` | Delivery network number |
| `PRAContract` | ✓ | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` | ✓ | |  |  | `CHAR(2)` | Volume type code |
| `PRAOwner` | ✓ | |  |  | `CHAR(14)` | Tax 2.0 CO - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  |  | `CHAR(1)` | Reversal/Booking/Adjustment |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Tax 2.0 CO - Accounting Period |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `EntityIsTaxExempt` |  | |  |  | `CHAR(1)` | Tax 2.0 CO - Exempt Flag |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `NetRevenueInterestRatio` |  | |  |  | `CHAR(10)` | Tax 2.0 CO - Net Revenue Interest percent |
| `RevenueProcessCode` |  | |  |  | `CHAR(2)` | Revenue Process Code |
| `RejectedOrSuspendedType` |  | |  |  | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  |  | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `ColoradoAccountNumber` |  | |  |  | `CHAR(10)` | Tax 2.0 CO Sev - Colorado Account Number |
| `ProductType` |  | |  |  | `CHAR(1)` | Tax 2.0 CO - Oil/Gas Indicator |
| `SourceOfIncome` |  | |  |  | `CHAR(35)` | Tax 2.0 CO - Source of Income |
| `APIWellNumber` |  | |  |  | `CHAR(12)` | Tax 2.0 CO - API Number |
| `OwnerInterestCategory` |  | |  |  | `CHAR(1)` | Interest Category |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `TransacAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 CO - Transaction Amount |
| `TransacQtyInBaseUnit` |  | |  |  | `DEC(13)` | Tax 2.0 CO - Transaction Quantity |
| `OwnerVolReducnInMCF` |  | |  |  | `QUAN(13)` | Tax 2.0 CO - PVR Amount |
| `MktgCost01InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 2 |
| `MktgCost03InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 3 |
| `MktgCost04InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 4 |
| `MktgCost05InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 5 |
| `MktgCost06InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 6 |
| `MktgCost07InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 7 |
| `MktgCost08InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 8 |
| `MktgCost09InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 9 |
| `MktgCost10InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 10 |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |
| `GrossVolInBaseUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `TranspCostInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 CO - Transportation Cost |
| `ProcgAndMfgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Rptg Hist Colorado Severance Qry'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXRPTGHCOS'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRATaxRptgHistCOSvrncQry
  as select from I_PRATaxRptgHistCOSvrnc
{
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence: 1
  key SalesDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Product,
      @AnalyticsDetails.query.display: #KEY
  key Well,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key WellCompletion,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key MeasurementPoint,
  key JointVenture,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key DivisionOfInterest,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key DeliveryNetwork,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key PRAContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key VolumeType,
  key PRAOwner,
      @AnalyticsDetails.query.display: #TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      FiscalPeriod,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CostCenter,
      CompanyCodeCurrency,
      @AnalyticsDetails.query.display: #TEXT
      EntityIsTaxExempt,
      ValuationDocumentNumber,
      ValuationDocumentYear,
      NetRevenueInterestRatio,
      @AnalyticsDetails.query.display: #TEXT
      RevenueProcessCode,
      @AnalyticsDetails.query.display: #TEXT
      RejectedOrSuspendedType,
      @AnalyticsDetails.query.display: #TEXT
      RejectionReason,
      ColoradoAccountNumber,
      @AnalyticsDetails.query.display: #TEXT
      ProductType,
      SourceOfIncome,
      APIWellNumber,
      @AnalyticsDetails.query.display: #TEXT
      OwnerInterestCategory,
      
      LastChangedByUser,
      ChangedDateTime,

      @AnalyticsDetails.query.axis: #COLUMNS
      TransacAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      TransacQtyInBaseUnit,
      @AnalyticsDetails.query.hidden
      OwnerVolReducnInMCF,
      @AnalyticsDetails.query.hidden
      MktgCost01InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost02InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost03InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost04InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost05InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost06InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost07InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost08InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost09InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost10InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      AdValoremTaxAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      GrossVolInBaseUnit,
      @AnalyticsDetails.query.hidden
      TranspCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      ProcgAndMfgCostInCoCodeCrcy
}
```
