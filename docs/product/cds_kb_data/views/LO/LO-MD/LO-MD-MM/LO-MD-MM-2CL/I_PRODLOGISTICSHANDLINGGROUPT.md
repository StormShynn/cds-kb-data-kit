---
name: I_PRODLOGISTICSHANDLINGGROUPT
description: "Prodlogisticshandlinggroupt"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PRODLOGISTICSHANDLINGGROUPT

**Prodlogisticshandlinggroupt**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductLogisticsHandlingGroup` | ✓ | |  | `loggr` |  |  |
| `Name` |  | |  | `ltext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLOGHNDLGGRPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Logistics Handling Group - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ObjectModel.representativeKey: 'ProductLogisticsHandlingGroup'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY ]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ProdLogisticsHandlingGroupT
  as select from tlogt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
  key loggr                as ProductLogisticsHandlingGroup,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      ltext                as Name,
      _Language
}
```
