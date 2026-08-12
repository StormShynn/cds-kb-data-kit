---
name: I_SEPAMANDATESTATUSTEXT
description: "This CDS view provides the data to answer the following business questions: What is a SEPA Mandate status? How many SEPA Mandates statuses does a SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is a SEPA Mandate status? How many SEPA Mandates statuses does a SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Mandate Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "sepa"
  - "mandate"
  - "status"
  - "text"
  - "language"
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
# I_SEPAMANDATESTATUSTEXT

**This CDS view provides the data to answer the following business questions: What is a SEPA Mandate status? How many SEPA Mandates statuses does a SEPA Mandate have? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SEPAMandateStatus` | ✓ | |  | `cast(dd07t.domvalue_l as sepa_status)` | `CHAR(1)` | Mandate Status |
| `SEPAMandateStatusName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SEPAMandateStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SEPAMandateStatus` | `I_SEPAMandateStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPASTATUSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'SEPA Mandate Status - Text'

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SEPAMandateStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
       enabled: true
    }
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true
define view I_SEPAMandateStatusText as select from dd07t 
  association [1..1] to I_SEPAMandateStatus as _SEPAMandateStatus   on $projection.SEPAMandateStatus = _SEPAMandateStatus.SEPAMandateStatus
  association [0..1] to I_Language          as _Language            on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                  as Language,
      
      @ObjectModel.foreignKey.association: '_SEPAMandateStatus'
  key cast(dd07t.domvalue_l  as sepa_status)            as SEPAMandateStatus,
    
      @Semantics.text: true
      ddtext                                            as SEPAMandateStatusName,
        
      _SEPAMandateStatus,
      _Language
    
}
where dd07t.domname  = 'SEPA_STATUS' 
  and dd07t.as4local = 'A'
```
