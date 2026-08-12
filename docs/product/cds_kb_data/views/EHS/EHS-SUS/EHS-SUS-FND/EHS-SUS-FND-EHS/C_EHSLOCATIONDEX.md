---
name: C_EHSLOCATIONDEX
description: "This CDS view is used for data extraction and retrieves certain location details, namely location ID and waste registration number. This CDS view provides the data to answer the following business questions: What's the ID or waste registration number of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONDEX')/$value
semantic_en: "This CDS view is used for data extraction and retrieves certain location details, namely location ID and waste registration number. This CDS view provides the data to answer the following business questions: What's the ID or waste registration number of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location — CDS view tiêu dùng (master data) dựa trên I_EHSLocationRoot."
keywords:
  - "ehs"
  - "location"
  - "waste"
  - "registration"
  - "number"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_EHSLOCATIONDEX

**This CDS view is used for data extraction and retrieves certain location details, namely location ID and waste registration number. This CDS view provides the data to answer the following business questions: What's the ID or waste registration number of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `WasteRegistrationNumber` |  | |  |  | `CHAR(60)` | Waste Registration Number |
| `_EHSLocationRevision` | | ✓ | | | | |
| `_EHSLocNameCurrentRevision` | | ✓ | | | | |
| `_EHSLocNameFallbackLanguage` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION

@Analytics:{
dataCategory:#DIMENSION,
internalName: #LOCAL,
dataExtraction: {
  enabled: true,
  delta.changeDataCapture.automatic: true
  }
}

@ObjectModel:{
    representativeKey: 'EHSLocationUUID',
    compositionRoot: true,
    usageType:{ serviceQuality: #A,
                sizeCategory:  #M,
                dataClass: #MASTER },
    sapObjectNodeType.name: 'EHSLocation',
    modelingPattern: #NONE,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.allowExtensions: true
define view entity C_EHSLocationDEX
  as select from I_EHSLocationRoot
{
      @EndUserText.label: 'Location Key'
  key EHSLocationUUID,
 
      EHSLocationID,
      @EndUserText.label: 'Waste Registration Number' 
      WasteRegistrationNumber,
      
      /* Associations */
      _EHSLocationRevision,
      _EHSLocNameCurrentRevision,
      _EHSLocNameFallbackLanguage 
}
```
