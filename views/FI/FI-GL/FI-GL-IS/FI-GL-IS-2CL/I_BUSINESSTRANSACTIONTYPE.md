---
name: I_BUSINESSTRANSACTIONTYPE
description: Businesstransactiontype
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
# I_BUSINESSTRANSACTIONTYPE

**Businesstransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionType` | ✓ | |  | `cast(cbttype as fis_custbttype preserving type )` |  |  |
| `BusinessTransactionCategory` |  | |  | `cast(bttype as fis_bttype preserving type )` |  |  |
| `BusTransIsSubjToPerdControl` |  | |  | `xperiodcontrol` |  |  |
| `PeriodControlIsLedgerSpecific` |  | |  | `xperiodbyledger` |  |  |
| `BusinessTransTypeIsInactive` |  | |  | `inactive` |  |  |
| `_Text` | | ✓ | | | | |
| `_BusTransacTypeHierNode` | | ✓ | | | | |
| `_BusinessTransactionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusTransactionTypeText` | [0..*] |
| `_BusTransacTypeHierNode` | `I_BusTransacTypeHierNode` | [0..*] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessTransactionType' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Business Transaction Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBUSTRANTYPE'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'BusinessTransactionType' 
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessTransactionType
  // Corresponds to calculation view 'sap.hba.ecc.BusinessTransactionType'
  as select from finsc_custbttype

  association [0..*] to I_BusTransactionTypeText as _Text on $projection.BusinessTransactionType = _Text.BusinessTransactionType

  association [0..*] to I_BusTransacTypeHierNode as _BusTransacTypeHierNode on $projection.BusinessTransactionType = _BusTransacTypeHierNode.BusinessTransactionType
  
  association [0..1] to I_BusinessTransactionCategory  as _BusinessTransactionCategory   on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory 
  
{
      @ObjectModel.hierarchy.association: '_BusTransacTypeHierNode'
      @ObjectModel.text.association: '_Text'
  key cast(cbttype as fis_custbttype preserving type ) as BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      cast(bttype as fis_bttype preserving type ) as BusinessTransactionCategory,
      @Semantics.booleanIndicator:true 
      xperiodcontrol as BusTransIsSubjToPerdControl,
      @Semantics.booleanIndicator:true 
      xperiodbyledger as PeriodControlIsLedgerSpecific,
      @Semantics.booleanIndicator:true 
      inactive as BusinessTransTypeIsInactive,
      _Text,
      _BusTransacTypeHierNode,
      _BusinessTransactionCategory 
      
};
```
