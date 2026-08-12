---
name: I_SEPAMANDATESTATUSCHGREASON
description: "This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSCHGREASON')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "SEPA Mandate Status Change Reason — CDS view giao diện dựa trên sepa_rc_cust."
keywords:
  - "sepa"
  - "mandate"
  - "status"
  - "change"
  - "reason"
  - "application"
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
# I_SEPAMANDATESTATUSCHGREASON

**This CDS view provides the data to answer the following business questions: A SEPA Mandate Status Change Reason is related to which SEPA Mandate Status and SEPA Mandate Application? What are the SEPA Mandate Status Change Reasons? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSCHGREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateApplication` | ✓ | |  | `application` | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `SEPAMandateStatus` | ✓ | |  | `status` | `CHAR(1)` | Mandate Status |
| `SEPAMandateStatusChangeReason` | ✓ | |  | `reason_code` | `CHAR(3)` | Reason Code for Status Change |
| `_Text` | | ✓ | | | | |
| `_Application` | | ✓ | | | | |
| `_SEPAMandateStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SEPAMandateStsChgRsnText` | [0..*] |
| `_Application` | `I_SEPAApplication` | [1..1] |
| `_SEPAMandateStatus` | `I_SEPAMandateStatus` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSCHGREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATESTATUSCHGREASON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPASTCHGRES'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META}
@ObjectModel.representativeKey: 'SEPAMandateStatusChangeReason'
@VDM.viewType: #BASIC

@EndUserText.label: 'SEPA Mandate Status Change Reason'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
      enabled: true
   }
}
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'SEPAMandateStatusChgReason'
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_SEPAMandateStatusChgReason 
    as select from sepa_rc_cust

    association [0..*] to I_SEPAMandateStsChgRsnText as _Text 
    on  $projection.SEPAMandateApplication           = _Text.SEPAMandateApplication
    and $projection.SEPAMandateStatus                = _Text.SEPAMandateStatus
    and $projection.SEPAMandateStatusChangeReason    = _Text.SEPAMandateStatusChangeReason
    
    association [1..1] to I_SEPAApplication          as _Application           
    on $projection.SEPAMandateApplication            = _Application.SEPAMandateApplication
    
    association [1..1] to I_SEPAMandateStatus        as _SEPAMandateStatus
    on $projection.SEPAMandateStatus                 = _SEPAMandateStatus.SEPAMandateStatus 
    
{
    @ObjectModel.foreignKey.association: '_Application'
    key application       as SEPAMandateApplication,
    
    @ObjectModel.foreignKey.association: '_SEPAMandateStatus'
    key status            as SEPAMandateStatus,
    
    @ObjectModel.text.association: '_Text'
    key reason_code       as SEPAMandateStatusChangeReason,
    
    _Text,
    _Application, 
    _SEPAMandateStatus
}
```
