---
name: I_RETURNSINSPECTIONCODE
description: Returnsinspectioncode
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReturnsInspectionCode` | `InspCtlgCode.code` |
| `_Text` | *Association* |

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
