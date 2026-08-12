---
name: I_MATLQUALITYAUTHGROUPTEXT
description: "Matlqualityauthgrouptext"
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
# I_MATLQUALITYAUTHGROUPTEXT

**Matlqualityauthgrouptext**

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
| `Language` | ✓ | |  | `sprache` |  |  |
| `MatlQualityAuthorizationGroup` | ✓ | |  | `cast( qmatauth as vdm_qmatauth preserving type )` |  |  |
| `MatlQltyAuthorizationGrpText` |  | |  | `cast( kurztext as vdm_qmatauth_text preserving type )` |  |  |
| `_MatlQualityAuthGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MatlQualityAuthGroup` | `I_MatlQualityAuthGroup` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Material Authzn Group for Qlty Mgmt - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'MatlQualityAuthorizationGroup',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IMATLQLTYAUTHGRT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Matlqualityauthgrouptext as select from tq01c 

  association [1..1] to I_MatlQualityAuthGroup as _MatlQualityAuthGroup
    on $projection.MatlQualityAuthorizationGroup = _MatlQualityAuthGroup.MatlQualityAuthorizationGroup
  association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key sprache as Language,
  key cast( qmatauth as vdm_qmatauth preserving type ) as MatlQualityAuthorizationGroup,
  
  @Semantics.text: true
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  cast( kurztext as vdm_qmatauth_text preserving type ) as MatlQltyAuthorizationGrpText,    
  
  //Associations
  _MatlQualityAuthGroup,
  _Language
    
}
```
