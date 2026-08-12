---
name: C_EHSLOCATIONREVISIONNAMEDEX
description: "This CDS view retrieves the name of each location for each of its respective revisions. This CDS view provides the data to answer the following business questions: What's the name of a particular location revision? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONNAMEDEX')/$value
semantic_en: "This CDS view retrieves the name of each location for each of its respective revisions. This CDS view provides the data to answer the following business questions: What's the name of a particular location revision? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Revision Name — CDS view tiêu dùng (master data) dựa trên I_EHSLocationName."
keywords:
  - "ehs"
  - "location"
  - "revision"
  - "name"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_EHSLOCATIONREVISIONNAMEDEX

**This CDS view retrieves the name of each location for each of its respective revisions. This CDS view provides the data to answer the following business questions: What's the name of a particular location revision? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONNAMEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionNameUUID` | ✓ | |  |  | `RAW(16)` | EHS Location - Revision Name UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `Language` |  | |  |  | `LANG(1)` | Language |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONNAMEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONREVISIONNAMEDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location Revision Name'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ 
 
    usageType:{ serviceQuality: #A,
                sizeCategory:  #L,
                dataClass: #MASTER },
  modelingPattern: #NONE,
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  sapObjectNodeType.name: 'EHSLocationRevisionName'
 
}
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Metadata.allowExtensions:true
define view entity C_EHSLocationRevisionNameDEX
  as select from I_EHSLocationName
{
 @EndUserText.label: 'Location Revision Name'
 key EHSLocationRevisionNameUUID,
 @EndUserText.label: 'Location Key'
 EHSLocationUUID,
 @EndUserText.label: 'Location Revision Key'
 EHSLocationRevisionUUID,
 
 @Semantics.language: true
 Language,
 @EndUserText.label: 'Location Name'
 @Semantics.text: true
 EHSLocationName,
 
 _EHSLocationRevisionBasic
 
}
```
