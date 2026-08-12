---
name: I_INSPRESULTATTRIBUTETEXT
description: "Inspresultattributetext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPRESULTATTRIBUTETEXT

**Inspresultattributetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionResultAttribute` | ✓ | |  | `attribut` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionResultAttributeText` |  | |  | `kurztext` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspectionResultAttribute` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspectionResultAttribute` | `I_InspectionResultAttribute` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPRESATTRT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Inspection Result Attribute - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InspectionResultAttribute'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view I_Inspresultattributetext 
   as select from tq77t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_InspectionResultAttribute as _InspectionResultAttribute 
      on $projection.InspectionResultAttribute = _InspectionResultAttribute.InspectionResultAttribute
{
    key tq77t.attribut as InspectionResultAttribute,
    @Semantics.language: true
    key tq77t.sprache as Language,
    @Semantics.text: true
    tq77t.kurztext as InspectionResultAttributeText, 
    _InspectionResultAttribute, //decomment only if no problems in analytics
    _Language 
}
```
