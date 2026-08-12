---
name: I_INSPECTIONSELECTEDSETTEXT
description: "Inspectionselectedsettext"
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
  - inspection
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONSELECTEDSETTEXT

**Inspectionselectedsettext**

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
| `SelectedCodeSetPlant` | ✓ | |  | `werks` |  |  |
| `InspectionCatalog` | ✓ | |  | `katalogart` |  |  |
| `SelectedCodeSet` | ✓ | |  | `auswahlmge` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `SelectedCodeSetText` |  | |  | `cast( qpamtxt.ktx01 as vdm_qktextam preserving type )` |  |  |
| `_SelectedSetPlant` | | ✓ | | | | |
| `_InspectionCatalog` | | ✓ | | | | |
| `_InspectionSelectedSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SelectedSetPlant` | `I_Plant` | [1..1] |
| `_InspectionCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_InspectionSelectedSet` | `I_InspectionSelectedSet` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Selected Set - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IINSPSELDSETTEXT'
@ObjectModel.representativeKey: 'SelectedCodeSet'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspectionSelectedSetText
  as select from qpamtxt

  association [1..1] to I_Plant                 as _SelectedSetPlant      on $projection.SelectedCodeSetPlant = _SelectedSetPlant.Plant

  association [1..1] to I_Inspectioncatalog     as _InspectionCatalog     on $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog

  association [1..1] to I_InspectionSelectedSet as _InspectionSelectedSet on $projection.SelectedCodeSetPlant = _InspectionSelectedSet.SelectedCodeSetPlant and
                                                                             $projection.InspectionCatalog = _InspectionSelectedSet.InspectionCatalog and
                                                                             $projection.SelectedCodeSet = _InspectionSelectedSet.SelectedCodeSet                                                                            

{
      @ObjectModel.foreignKey.association: '_SelectedSetPlant'
  key qpamtxt.werks      as SelectedCodeSetPlant,
      @ObjectModel.foreignKey.association: '_Inspectioncatalog'
  key qpamtxt.katalogart as InspectionCatalog,
      @ObjectModel.foreignKey.association: '_InspectionSelectedSet'
  key qpamtxt.auswahlmge as SelectedCodeSet,
      @Semantics.language: true
  key qpamtxt.language as Language,
      @Semantics.text: true
  cast( qpamtxt.ktx01 as vdm_qktextam preserving type ) as SelectedCodeSetText,

      /* Associations */
      _SelectedSetPlant,
      _InspectionCatalog,
      _InspectionSelectedSet
}
```
