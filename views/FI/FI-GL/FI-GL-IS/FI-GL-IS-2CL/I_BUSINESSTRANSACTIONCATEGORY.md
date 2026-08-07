---
name: I_BUSINESSTRANSACTIONCATEGORY
description: "Businesstransactioncategory"
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
# I_BUSINESSTRANSACTIONCATEGORY

**Businesstransactioncategory**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionCategory` | ✓ | |  | `cast(finsc_bttype.bttype as fis_bttype preserving type )` |  |  |
| `BusTransIsSubjToPerdControl` |  | |  | `xperiodcontrol` |  |  |
| `PeriodControlIsLedgerSpecific` |  | |  | `xperiodbyledger` |  |  |
| `PeriodIsCheckedByLeadingLedger` |  | |  | `xperiodbyleadingledger` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusTransactionCategoryText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessTransactionCategory'
@Analytics.technicalName: 'IBUSTRANCAT'
@EndUserText.label: 'Business Transaction Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'BusinessTransactionCategory'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BusinessTransactionCategory
  as select from finsc_bttype

  association [0..*] to I_BusTransactionCategoryText as _Text on $projection.BusinessTransactionCategory = _Text.BusinessTransactionCategory

  //  association [0..*] to I_BusTransacTypeHierNode as _BusTransacTypeHierNode on $projection.BusinessTransactionType = _BusTransacTypeHierNode.BusinessTransactionType

{
      //@ObjectModel.hierarchy.association: '_BusTransacTypeHierNode'
      @ObjectModel.text.association: '_Text'
  key cast(finsc_bttype.bttype as fis_bttype preserving type ) as BusinessTransactionCategory,
      @Semantics.booleanIndicator:true
      finsc_bttype.xperiodcontrol         as BusTransIsSubjToPerdControl,
      @Semantics.booleanIndicator:true
      finsc_bttype.xperiodbyledger        as PeriodControlIsLedgerSpecific,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PeriodControlIsLedgerSpecific'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PeriodControlIsLedgerSpecific'
      @Semantics.booleanIndicator:true
      finsc_bttype.xperiodbyleadingledger as PeriodIsCheckedByLeadingLedger,
      _Text
      //  _BusTransacTypeHierNode

};
```
