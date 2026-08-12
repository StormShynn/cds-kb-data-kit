---
name: C_CMPLOBLASGTCMPLNCRATEQ
description: "Cmplnc Oblgn Assign Cmplnc Rate - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value
semantic_en: "Cmplnc Oblgn Assign Cmplnc Rate - Query"
semantic_vi: "Cmplnc Oblgn Assign Cmplnc Rate - Query — CDS view tiêu dùng dựa trên Cmplnc Oblgn Assign Cmplnc Rate - Query."
keywords:
  - "cmplnc"
  - "oblgn"
  - "assign"
  - "rate"
  - "query"
  - "obligation"
  - "assignment"
  - "location"
  - "name"
  - "compliance"
  - "assgmt"
  - "applty"
  - "status"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_CMPLOBLASGTCMPLNCRATEQ

**Cmplnc Oblgn Assign Cmplnc Rate - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` |  | |  |  | `CHAR(2)` | Applicability |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `NumberOfFulfilledObligations` |  | |  |  | `INT4(10)` | Number of Obligations |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `CmplOblAsgtFlfmtAggrgdValue` |  | |  |  | `INT4(10)` | Number of Obligations |
| `FulfillmentPercentageValue` |  | |  | `cast( ( ( NumberOfFulfilledObligations - CmplOblAsgtFlfmtAggrgdValue ) / NumberOfRecords ) * 100 as ehfnd_percentage_fulfilled_obl )` | `DEC(5)` | Percentage of Fullfilled Obligations |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCRATEQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Cmplnc Oblgn Assign Cmplnc Rate - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@OData.publish: true

@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions
define transient view entity C_CmplOblAsgtCmplncRateQ
provider contract analytical_query
as projection on I_CmplOblAsgtCmplncRateCube
{ 
  CmplncObligationAssignmentUUID,
  
  @UI.textArrangement: #TEXT_ONLY
  EHSLocationUUID,
  
  EHSLocationName,
  
  @Consumption.hidden: true
  ComplianceObligationUUID,
  
  @UI.textArrangement: #TEXT_ONLY
  CmplncOblgnAssgmtAppltyStatus,
  
  @UI.textArrangement: #TEXT_ONLY
  CmplncOblgnAssgmtCmplncStatus,
  
  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationTypeCode,
  
  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationDomainCode,
  
  NumberOfFulfilledObligations,
  
  NumberOfRecords,
  
  CmplOblAsgtFlfmtAggrgdValue,
  
   @Aggregation.default: #FORMULA
  cast( ( ( NumberOfFulfilledObligations - CmplOblAsgtFlfmtAggrgdValue ) / NumberOfRecords ) * 100
                as ehfnd_percentage_fulfilled_obl ) as FulfillmentPercentageValue
}
```
