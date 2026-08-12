---
name: I_SEPAAPPLICATIONTEXT
description: "This CDS view provides the data to answer the following business questions: What is SEPA Mandate application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
