---
name: I_SEPAMANDATESTSCHGRSNTEXT
description: "This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTSCHGRSNTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Mandate Status Change Reason - Text — CDS view giao diện dựa trên sepa_rc_cust_txt."
keywords:
  - "sepa"
  - "mandate"
  - "status"
  - "change"
  - "reason"
  - "text"
  - "application"
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
  - bo:salesorder
---
# I_SEPAMANDATESTSCHGRSNTEXT

**This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTSCHGRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateApplication` | ✓ | |  | `application` | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `SEPAMandateStatus` | ✓ | |  | `status` | `CHAR(1)` | Mandate Status |
| `SEPAMandateStatusChangeReason` | ✓ | |  | `reason_code` | `CHAR(3)` | Reason Code for Status Change |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SEPAMandateStsChangeReasonName` |  | |  | `description` | `CHAR(50)` | Description of Reason for Status Change |
| `_SEPAChangeReason` | | ✓ | | | | |
| `_Application` | | ✓ | | | | |
| `_SEPAMandateStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SEPAChangeReason` | `I_SEPAMandateStatusChgReason` | [0..1] |
| `_Application` | `I_SEPAApplication` | [1..1] |
| `_SEPAMandateStatus` | `I_SEPAMandateStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTSCHGRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTSCHGRSNTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPACHGRSNTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel.representativeKey: 'SEPAMandateStatusChangeReason'
@VDM.viewType: #BASIC

@EndUserText.label: 'SEPA Mandate Status Change Reason - Text'
@Analytics:{
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
            automatic : true
       }
    }
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_SEPAMandateStsChgRsnText 
    as select from sepa_rc_cust_txt 
    
    association [0..1] to I_SEPAMandateStatusChgReason as _SEPAChangeReason
        on  $projection.SEPAMandateApplication         = _SEPAChangeReason.SEPAMandateApplication
        and $projection.SEPAMandateStatus              = _SEPAChangeReason.SEPAMandateStatus
        and $projection.SEPAMandateStatusChangeReason  = _SEPAChangeReason.SEPAMandateStatusChangeReason
        
    association [1..1] to I_SEPAApplication            as _Application           
    on $projection.SEPAMandateApplication              = _Application.SEPAMandateApplication
    
    association [1..1] to I_SEPAMandateStatus          as _SEPAMandateStatus
    on $projection.SEPAMandateStatus                   = _SEPAMandateStatus.SEPAMandateStatus 
    
    association [0..1] to I_Language                   as _Language 
        on $projection.Language                        = _Language.Language
{
    @ObjectModel.foreignKey.association: '_Application'
    key application       as SEPAMandateApplication,
    
    @ObjectModel.foreignKey.association: '_SEPAMandateStatus'
    key status            as SEPAMandateStatus,
    
    @ObjectModel.foreignKey.association: '_SEPAChangeReason'
    key reason_code       as SEPAMandateStatusChangeReason,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras             as Language, 
    
    @Semantics.text: true
    description           as SEPAMandateStsChangeReasonName,
    
    _Language,
    _SEPAChangeReason,
    _SEPAMandateStatus,
    _Application
}
```
