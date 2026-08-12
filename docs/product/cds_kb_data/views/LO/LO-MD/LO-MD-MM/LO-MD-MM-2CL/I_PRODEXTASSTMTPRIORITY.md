---
name: I_PRODEXTASSTMTPRIORITY
description: "Prodextasstmtpriority"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRODEXTASSTMTPRIORITY

**Prodextasstmtpriority**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdExtAsstmtPriorityTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDEXTASSTMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External Assortment Priority'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.representativeKey: 'ProdExtAssortmentPriority'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_ProdExtAsstmtPriority
  as select from twsp

  association [0..*] to I_ProdExtAsstmtPriorityTxt as _Text on $projection.ProdExtAssortmentPriority = _Text.ProdExtAssortmentPriority

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key twsp.pflks as ProdExtAssortmentPriority,

      _Text
}
```
