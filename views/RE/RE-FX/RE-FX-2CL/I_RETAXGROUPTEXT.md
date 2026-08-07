---
name: I_RETAXGROUPTEXT
description: Retaxgrouptext
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
  - text-view
  - tax
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETAXGROUPTEXT

**Retaxgrouptext**

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
| `TaxGroup` | ✓ | |  | `taxgroup` |  |  |
| `TaxGroupName` |  | |  | `xmtaxgroup` |  |  |
| `_RETaxGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RETaxGroup` | `I_RETaxGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRETAXGRPT'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'TaxGroup',
                semanticKey: ['TaxGroup'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'RealEstateTaxGroupText'
}

@Search.searchable: true
@VDM.viewType:#BASIC
@EndUserText.label: 'Real Estate Tax Group - Text'
define view entity I_RETaxGroupText
  as select from tivrataxgroupt
  association [0..1] to I_RETaxGroup as _RETaxGroup on $projection.TaxGroup = _RETaxGroup.TaxGroup
  association [0..1] to I_Language   as _Language   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras      as Language,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
  key taxgroup   as TaxGroup,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xmtaxgroup as TaxGroupName,

      _RETaxGroup,
      _Language
}
```
