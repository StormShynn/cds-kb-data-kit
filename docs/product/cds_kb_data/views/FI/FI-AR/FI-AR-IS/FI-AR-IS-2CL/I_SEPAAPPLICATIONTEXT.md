---
name: I_SEPAAPPLICATIONTEXT
description: "This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATIONTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Application - Text — CDS view giao diện dựa trên sepa_ctrlt."
keywords:
  - "sepa"
  - "application"
  - "text"
  - "language"
  - "mandate"
  - "name"
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
# I_SEPAAPPLICATIONTEXT

**This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SEPAMandateApplication` | ✓ | |  | `anwnd` | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `SEPAMandateApplicationName` |  | |  | `ltext` | `CHAR(50)` | Mandate Management: Name of Application |
| `_Language` | | ✓ | | | | |
| `_SEPAApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAAPPLICATIONTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPAAPPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META}
@ObjectModel.representativeKey: 'SEPAMandateApplication'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'SEPA Application - Text'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics:{
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
            automatic : true
       }
    }
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_SEPAApplicationText 
    as select from sepa_ctrlt 

    association to parent I_SEPAApplication as _SEPAApplication
        on $projection.SEPAMandateApplication = _SEPAApplication.SEPAMandateApplication
        
    association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key sepa_ctrlt.spras as Language, 
    
    @ObjectModel.foreignKey.association: '_SEPAApplication'
    key sepa_ctrlt.anwnd as SEPAMandateApplication,
    
    @Semantics.text: true
    sepa_ctrlt.ltext as SEPAMandateApplicationName,       

    _Language,
    _SEPAApplication  
}
```
