---
name: I_PRODNRSCETOOLCONTROLPROFILE
description: "Prodnrscetoolcontrolprofile"
app_component: PP-VDM-MD-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolControlProfile` | ✓ | |  | `steuf` |  |  |
| `ProdnRsceToolSchedgIsActv` |  | |  | `xterm` |  |  |
| `ProdnRsceToolCostingIsActive` |  | |  | `xkalk` |  |  |
| `ProdnRsceToolConfIsActive` |  | |  | `xrueck` |  |  |
| `ProdnRsceToolPrintIsActive` |  | |  | `xdruck` |  |  |
| `ProdnRsceToolExpandPrintIsActv` |  | |  | `xexpand` |  |  |
| `_Text` | | ✓ | | | | |

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
