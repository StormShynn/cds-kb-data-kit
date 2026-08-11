---
name: C_EHSLOCATIONDEX
description: "This CDS view is used for data extraction and retrieves certain location details, namely location ID and waste registration number. This CDS view provides the data to answer the following business questions: What's the ID or waste registration number of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
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
