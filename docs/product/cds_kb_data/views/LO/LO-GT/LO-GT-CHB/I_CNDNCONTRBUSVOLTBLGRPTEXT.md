---
name: I_CNDNCONTRBUSVOLTBLGRPTEXT
description: "Cndncontrbusvoltblgrptext"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - text-view
  - text
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRBUSVOLTBLGRPTEXT

**Cndncontrbusvoltblgrptext**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BusVolTableGroup` | ✓ | |  | `bvtab_group` |  |  |
| `BusVolTableGroupDesc` |  | |  | `text` |  |  |
| `_BusVolTableGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolTableGroup` | `I_CndnContrBusVolTblGrp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Volume Table Group - Text'
@ObjectModel: {
    dataCategory:           #TEXT,
    representativeKey:      'BusVolTableGroup',
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCBUSVOLTABGRPT'
}
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_CndnContrBusVolTblGrpText
  as select from wb2_c_bvtab_grpt
  association [0..1] to I_CndnContrBusVolTblGrp as _BusVolTableGroup on $projection.BusVolTableGroup = _BusVolTableGroup.BusVolTableGroup
  association [0..1] to I_Language              as _Language         on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras       as Language,

      @ObjectModel.foreignKey.association: '_BusVolTableGroup'
  key bvtab_group as BusVolTableGroup,

      @Semantics.text: true
      text        as BusVolTableGroupDesc,

      //Associations
      _BusVolTableGroup,
      _Language

}
```
