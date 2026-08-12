---
name: C_PRATAXRPTGHISTORYNMQRY
description: "PRA Tax Reporting History NM Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNMQRY')/$value
semantic_en: "PRA Tax Reporting History NM Query"
semantic_vi: "PRA Tax Reporting History NM Query — CDS view tiêu dùng dựa trên I_PRATaxRptgHistoryNewMexico."
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
# C_PRATAXRPTGHISTORYNMQRY

**PRA Tax Reporting History NM Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNMQRY')/$value) |

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
| `NewMexicoTaxRptgSuffix` | ✓ | |  |  | `CHAR(5)` | Tax 2.0 - New Mexico Suffix for School Dist Code |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  |  | `CHAR(1)` | Tax 2.0 - NM Reversal/Booking/Reversal Adjustment/Adjustment |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ReturnedProductRatio` |  | |  |  | `CHAR(12)` | Returned Product Ratio |
| `ProductionUnitNumber` |  | |  |  | `NUMC(7)` | Tax 2.0 - NM - PUN |
| `EntityIsAffectedByAudit` |  | |  |  | `CHAR(1)` | Tax 2.0 - NM - Affected By Audit Flag (TC 55) |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Texas Master Data Level |
| `OperatorOrPurchaserCode` |  | |  |  | `CHAR(1)` | Tax 2.0 - NM - Operator/Purchaser Indicator |
| `TaxRate` |  | |  |  | `CHAR(3)` | Tax 2.0 - NM - Special Tax Rate Code |
| `ProductType` |  | |  |  | `CHAR(2)` | Tax 2.0 - NM - Product Code |
| `EntityAffiliationCode` |  | |  |  | `CHAR(2)` | Tax 2.0 - NM - Affilication Code |
| `TransactionCode` |  | |  |  | `CHAR(2)` | Tax 2.0 - NM - Transaction Code |
| `ReportingIDByAgency` |  | |  |  | `CHAR(11)` | Tax 2.0 - New Mexico Oil & Gas Reporting ID |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxableVolInBaseUnit` |  | |  |  | `DEC(12)` | Taxable Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `TaxExmptVolInBaseUnit` |  | |  |  | `DEC(12)` | Exempt Volume |
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
| `MktgReimbmtCost1InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 1 |
| `MktgReimbmtCost2InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 2 |
| `MktgReimbmtCost3InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 3 |
| `MktgReimbmtCost4InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 4 |
| `MktgReimbmtCost5InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 5 |
| `MktgReimbmtCost6InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 6 |
| `MktgReimbmtCost7InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 7 |
| `MktgReimbmtCost8InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 8 |
| `MktgReimbmtCost9InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 9 |
| `MktgReimbmtCost10InCoCdCrcy` |  | |  |  | `CURR(11)` | Marketing Reimbmt Cost 10 |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM - Severance Tax Amount |
| `ConservationTaxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM - Conservation Tax Amount |
| `EmergcySchoolTxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM - Emergency School Tax Amount |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM - Ad Valorem Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement |
| `GrossSalesVolInBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - NM Before Lease Plant Split Gross Volume |
| `GrossSalesValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM Before Lease Plant Split Gross Value |
| `TaxProcgAllwncAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - NM Plant Processing Allowance |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYNMQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History NM Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXRPTGHISTNM' 
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRATaxRptgHistoryNMQRY
  as select from I_PRATaxRptgHistoryNewMexico
{
  key CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 1
      @AnalyticsDetails.query.axis: #ROWS
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
  key NewMexicoTaxRptgSuffix,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #TEXT
      HasSeveranceTaxPaytOblgn,
      @AnalyticsDetails.query.display: #TEXT
      SeveranceTaxRptgType,
      CompanyCodeCurrency,
      ReturnedProductRatio,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 3
      ProductionUnitNumber,
      @AnalyticsDetails.query.display: #TEXT
      EntityIsAffectedByAudit,
      @AnalyticsDetails.query.display: #TEXT
      MasterDataRecordingLvl,
      @AnalyticsDetails.query.display: #TEXT
      OperatorOrPurchaserCode,
      TaxRate,
      @AnalyticsDetails.query.display: #TEXT
      ProductType,
      @AnalyticsDetails.query.display: #TEXT
      EntityAffiliationCode,
      @AnalyticsDetails.query.display: #TEXT
      TransactionCode,
      ReportingIDByAgency,
      ValuationDocumentNumber,
      ValuationDocumentYear,
      
      CreatedByUser,
      CreationDateTime,
      
      @AnalyticsDetails.query.hidden     
      GrossVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      GrossValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxableValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxableVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      TaxExmptValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxExmptVolInBaseUnit,
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
      MktgReimbmtCost1InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost2InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost3InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost4InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost5InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost6InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost7InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost8InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost9InCoCdCrcy,
      @AnalyticsDetails.query.hidden     
      MktgReimbmtCost10InCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      SeveranceTaxAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      ConservationTaxAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      EmergcySchoolTxAmtInCoCdCrcy,
      @AnalyticsDetails.query.axis: #COLUMNS
      AdValoremTaxAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxReimbmtAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      GrossSalesVolInBaseUnit,
      @AnalyticsDetails.query.hidden     
      GrossSalesValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden     
      TaxProcgAllwncAmtInCoCdCrcy,
      Country,
      PrimaryGeogrlLocation
}
```
