---
name: C_LISTEDSUBSTANCEELEMENTDEX
description: "This CDS view retrieves the ID of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the IDs of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCEELEMENTDEX')/$value
semantic_en: "This CDS view retrieves the ID of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the IDs of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Listed Substance Element — CDS view tiêu dùng dựa trên I_LstdSubstWthVarAndGrp."
keywords:
  - "listed"
  - "substance"
  - "element"
  - "char"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-CI
  - consumption-view
  - EHS-SUS
  - EHS-SUS-CI
---
# C_LISTEDSUBSTANCEELEMENTDEX

**This CDS view retrieves the ID of listed substance elements in the system. This CDS view provides the data to answer the following business questions: What are the IDs of the listed substance elements in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCEELEMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` | ✓ | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceCharUUID` | ✓ | |  |  | `CHAR(32)` | BCO KEY |
| `ListedSubstanceUUID` | ✓ | |  |  | `RAW(16)` | Listed Substance Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCEELEMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDSUBSTANCEELEMENTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Listed Substance Element'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ListedSubstanceElement'
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

define view entity C_ListedSubstanceElementDEX
  as select from I_LstdSubstWthVarAndGrp
{
      @EndUserText.label: 'Listed Substance Identifier'
  key ListedSubstance,
      @EndUserText.label: 'Listed Substance Character Key'
      @Semantics.uuid: true
  key ListedSubstanceCharUUID,
      @EndUserText.label: 'Listed Substance Key'
  key ListedSubstanceUUID
 
}
```
