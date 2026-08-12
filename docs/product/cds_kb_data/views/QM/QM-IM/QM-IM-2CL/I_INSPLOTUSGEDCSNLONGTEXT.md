---
name: I_INSPLOTUSGEDCSNLONGTEXT
description: "Insplotusgedcsnlongtext"
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
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTUSGEDCSNLONGTEXT

**Insplotusgedcsnlongtext**

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
| `InspectionLot` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `InspLotUsageDecisionLongText` |  | |  | `InspectionLotLongText` |  |  |
| `LongTextCreatedByUser` |  | |  |  |  |  |
| `LongTextCreatedAt` |  | |  |  |  |  |
| `LongTextLastChangedByUser` |  | |  |  |  |  |
| `LongTextLastChangedAt` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspLotUsageDecision` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1] |
| `_InspLotUsageDecision` | `I_InspLotUsageDecision` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot Usage Decision Long Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
 [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'InspectionLot'
}
@Analytics.technicalName: 'IINSPLOTUSDLTXT'
define view entity I_InspLotUsgeDcsnLongText as select from I_InspectionLotAllLongText
    association [1] to I_InspectionLot as _InspectionLot
      on $projection.InspectionLot = _InspectionLot.InspectionLot 
    association [1] to I_InspLotUsageDecision as _InspLotUsageDecision
      on $projection.InspectionLot = _InspLotUsageDecision.InspectionLot 
    association [1..1] to I_Language as _Language            
      on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_InspLotUsageDecision'
    key InspectionLot,  
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key Language,
    
    @Semantics.text: true  
    InspectionLotLongText as InspLotUsageDecisionLongText, 
    LongTextCreatedByUser,
    LongTextCreatedAt,
    LongTextLastChangedByUser,
    LongTextLastChangedAt,

    /* Association */ 
    _InspectionLot,
    _InspLotUsageDecision,
    _Language        
}
where ItemCounter = 2
```
