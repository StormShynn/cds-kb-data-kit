---
name: I_RETURNSINSPECTIONCODE
description: "Returnsinspectioncode"
app_component: LO-ARM-2CL
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
  - LO-ARM
  - interface-view
  - inspection
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSINSPECTIONCODE

**Returnsinspectioncode**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
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
| `ReturnsInspectionCode` | ✓ | |  | `code` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReturnsInspectionCodeText` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory  : [ #NONE]
@AccessControl.authorizationCheck     : #NOT_REQUIRED
@EndUserText.label                    : 'Returns Inspection Code'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : {
  serviceQuality : #A,
  sizeCategory   : #S,
  dataClass      : #MIXED
}
@ObjectModel.representativeKey        : 'ReturnsInspectionCode'
@ObjectModel.modelingPattern          : #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities    : [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #ANALYTICAL_DIMENSION,
  #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name   : 'ReturnsInspectionResult'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName:#LOCAL }
@VDM.viewType                         : #BASIC
@VDM.lifecycle.contract.type          : #PUBLIC_LOCAL_API

define view entity I_ReturnsInspectionCode as
  select from qpcd as InspCtlgCode
  inner join msr_c_inspcat as ProdInspCtlgAndCodeGrp on  InspCtlgCode.katalogart = ProdInspCtlgAndCodeGrp.def_cat
                                                     and InspCtlgCode.codegruppe = ProdInspCtlgAndCodeGrp.def_code_grp
  association[1..*] to I_ReturnsInspectionCodeText as _Text on $projection.ReturnsInspectionCode = _Text.ReturnsInspectionCode 
{

    //Key
    @ObjectModel.text.association : '_Text'
    key InspCtlgCode.code as ReturnsInspectionCode,

    //Associations
    _Text
}
where
  InspCtlgCode.inaktiv = ''
```
