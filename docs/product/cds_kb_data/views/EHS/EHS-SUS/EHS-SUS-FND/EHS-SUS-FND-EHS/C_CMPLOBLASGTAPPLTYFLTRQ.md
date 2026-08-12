---
name: C_CMPLOBLASGTAPPLTYFLTRQ
description: "This CDS view retrieves the applicability status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in Applicable status? How many compliance obligation assignments are in Exempted status? How many compliance obligation assignments are in Not Applicable status? How many compliance obligation assignments are in Not Assessed status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTAPPLTYFLTRQ')/$value
semantic_en: "This CDS view retrieves the applicability status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in Applicable status? How many compliance obligation assignments are in Exempted status? How many compliance obligation assignments are in Not Applicable status? How many compliance obligation assignments are in Not Assessed status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Compl Obligation Applicability - Query — CDS view tiêu dùng dựa trên Compl Obligation Applicability - Query."
keywords:
  - "compl"
  - "obligation"
  - "applicability"
  - "query"
  - "cmplnc"
  - "assignment"
  - "location"
  - "compliance"
  - "oblgn"
  - "assgmt"
  - "applty"
  - "status"
  - "number"
  - "records"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_CMPLOBLASGTAPPLTYFLTRQ

**This CDS view retrieves the applicability status of the compliance obligation assignment. This CDS view provides the data to answer the following business questions: How many compliance obligation assignments are in Applicable status? How many compliance obligation assignments are in Exempted status? How many compliance obligation assignments are in Not Applicable status? How many compliance obligation assignments are in Not Assessed status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTAPPLTYFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `CmplncOblgnAssgmtAppltyStatus` |  | |  |  | `CHAR(2)` | Applicability |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTAPPLTYFLTRQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTAPPLTYFLTRQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Compl Obligation Applicability - Query'
@VDM.viewType: #CONSUMPTION

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

define transient view entity C_CmplOblAsgtAppltyFltrQ
  provider contract analytical_query
  as projection on I_CmplncOblgnAssignmentCube
{
  @Consumption.hidden: true
  CmplncObligationAssignmentUUID,
  
  @UI.textArrangement: #TEXT_ONLY
  EHSLocationUUID,
  
  @Consumption.hidden: true
  ComplianceObligationUUID,

  @UI.textArrangement: #TEXT_ONLY
  CmplncOblgnAssgmtAppltyStatus,

  NumberOfRecords,

  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationTypeCode,
  
  @UI.textArrangement: #TEXT_ONLY
  ComplianceObligationDomainCode 
}
```
