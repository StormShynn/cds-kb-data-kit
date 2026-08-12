---
name: C_PRATAXRPTGHISTCOCONSVNQRY
description: "PRA Tax Reporting History CO Conservation Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOCONSVNQRY')/$value
semantic_en: "PRA Tax Reporting History CO Conservation Query"
semantic_vi: "PRA Tax Reporting History CO Conservation Query — CDS view tiêu dùng dựa trên I_PRATaxRptgHistCOConsvn."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "conservation"
  - "query"
  - "company"
  - "code"
  - "sales"
  - "date"
  - "product"
  - "well"
  - "completion"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRATAXRPTGHISTCOCONSVNQRY

**PRA Tax Reporting History CO Conservation Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOCONSVNQRY')/$value) |

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
| `TaxClassification` | ✓ | |  |  | `CHAR(4)` | Tax Class |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  |  | `CHAR(1)` | Reversal/Booking/Adjustment |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Customer / Vendor Number |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `RejectedOrSuspendedType` |  | |  |  | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  |  | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `TaxPayerIDByAgency` |  | |  |  | `NUMC(6)` | OGCC Payor |
| `ProductCodeByAgency` |  | |  |  | `CHAR(1)` | Product Cd |
| `TaxRate` |  | |  |  | `DEC(7)` | Levy Rate |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `GrossVolInBaseUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Gross value |
| `TaxExmptVal1InCoCdCrcy` |  | |  |  | `CURR(11)` | Charitable exempt value |
| `TaxExmptVal2InCoCdCrcy` |  | |  |  | `CURR(11)` | Federal entity exempt value |
| `TaxExmptVal3InCoCdCrcy` |  | |  |  | `CURR(11)` | US Indian exempt value |
| `TaxExmptVal4InCoCdCrcy` |  | |  |  | `CURR(11)` | State entity exempt value |
| `TaxExmptVal5InCoCdCrcy` |  | |  |  | `CURR(11)` | Other entity exempt value |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `QUAN(13)` | Wet-less-residue volume |
| `TaxExmptVolInBaseUnit` |  | |  |  | `QUAN(13)` | Exempt Volume |
| `TaxableVolInBaseUnit` |  | |  |  | `QUAN(13)` | Taxable Volume |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `FixedMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Fixed Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Taxable Value |
| `ConservationTaxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Conservation Tax Amount |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOCONSVNQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOCONSVNQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History CO Conservation Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXRPTGHCOC'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRATaxRptgHistCOConsvnQry 
  as select from I_PRATaxRptgHistCOConsvn
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
      @AnalyticsDetails.query.display: #KEY_TEXT
  key TaxClassification,
      @AnalyticsDetails.query.display: #TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #TEXT
      ProducerOrPurchaserCode,
      ProducerOrPurchaserNmbr,
      @AnalyticsDetails.query.display: #TEXT
      HasSeveranceTaxPaytOblgn,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 2
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.display: #TEXT
      SeveranceTaxRptgType,
      CompanyCodeCurrency,
      ValuationDocumentNumber,
      ValuationDocumentYear,
      @AnalyticsDetails.query.display: #TEXT
      RejectedOrSuspendedType,
      @AnalyticsDetails.query.display: #TEXT
      RejectionReason,
      TaxPayerIDByAgency,
      @AnalyticsDetails.query.display: #TEXT
      ProductCodeByAgency,
      @AnalyticsDetails.query.hidden
      TaxRate,
      
      LastChangedByUser,
      ChangedDateTime,

      @AnalyticsDetails.query.hidden
      GrossVolInBaseUnit,
      @AnalyticsDetails.query.axis: #COLUMNS
      GrossValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      TaxExmptVal1InCoCdCrcy,
      @AnalyticsDetails.query.hidden
      TaxExmptVal2InCoCdCrcy,
      @AnalyticsDetails.query.hidden
      TaxExmptVal3InCoCdCrcy,
      @AnalyticsDetails.query.hidden
      TaxExmptVal4InCoCdCrcy,
      @AnalyticsDetails.query.hidden
      TaxExmptVal5InCoCdCrcy,
      @AnalyticsDetails.query.hidden
      WetGasLessResidueGasVolInMCF,
      @AnalyticsDetails.query.hidden
      TaxExmptVolInBaseUnit,
      @AnalyticsDetails.query.hidden
      TaxableVolInBaseUnit,
      @AnalyticsDetails.query.hidden
      MktgCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      FixedMktgCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgReimbmtCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      TaxableValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      ConservationTaxAmtInCoCdCrcy,
      Country,
      PrimaryGeogrlLocation      
}
```
