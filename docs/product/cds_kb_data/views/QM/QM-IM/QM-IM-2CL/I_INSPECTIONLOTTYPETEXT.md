---
name: I_INSPECTIONLOTTYPETEXT
description: "Inspectionlottypetext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - inspection
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTTYPETEXT

**Inspectionlottypetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  | `art` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionLotTypeText` |  | |  | `cast( tq30t.kurztext as vdm_qpart_text preserving type )` |  |  |
| `_InspectionLotType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotType` | `I_InspectionLotType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTTYPETEXT'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Type - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InspectionLotType'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view I_InspectionLotTypeText as select from tq30t 
 
   association [1..1] to I_InspectionLotType     as _InspectionLotType
      on     $projection.InspectionLotType   = _InspectionLotType.InspectionLotType

   association [0..1] to I_Language as _Language
      on     $projection.Language = _Language.Language

{
    key tq30t.art as InspectionLotType,
    @Semantics.language: true
    key tq30t.sprache as Language,
    @Semantics.text: true
    @Search : { defaultSearchElement: true,
                    fuzzinessThreshold: 0.8 }
    cast( tq30t.kurztext as vdm_qpart_text preserving type ) as InspectionLotTypeText,
//    tq30t.ltxa1,
    
    /* Associations */
    _InspectionLotType, 
    _Language
}
```
