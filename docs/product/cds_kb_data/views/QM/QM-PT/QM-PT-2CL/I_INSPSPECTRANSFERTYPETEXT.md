---
name: I_INSPSPECTRANSFERTYPETEXT
description: "Inspspectransfertypetext"
app_component: QM-PT-2CL
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
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECTRANSFERTYPETEXT

**Inspspectransfertypetext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `InspSpecTransferType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qvollst preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspSpecTransferTypeText` |  | |  | `cast( ddtext as vdm_qvollst_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspSpecTransferType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecTransferType` | `I_InspSpecTransferType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Transfer Type of Master Charc - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #C // as function substring is used but #A and #B must not contain functions
    },
    dataCategory: #TEXT,
    representativeKey: 'InspSpecTransferType'
}
@Analytics.technicalName: 'IINSPTRFRTYPT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecTransferTypeText
   as select from dd07t
  
   association [0..1] to I_Language as _Language 
      on $projection.Language = _Language.Language
      
   association [1..1] to I_InspSpecTransferType as _InspSpecTransferType 
      on $projection.InspSpecTransferType = _InspSpecTransferType.InspSpecTransferType

{
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qvollst preserving type ) as InspSpecTransferType,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage                                                            as Language,

    @Semantics.text: true
    cast( ddtext as vdm_qvollst_text preserving type )                        as InspSpecTransferTypeText
    
    /* Associations */ 
    ,_InspSpecTransferType
    ,_Language 

}
where domname = 'QVOLLST' and as4local = 'A'
```
