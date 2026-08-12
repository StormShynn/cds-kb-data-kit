---
name: I_CNDNCONTRBUSVOLTBLGRPTEXT
description: "Cndncontrbusvoltblgrptext"
app_component: LO-GT-CHB
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
