---
name: I_RENOTICEPROCEDURETEXT
description: "Renoticeproceduretext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RENOTICEPROCEDURETEXT

**Renoticeproceduretext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RENoticeProcedure` | ✓ | |  | `ntproc` |  |  |
| `RENoticeProcedureDescription` |  | |  | `xntproc` |  |  |
| `_RENoticeProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RENoticeProcedure` | `I_RENoticeProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRENTPROCT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Contract Notice Procedure - Text'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RENoticeProcedure'
@ObjectModel.semanticKey: ['RENoticeProcedure']
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]


define view I_RENoticeProcedureText
  as select from tivtmntproct
  association [0..1] to I_RENoticeProcedure as _RENoticeProcedure on $projection.RENoticeProcedure = _RENoticeProcedure.RENoticeProcedure
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_RENoticeProcedure'
  key ntproc  as RENoticeProcedure,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      xntproc as RENoticeProcedureDescription,


      _Language,
      _RENoticeProcedure

}
```
