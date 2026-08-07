---
name: I_INSPECTIONCODEGROUPTEXT
description: Inspectioncodegrouptext
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
