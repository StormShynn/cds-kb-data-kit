---
name: C_CMPLOBLASGTCMPLNCFLTRQ
description: "This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value
semantic_en: "This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Obligation Assignment Compliance - Query — CDS view tiêu dùng dựa trên Obligation Assignment Compliance - Query."
keywords:
  - "obligation"
  - "assignment"
  - "compliance"
  - "query"
  - "cmplnc"
  - "location"
  - "name"
  - "oblgn"
  - "assgmt"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_CMPLOBLASGTCMPLNCFLTRQ

**This CDS view retrieves the compliance (fulfillment) status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many obligation assignments are in Fulfilled status? How many obligation assignments are in Fulfilled with Variance status? How many obligation assignments are in Not Assessed status? How many obligation assignments are in Not Fulfilled status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `NumberOfFulfilledObligations` |  | |  |  | `INT4(10)` | Number of Fulfilled Obligations |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `FulfillmentPercentageValue` |  | |  | `cast( case NumberOfFulfilledObligations when NumberOfRecords then ( NumberOfFulfilledObligations / NumberOfRecords ) * 100 else ( NumberOfFulfilledObligations - 1 ) / NumberOfRecords * 100 end as ehfnd_percentage_fulfilled_obl )` | `DEC(5)` | Percentage of Fullfilled Obligations |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTCMPLNCFLTRQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Obligation Assignment Compliance - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@OData.publish: true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}
define transient view entity C_CmplOblAsgtCmplncFltrQ
  provider contract analytical_query
  as projection on I_CmplncOblgnAssignmentCube

{
  CmplncObligationAssignmentUUID,

  @EndUserText.label: 'Location'
  @UI.textArrangement: #TEXT_ONLY
  EHSLocationUUID,

  EHSLocationName,

  @Consumption.hidden: true
  ComplianceObligationUUID,

  @EndUserText.label: 'Status'
  @UI.textArrangement: #TEXT_ONLY
  CmplncOblgnAssgmtCmplncStatus,

  @EndUserText.label: 'Number of Obligations'
  NumberOfRecords,
  
  NumberOfFulfilledObligations,
  
  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationTypeCode,

  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationDomainCode,
  
  //Check if All Compliance Obligations are fullfilled
  //if NOT - substract 1 which represents the '00000000000000000000000000000000' record.
  @Aggregation.default: #FORMULA
  cast( case NumberOfFulfilledObligations
                when NumberOfRecords then ( NumberOfFulfilledObligations / NumberOfRecords ) * 100
                else ( NumberOfFulfilledObligations - 1 ) / NumberOfRecords * 100
                end
                as ehfnd_percentage_fulfilled_obl ) as FulfillmentPercentageValue              
}
```
