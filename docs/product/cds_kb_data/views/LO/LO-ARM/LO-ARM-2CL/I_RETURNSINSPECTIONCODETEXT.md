---
name: I_RETURNSINSPECTIONCODETEXT
description: "Returnsinspectioncodetext"
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
  - text-view
  - inspection
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSINSPECTIONCODETEXT

**Returnsinspectioncodetext**

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
| `Language` | ✓ | |  | `sprache` |  |  |
| `ReturnsInspectionCodeDesc` |  | |  | `cast(InspCtlgCodeTxt.kurztext as vdm_qtxt_code preserving type)` |  |  |
| `_ReturnsInspectionCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsInspectionCode` | `I_ReturnsInspectionCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory  : [ #NONE]
@AccessControl.authorizationCheck     : #NOT_REQUIRED
@EndUserText.label                    : 'Returns Inspection Code - Text'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.dataCategory             : #TEXT
@ObjectModel.representativeKey        : 'ReturnsInspectionCode'
@ObjectModel.usageType                : {
  serviceQuality : #A,
  sizeCategory   : #S,
  dataClass      : #MIXED
}
@ObjectModel.modelingPattern          : #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities    : [
  #LANGUAGE_DEPENDENT_TEXT,
  #SQL_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #CDS_MODELING_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled: true
@VDM.viewType                         : #BASIC
@VDM.lifecycle.contract.type          : #PUBLIC_LOCAL_API
@Search.searchable: true

define view entity I_ReturnsInspectionCodeText as
  select from qpct as InspCtlgCodeTxt
  inner join msr_c_inspcat as ProdInspCtlgAndCodeGrp on  InspCtlgCodeTxt.katalogart = ProdInspCtlgAndCodeGrp.def_cat
                                                     and InspCtlgCodeTxt.codegruppe = ProdInspCtlgAndCodeGrp.def_code_grp
  association[0..1] to I_ReturnsInspectionCode as _ReturnsInspectionCode on $projection.ReturnsInspectionCode = _ReturnsInspectionCode.ReturnsInspectionCode 
  association[0..1] to I_Language              as _Language              on $projection.Language = _Language.Language 
{

    //Key
    @ObjectModel.foreignKey.association : '_ReturnsInspectionCode'
    key InspCtlgCodeTxt.code as ReturnsInspectionCode,

    @Semantics.language                 : true
    @ObjectModel.foreignKey.association : '_Language'
    key InspCtlgCodeTxt.sprache as Language,

    //Description
    @Semantics.text                     : true
    @Search:{
      defaultSearchElement: true,
      fuzzinessThreshold: 0.8,
      ranking: #HIGH
    }
    cast(InspCtlgCodeTxt.kurztext as vdm_qtxt_code preserving
    type) as ReturnsInspectionCodeDesc,

    //Associations
    _ReturnsInspectionCode, 
    _Language
}
```
