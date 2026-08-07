---
name: I_CONTROLLINGBUSTRANSACTYPE
description: Controllingbustransactype
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGBUSTRANSACTYPE

**Controllingbustransactype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionType` | ✓ | |  | `vrgng` |  |  |
| `ControllingValueClassification` |  | |  | `psikz` |  |  |
| `ControllingValueCategory` |  | |  | `wtkat` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ControllingBusTransacTypeT` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessTransactionType'
@EndUserText.label: 'Controlling Business Transaction Type'
@Analytics: {dataCategory: #DIMENSION } //, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOBUSTRANTYPE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name : 'BusinessTransactionType'
define view I_ControllingBusTransacType
  as select from tj01
  association [0..*] to I_ControllingBusTransacTypeT as _Text on $projection.BusinessTransactionType = _Text.BusinessTransactionType
{
      @ObjectModel.text.association: '_Text'
  key vrgng as BusinessTransactionType,
      psikz as ControllingValueClassification,
      wtkat as ControllingValueCategory,
      _Text
};
```
