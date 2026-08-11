---
name: I_EHSLOCCLASSIFIERNAME
description: "This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value
semantic_en: "This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Classifier Name — CDS view giao diện dựa trên ehfndd_clsf_text."
keywords:
  - "ehs"
  - "location"
  - "classifier"
  - "name"
  - "central"
  - "text"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - transaction
---
# I_EHSLOCCLASSIFIERNAME

**This CDS view supports the extraction of data for the name of an EHS location classifier for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location classifier data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocClassifierID` | ✓ | |  | `cast( bco_id as ehfnd_clsf_bco_id preserving type )` | `CHAR(40)` | Location Classifier Identifier |
| `EHSLocClassifierCentralID` | ✓ | |  | `cast( bco_key as ehfnd_clsf_bco_key preserving type )` | `CHAR(32)` | Location Classifier Character Key |
| `EHSLocClassifierNameUUID` |  | |  | `cast( db_key as ehfnd_clsf_text_key preserving type )` | `RAW(16)` | Location Classifier Text Key |
| `EHSLocClassifierUUID` |  | |  | `cast( parent_key as ehfnd_clsf_key_ref_nc preserving type )` | `RAW(16)` | Location Classifier Key |
| `EHSLocClassifierText` |  | |  | `cast( text as ehfnd_clsf_name preserving type )` | `CHAR(255)` | Location Classifier Name |
| `Language` |  | |  | `language` | `LANG(1)` | Language |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCCLASSIFIERNAME')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EHS Location Classifier Name'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ] }
@ObjectModel.sapObjectNodeType.name: 'EHSLocationClassifierName'

@VDM.viewType: #BASIC
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  }
}
define view entity I_EHSLocClassifierName
  as select from ehfndd_clsf_text
{
  key cast( bco_id as ehfnd_clsf_bco_id preserving type )         as EHSLocClassifierID,
  key cast( bco_key as ehfnd_clsf_bco_key preserving type )       as EHSLocClassifierCentralID,

      cast( db_key as ehfnd_clsf_text_key preserving type )       as EHSLocClassifierNameUUID,
      cast( parent_key as ehfnd_clsf_key_ref_nc preserving type ) as EHSLocClassifierUUID,
      cast( text as ehfnd_clsf_name preserving type )             as EHSLocClassifierText,
      language                                                    as Language
}
```
