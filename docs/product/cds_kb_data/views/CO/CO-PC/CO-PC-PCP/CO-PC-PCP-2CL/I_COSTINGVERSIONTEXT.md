---
name: I_COSTINGVERSIONTEXT
description: "Costingversiontext"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVERSIONTEXT

**Costingversiontext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingVersion` | ✓ | |  |  |  |  |
| `CostingType` | ✓ | |  |  |  |  |
| `ValuationVariant` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CostingVersionName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { 
  sqlViewName: 'IFICOSTINGVERST',
  compiler.compareFilter: true,
  preserveKey: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling: { 
  type: #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE }
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CostingVersion',
  usageType: { 
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT } 
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Costing Version - Text'

define view I_CostingVersionText 
  as select from tck32t as text
    inner join I_CostingVersion as cvers on cvers.CostingVersion = text.tvers 
    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cvers.CostingVersion,
      @ObjectModel.foreignKey.association: '_CostingType'
  key cvers.CostingType,
      @ObjectModel.foreignKey.association: '_CostingValuationVariant'
  key cvers.ValuationVariant,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key text.spras as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.4
      @Semantics.text: true
      text.text as CostingVersionName,
      
      cvers._CostingType,
      cvers._CostingValuationVariant,
      _Language
}
```
