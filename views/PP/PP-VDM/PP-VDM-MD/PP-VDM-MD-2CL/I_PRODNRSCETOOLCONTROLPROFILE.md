---
name: I_PRODNRSCETOOLCONTROLPROFILE
description: Prodnrscetoolcontrolprofile
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLCONTROLPROFILE

**Prodnrscetoolcontrolprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdnRsceToolControlProfile` | `prfl.steuf` |
| `ProdnRsceToolSchedgIsActv` | `prfl.xterm` |
| `ProdnRsceToolCostingIsActive` | `prfl.xkalk` |
| `ProdnRsceToolConfIsActive` | `prfl.xrueck` |
| `ProdnRsceToolPrintIsActive` | `prfl.xdruck` |
| `ProdnRsceToolExpandPrintIsActv` | `prfl.xexpand` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdnRsceToolControlPrflText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCONTPRFL'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ProdnRsceToolControlProfile'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Control Profile'
@ObjectModel.sapObjectNodeType.name: 'PRTControlProfile'
@Analytics.dataExtraction.enabled: true

define view I_ProdnRsceToolControlProfile
  as select from tcf10 as prfl

  association [0..*] to I_ProdnRsceToolControlPrflText as _Text on $projection.ProdnRsceToolControlProfile = _Text.ProdnRsceToolControlProfile
{
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
    @ObjectModel.text.association: '_Text'
    key prfl.steuf as ProdnRsceToolControlProfile,
    
    // Indicators
    prfl.xterm     as ProdnRsceToolSchedgIsActv,
    prfl.xkalk     as ProdnRsceToolCostingIsActive,
    prfl.xrueck    as ProdnRsceToolConfIsActive,
    prfl.xdruck    as ProdnRsceToolPrintIsActive,
    prfl.xexpand   as ProdnRsceToolExpandPrintIsActv,
    
    // Associations
    _Text
};
```
