---
name: C_PRATAXRPTGHISTORYTXQRY
description: "PRA Tax Reporting History Texas Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYTXQRY')/$value
semantic_en: "PRA Tax Reporting History Texas Query"
semantic_vi: "PRA Tax Reporting History Texas Query — CDS view tiêu dùng dựa trên I_PRATaxRptgHistoryTexas."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "texas"
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
# C_PRATAXRPTGHISTORYTXQRY

**PRA Tax Reporting History Texas Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYTXQRY')/$value) |

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
| `TaxClassification` |  | |  |  | `CHAR(4)` | Tax Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SeveranceTaxType` |  | |  |  | `CHAR(2)` | Severance Tax Type |
| `TierTaxType` |  | |  |  | `CHAR(1)` | Tier Tax |
| `TaxRptgRvslOrBkgOrAdjmt` |  | |  |  | `CHAR(1)` | Reversal/Booking/Adjustment |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `APIWellNumber` |  | |  |  | `CHAR(8)` | API Well Number |
| `TexasCounty` |  | |  |  | `NUMC(3)` | Texas County Identifier |
| `ReportingAgencyLease` |  | |  |  | `CHAR(7)` | Texas Lease Number |
| `OnOrOffLeaseSale` |  | |  |  | `CHAR(1)` | Texas On-/Off-Lease Sale Code |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Texas Master Data Level |
| `OtherPartyTaxPayerIDByAgency` |  | |  |  | `CHAR(11)` | Texas Taxpayer Number of Other Party |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Producer/Purchaser |
| `CommodityType` |  | |  |  | `CHAR(3)` | Texas Commodity Type |
| `TaxExmpType` |  | |  |  | `NUMC(2)` | Texas Exemption Type |
| `TaxPayerIDByAgency` |  | |  |  | `NUMC(11)` | Texas Taxpayer Number |
| `TaxPayerName` |  | |  |  | `CHAR(100)` | Taxpayer Name |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `APIGravityRatio` |  | |  |  | `DEC(3)` | Gravity |
| `TransacVolInBaseUnit` |  | |  |  | `DEC(12)` | Lease Gross Volume |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  |  | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  |  | `DEC(12)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `GrossTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYTXQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYTXQRY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Texas Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVTAXTXHISTQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRATaxRptgHistoryTXQry 
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRATaxRptgHistoryTexas
{
CompanyCode, 
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.variableSequence: 1
SalesDate, 
  @AnalyticsDetails.query.display: #KEY_TEXT
Product, 
Well, 
  @AnalyticsDetails.query.display: #KEY_TEXT
WellCompletion, 
  @AnalyticsDetails.query.display: #KEY_TEXT
MeasurementPoint, 
JointVenture, 
  @AnalyticsDetails.query.display: #KEY_TEXT
DivisionOfInterest, 
  @AnalyticsDetails.query.display: #KEY_TEXT
DeliveryNetwork, 
  @AnalyticsDetails.query.display: #KEY_TEXT
PRAContract, 
  @AnalyticsDetails.query.display: #KEY_TEXT
VolumeType, 
  @AnalyticsDetails.query.display: #TEXT
TaxClassification, 
  @Consumption.filter: { 
      hidden: true,
      defaultValue: 'US'
      }
  @AnalyticsDetails.query.display: #TEXT
Country,
  @Consumption.filter: { 
      hidden: true,
      defaultValue: '42'
      }
  @AnalyticsDetails.query.display: #TEXT
PrimaryGeogrlLocation,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #TEXT
SeveranceTaxType, 
  @AnalyticsDetails.query.display: #TEXT
TierTaxType, 
  @AnalyticsDetails.query.display: #TEXT
TaxRptgRvslOrBkgOrAdjmt, 
  @AnalyticsDetails.query.display: #TEXT
ProducerOrPurchaserCode, 
UnitJointVenture, 
  @AnalyticsDetails.query.display: #TEXT
HasSeveranceTaxPaytOblgn, 
  @AnalyticsDetails.query.display: #TEXT
SeveranceTaxRptgType, 
APIWellNumber, 
  @AnalyticsDetails.query.display: #TEXT
TexasCounty, 
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.display: #KEY_TEXT
ReportingAgencyLease, 
  @AnalyticsDetails.query.display: #TEXT
OnOrOffLeaseSale, 
  @AnalyticsDetails.query.display: #TEXT
MasterDataRecordingLvl, 
OtherPartyTaxPayerIDByAgency, 
ProducerOrPurchaserNmbr, 
  @AnalyticsDetails.query.display: #TEXT
CommodityType, 
TaxExmpType, 
TaxPayerIDByAgency, 
TaxPayerName, 
CreatedByUser, 
CreationDateTime, 

@AnalyticsDetails.query.hidden     
NumberOfItems,
BaseUnit, 
@AnalyticsDetails.query.hidden     
APIGravityRatio, 
@AnalyticsDetails.query.hidden     
TransacVolInBaseUnit, 
@AnalyticsDetails.query.hidden     
GrossVolInBaseUnit, 
@AnalyticsDetails.query.hidden     
GrossValInCoCodeCrcy, 
@AnalyticsDetails.query.hidden     
TaxableVolInBaseUnit, 
@AnalyticsDetails.query.hidden     
TaxableValInCoCodeCrcy, 
@AnalyticsDetails.query.hidden     
TaxExmptVolInBaseUnit, 
@AnalyticsDetails.query.hidden     
TaxExmptValInCoCodeCrcy, 
@AnalyticsDetails.query.hidden     
MktgCostInCoCodeCrcy, 
@AnalyticsDetails.query.hidden     
MktgReimbmtCostInCoCodeCrcy, 
@AnalyticsDetails.query.axis: #COLUMNS    
GrossTaxAmtInCoCodeCrcy, 
@AnalyticsDetails.query.hidden     
TaxReimbmtAmtInCoCodeCrcy
}
```
