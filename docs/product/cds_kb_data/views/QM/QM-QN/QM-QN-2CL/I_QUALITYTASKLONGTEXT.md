---
name: I_QUALITYTASKLONGTEXT
description: "Qualitytasklongtext"
app_component: QM-QN-2CL
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
  - QM-QN
  - interface-view
  - text-view
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYTASKLONGTEXT

**Qualitytasklongtext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
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
| `QualityTaskInternalId` | ✓ | |  | `qmnum` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `LongTextInternalNumber` | ✓ | |  | `counter` |  |  |
| `LongTextID` |  | |  | `textid` |  |  |
| `QualityTaskLongText` |  | |  | `content` |  |  |
| `LongTextCreatedByUser` |  | |  | `created_by` |  |  |
| `LongTextCreatedAt` |  | |  | `cast( created_at as qlt_longtext_created_at preserving type )` |  |  |
| `LongTextLastChangedByUser` |  | |  | `changed_by` |  |  |
| `LongTextLastChangedAt` |  | |  | `cast( changed_at as qlt_longtext_changed_at preserving type )` |  |  |
| `MimeType` |  | |  | `cast( mimetype as w3conttype )` |  |  |
| `_QualityTask` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityTask` | `I_QualityTask` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'LongTextInternalNumber'
}
@Analytics.technicalName: 'IQTSKLT'
@EndUserText.label: 'Quality Task Long Text'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityTaskLongText as select from qtaskltext 

    association [1..1] to I_QualityTask         as _QualityTask         on $projection.QualityTaskInternalId = _QualityTask.QualityTaskInternalId    
    association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_QualityTask'
    key qmnum                                                       as QualityTaskInternalId,   
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key langu                                                       as Language,
    
    key counter                                                     as LongTextInternalNumber,
    
    textid                                                          as LongTextID,
    
    @Semantics.text
    content                                                         as QualityTaskLongText,
    
    created_by                                                      as LongTextCreatedByUser,
    cast( created_at as qlt_longtext_created_at preserving type )   as LongTextCreatedAt,
    changed_by                                                      as LongTextLastChangedByUser,
    cast( changed_at as qlt_longtext_changed_at preserving type )   as LongTextLastChangedAt,
    cast( mimetype as w3conttype )                                  as MimeType,
    
    /* Association */
    _QualityTask,
    _Language
        
} where qtaskltext.qmnum like '$%'
    and qtaskltext.manum = '0000'
```
