---
name: I_RENOTICEPROCEDURE
description: Renoticeprocedure
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RENOTICEPROCEDURE

**Renoticeprocedure**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RENoticeProcedure` | ✓ | |  | `ntproc` |  |  |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RENoticeProcedureText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRENTPROC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Contract Notice Procedure'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'RENoticeProcedure'
@ObjectModel.semanticKey: ['RENoticeProcedure']
@Search.searchable: true 
@Analytics.internalName:#LOCAL 
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view I_RENoticeProcedure
  as select from tivtmntproc
  association [0..*] to I_RENoticeProcedureText as _Text on $projection.RENoticeProcedure = _Text.RENoticeProcedure
{       
       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
        @ObjectModel.text.association: '_Text'
  key   ntproc          as RENoticeProcedure,
        cuexcludeassign as REIsExclForNewAssgmt,

        _Text

}
```
