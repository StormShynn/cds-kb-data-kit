---
name: C_CONTROLCLASSFORKEYDATE
description: "Controlclassforkeydate"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - component:FT-ITR-CLS
  - lob:Other
---
# C_CONTROLCLASSFORKEYDATE

**Controlclassforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalRegulation` | ✓ | |  |  |  |  |
| `ControlClass` | ✓ | |  |  |  |  |
| `TrdClassfctnNmbrSchm` |  | |  |  |  |  |
| `TrdClassfctnNmbrSchmCntnt` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `TrdClassfctnNmbrForOfclDesc` |  | |  |  |  |  |
| `TrdClassfctnNmbrForCnctntdDesc` |  | |  |  |  |  |
| `_Date` | | ✓ | | | | |
| `_OfficialDesc` | | ✓ | | | | |
| `_CnctntdDesc` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchmCntnt` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Date` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CCTRLCLFORKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE  

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_ControlClassForKeyDate
  with parameters
    P_KeyDate : sll_validon
  as select from I_ControlClassForKeyDate (P_KeyDate : $parameters.P_KeyDate)
      association [0..1] to I_CalendarDate         as _Date                       on  $projection.ValidityStartDate = _Date.CalendarDate
{
  key LegalRegulation,
  key ControlClass,
      TrdClassfctnNmbrSchm,
      TrdClassfctnNmbrSchmCntnt,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.text.association: '_OfficialDesc'
      TrdClassfctnNmbrForOfclDesc,
      @ObjectModel.text.association: '_CnctntdDesc'
      TrdClassfctnNmbrForCnctntdDesc,

      // Will be removed later
      _Date,
      _OfficialDesc,
      _CnctntdDesc,
      _TrdClassfctnNmbrSchmCntnt,
      _TrdClassfctnNmbrSchm
}
```
