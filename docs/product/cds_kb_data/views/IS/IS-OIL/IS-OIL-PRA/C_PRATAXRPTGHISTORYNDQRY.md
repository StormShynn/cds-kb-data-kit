---
name: C_PRATAXRPTGHISTORYNDQRY
description: "PRA Tax Reporting History ND Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNDQRY')/$value
semantic_en: "PRA Tax Reporting History ND Query"
semantic_vi: "PRA Tax Reporting History ND Query — CDS view tiêu dùng dựa trên I_PRATaxRptgHistoryND."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
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
# C_PRATAXRPTGHISTORYNDQRY

**PRA Tax Reporting History ND Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNDQRY')/$value) |

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
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `NorthDakotaTaxExmpWellType` |  | |  |  | `CHAR(2)` | Tax 2.0: ND Well Code |
| `NorthDakotaPostalAreaCode` |  | |  |  | `CHAR(4)` | Tax 2.0: ND Posting Code |
| `APIWellNumber` |  | |  |  | `CHAR(8)` | Tax 2.0 ND API Number |
| `APIWellName` |  | |  |  | `CHAR(35)` | Tax 2.0 North Dakota API Name |
| `APIGravityRatio` |  | |  |  | `DEC(3)` | Tax 2.0 : ND Oil Gravity |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Customer / Vendor Number |
| `FederalIDByAgency` |  | |  |  | `NUMC(9)` | Tax 2.0: Federal ID Number |
| `TaxPayerIDByAgency` |  | |  |  | `CHAR(9)` | Tax 2.0 ND Taxpayer Number |
| `Reservoir` |  | |  |  | `CHAR(3)` | Tax 2.0: ND Pool Code |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `OilVolumeInBarrels` |  | |  |  | `DEC(13)` | Tax 2.0 - ND Barrels Of Oil Purchased or Sold |
| `OilValueInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Oil Value Purchased Or Sold |
| `TaxExmpValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 ND Ex Val Pur/Sold |
| `TaxableOilValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Oil Taxable Value |
| `ProdnTaxDueAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Production Tax Due |
| `ProdnTxPrevPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Tax Previously Paid |
| `ProdnTaxOthPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 ND Production Tax Paid By Others |
| `ProdnTaxPaidAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Production Tax Paid By Report |
| `ExtractnTxDueAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Due |
| `ExtractnTxPrevAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Previously Paid |
| `ExtractnTaxOthAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Others |
| `ExtractnTaxPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Report |
| `AddlValInCoCodeCrcy` |  | |  |  | `CURR(6)` | Tax 2.0 : ND Additional Value |
| `MktgCost01InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost03InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost04InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost05InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost06InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost07InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost08InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost09InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost10InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNDQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNDQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History ND Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXRPTGHND'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
define view C_PRATaxRptgHistoryNDQry
  as select from I_PRATaxRptgHistoryND
{
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  key SalesDate,
  key Product,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key Well,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key WellCompletion,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key MeasurementPoint,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key DivisionOfInterest,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key DeliveryNetwork,
  key PRAContract,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key VolumeType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  key TaxClassification,
  @AnalyticsDetails.query.display: #TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      @AnalyticsDetails.query.display: #TEXT
      ProducerOrPurchaserCode,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #TEXT
      HasSeveranceTaxPaytOblgn,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 2
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.display: #TEXT
      SeveranceTaxRptgType,
      BaseUnit,
      CompanyCodeCurrency,
      @AnalyticsDetails.query.display: #TEXT
      NorthDakotaTaxExmpWellType,
      @AnalyticsDetails.query.display: #TEXT
      NorthDakotaPostalAreaCode,
      APIWellNumber,
      APIWellName,
      @AnalyticsDetails.query.hidden
      APIGravityRatio,
      @AnalyticsDetails.query.display: #TEXT
      ProducerOrPurchaserNmbr,
      FederalIDByAgency,
      TaxPayerIDByAgency,
      @AnalyticsDetails.query.display: #TEXT
      Reservoir,
      ValuationDocumentNumber,
      ValuationDocumentYear,
      CreatedByUser,
      CreationDateTime,
      Country,
      PrimaryGeogrlLocation,
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.hidden
      OilVolumeInBarrels,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      OilValueInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      TaxExmpValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      TaxableOilValInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      ProdnTaxDueAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ProdnTxPrevPaidAmtInCoCdCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ProdnTaxOthPaidAmtInCoCdCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ProdnTaxPaidAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ExtractnTxDueAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ExtractnTxPrevAmtInCoCdCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ExtractnTaxOthAmtInCoCdCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      ExtractnTaxPaidAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      AddlValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost01InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost02InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost03InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost04InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost05InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost06InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost07InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost08InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost09InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgCost10InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.axis: #COLUMNS
      MktgReimbmtCostInCoCodeCrcy
}
```
