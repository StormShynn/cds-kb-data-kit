---
name: I_PRODEXTASSTMTPRIORITYTXT
description: "Prodextasstmtprioritytxt"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODEXTASSTMTPRIORITYTXT

**Prodextasstmtprioritytxt**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdExtAssortmentPriority` | ✓ | |  | `pflks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdExtAssortmentPriorityText` |  | |  | `vtext` |  |  |
| `_ProdExtAssortmentPriority` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdExtAssortmentPriority` | `I_ProdExtAsstmtPriority` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDEXTASSTMTTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External assortment priority - Text'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT ,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ,
                                      #CDS_MODLEING_ASSOCIATION_TARGET         ]

define view I_ProdExtAsstmtPriorityTxt
  as select from twspt

  association [0..1] to I_ProdExtAsstmtPriority as _ProdExtAssortmentPriority on $projection.ProdExtAssortmentPriority = _ProdExtAssortmentPriority.ProdExtAssortmentPriority

  association [0..1] to I_Language              as _Language                  on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_ProdExtAssortmentPriority'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key pflks as ProdExtAssortmentPriority,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      vtext as ProdExtAssortmentPriorityText,
      _ProdExtAssortmentPriority,
      _Language

}
```
