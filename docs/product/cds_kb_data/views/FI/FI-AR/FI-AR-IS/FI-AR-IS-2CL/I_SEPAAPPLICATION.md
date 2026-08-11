---
name: I_SEPAAPPLICATION
description: "This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATION')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Application Types — CDS view giao diện dựa trên sepa_cust."
keywords:
  - "sepa"
  - "application"
  - "types"
  - "mandate"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_SEPAAPPLICATION

**This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateApplication` | ✓ | |  | `anwnd` | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPAAPP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META},
  supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET],
  representativeKey: 'SEPAMandateApplication',
  modelingPattern: #ANALYTICAL_DIMENSION,
  sapObjectNodeType.name: 'SEPAApplication'
} 
@VDM.viewType: #BASIC
@EndUserText.label: 'SEPA Application Types'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
      enabled: true
   }
}
@Analytics.internalName:#LOCAL 
define root view I_SEPAApplication 
    as select from sepa_cust
    composition [0..*] of I_SEPAApplicationText as _Text
{
    @ObjectModel.text.association: '_Text'
    key anwnd as SEPAMandateApplication,
    
    _Text 
}
where activ = 'X'
```
