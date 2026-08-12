---
name: I_INSPECTIONCODEGROUPTEXT
description: "Inspectioncodegrouptext"
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
# I_INSPECTIONCODEGROUPTEXT

**Inspectioncodegrouptext**

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
| `InspectionCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspectionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspSpecAddlCodeGroupText` |  | |  | `cast( qpgt.kurztext as vdm_qktextgr preserving type )` |  |  |
| `_InspectionCatalog` | | ✓ | | | | |
| `_InspectionCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_InspectionCodeGroup` | `I_InspectionCodeGroup` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Code Group - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IINSPCODEGRPTXT'
@ObjectModel.representativeKey: 'InspectionCodeGroup'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Inspectioncodegrouptext
  as select from qpgt
  association [1..1] to I_Inspectioncatalog   as _InspectionCatalog   on  $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog
  association [1..1] to I_InspectionCodeGroup as _InspectionCodeGroup on  $projection.InspectionCatalog   = _InspectionCodeGroup.InspectionCatalog
                                                                      and $projection.InspectionCodeGroup = _InspectionCodeGroup.InspectionCodeGroup
{
      @ObjectModel.foreignKey.association: '_InspectionCatalog'
  key qpgt.katalogart       as InspectionCatalog,
  key qpgt.codegruppe       as InspectionCodeGroup,
      @Semantics.language: true
  key qpgt.sprache          as Language,

      @Semantics.text: true
      cast( qpgt.kurztext as vdm_qktextgr preserving type )  as InspSpecAddlCodeGroupText,

      //  qpgt.ltextv,
      //  qpgt.inaktiv

      /* Associations */
      _InspectionCatalog,
      _InspectionCodeGroup

}
```
