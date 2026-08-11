---
name: C_PRATAXRPTGHISTORYOKQRY
description: "PRA Tax Reporting History Oklahoma Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYOKQRY')/$value
semantic_en: "PRA Tax Reporting History Oklahoma Query"
semantic_vi: "PRA Tax Reporting History Oklahoma Query — CDS view tiêu dùng dựa trên I_PRATaxRptgHistoryOK."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "oklahoma"
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
# C_PRATAXRPTGHISTORYOKQRY

**PRA Tax Reporting History Oklahoma Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYOKQRY')/$value) |

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
| `ProductionUnitNumber` | ✓ | |  |  | `NUMC(14)` | Tax 2.0 - OKGP15 - Production Unit Number |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  |  | `CHAR(1)` | Tax 2.0 - Reversal/Booking/Reversal Adjustment/Adjustment |
| `AllocationRatio` |  | |  |  | `CHAR(18)` | Tax 2.0 - Allocation Percentage |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `TaxRate` |  | |  |  | `CHAR(14)` | Value tax rate |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Producer/Purchaser |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `TaxExemptCode1` |  | |  |  | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 01 Exempt Code |
| `TaxExemptCode2` |  | |  |  | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 02 Exempt Code |
| `TaxExemptCode3` |  | |  |  | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 03 Exempt Code |
| `TaxExemptCode4` |  | |  |  | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 04 Exempt Code |
| `TaxExemptCode5` |  | |  |  | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 05 Exempt Code |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Tax 2.0 - Master Level |
| `ExtProducerOrPurchaserNmbr` |  | |  |  | `NUMC(5)` | Tax 2.0 - Oklahoma Producer/Purchaser Number |
| `ProductType` |  | |  |  | `NUMC(1)` | Tax 2.0 - Oklahoma Product Code |
| `TaxPayerIDByAgency` |  | |  |  | `NUMC(5)` | Tax 2.0 - Oklahoma Taxpayer Number |
| `ReportingCompany` |  | |  |  | `NUMC(9)` | Tax 2.0 - FEIN/SSN |
| `ProductionDate` |  | |  |  | `ACCP(6)` | Tax 2.0 OK - Production Date (YYYYMM) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  |  | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxExmptVol1InBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Exempt Entity Type 1 Volume |
| `TaxExmptVal1InCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Exempt Entity Type 1 Value |
| `TaxExmptVol2InBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Exempt Entity Type 2 Volume |
| `TaxExmptVal2InCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Exempt Entity Type 2 Value |
| `TaxExmptVol3InBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Exempt Entity Type 3 Volume |
| `TaxExmptVal3InCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Exempt Entity Type 3 Value |
| `TaxExmptVol4InBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Exempt Entity Type 4 Volume |
| `TaxExmptVal4InCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Exempt Entity Type 4 Value |
| `TaxExmptVol5InBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Exempt Entity Type 5 Volume |
| `TaxExmptVal5InCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Exempt Entity Type 5 Value |
| `EnhncdOilRcvryVolInBaseUnit` |  | |  |  | `QUAN(13)` | EOR Volume |
| `EnhncdOilRcvryValInCoCdCrcy` |  | |  |  | `CURR(15)` | EOR Value |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `GrossProdnTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Gross Production Tax Amount |
| `PetroleumExcsTxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Petroleum Excise Tax Amount |
| `RevolvingFundTxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Revolving Fund Tax  Amount |
| `MarginProdgTxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Marginally Producing Tax Amount |
| `KoiwaTribeTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Kiowa Tax Amount |
| `ArapahoTribeTaxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Shoshone Arapaho Tax |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYOKQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYOKQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Oklahoma Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXRPTGHISTOK'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRATaxRptgHistoryOKQRY
  as select from I_PRATaxRptgHistoryOK
{
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence: 1
  key SalesDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Product,
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
  key PRAContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key VolumeType,
      @AnalyticsDetails.query.display: #TEXT
  key TaxClassification,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 3
      @AnalyticsDetails.query.display: #KEY
  key ProductionUnitNumber,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      AllocationRatio,
      @AnalyticsDetails.query.display: #TEXT
      ProducerOrPurchaserCode,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #TEXT
      HasSeveranceTaxPaytOblgn,
      @AnalyticsDetails.query.display: #TEXT
      SeveranceTaxRptgType,
      CompanyCodeCurrency,
      TaxRate,
      ProducerOrPurchaserNmbr,
      ValuationDocumentNumber,
      ValuationDocumentYear,
      @AnalyticsDetails.query.display: #TEXT
      TaxExemptCode1,
      @AnalyticsDetails.query.display: #TEXT
      TaxExemptCode2,
      @AnalyticsDetails.query.display: #TEXT
      TaxExemptCode3,
      @AnalyticsDetails.query.display: #TEXT
      TaxExemptCode4,
      @AnalyticsDetails.query.display: #TEXT
      TaxExemptCode5,
      @AnalyticsDetails.query.display: #TEXT
      MasterDataRecordingLvl,
      ExtProducerOrPurchaserNmbr,
      @AnalyticsDetails.query.display: #TEXT
      ProductType,
      TaxPayerIDByAgency,
      ReportingCompany,
      ProductionDate,

      CreatedByUser,
      CreationDateTime,

      @AnalyticsDetails.query.hidden     
      GrossVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      GrossValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxableVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxableValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVol1InBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptVal1InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVol2InBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptVal2InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVol3InBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptVal3InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVol4InBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptVal4InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVol5InBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptVal5InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      EnhncdOilRcvryVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      EnhncdOilRcvryValInCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCostInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      GrossProdnTaxAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      PetroleumExcsTxAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      RevolvingFundTxAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      MarginProdgTxAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      KoiwaTribeTaxAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      ArapahoTribeTaxAmtInCoCdCrcy,
      Country,
      PrimaryGeogrlLocation
}
```
