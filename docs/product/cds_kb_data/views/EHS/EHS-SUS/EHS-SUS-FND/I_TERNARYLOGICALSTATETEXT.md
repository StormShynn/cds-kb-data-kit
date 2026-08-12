---
name: I_TERNARYLOGICALSTATETEXT
description: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATETEXT')/$value
semantic_en: "This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Ternary Logical State - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ternary"
  - "logical"
  - "state"
  - "text"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
---
# I_TERNARYLOGICALSTATETEXT

**This CDS view provides you with the supported values for ternary logical states. A ternary logical state represents a three-valued logic system that extends traditional binary logic (true/false) by adding a third state for unknown or indeterminate values. You can use this view as a reference for valid ternary logical state values in your applications and reports, particularly when you need to distinguish between negative values and unknown or indeterminate states. The following values are available: Value Meaning X Yes (blank) No - Unknown To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TernaryLogicalState` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ehfnd_tri_state preserving type )` | `CHAR(1)` | Tristate |
| `TernaryLogicalStateText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TernaryLogicalState` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TernaryLogicalState` | `I_TernaryLogicalState` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TERNARYLOGICALSTATETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName:  'ITRNRYLGCLSTATET'
@AbapCatalog.preserveKey:true 
//@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'TernaryLogicalState'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Ternary Logical State - Text'

// Client handling by session 
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for ddic access
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec   
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #META } 
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_TernaryLogicalStateText as select from dd07t  
    association [0..1] to I_TernaryLogicalState as _TernaryLogicalState on  $projection.TernaryLogicalState = _TernaryLogicalState.TernaryLogicalState
    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language  
  {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    key cast ( substring( domvalue_l, 1, 1 ) as ehfnd_tri_state preserving type ) as TernaryLogicalState,
    @Semantics.text: true
    @UI.hidden: true
    dd07t.ddtext as  TernaryLogicalStateText,
    _TernaryLogicalState,
    _Language
  
}where dd07t.domname = 'EHFND_TRI_STATE' and dd07t.as4local = 'A'
```
