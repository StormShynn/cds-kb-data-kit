---
name: I_CASUBTRANSACTION
description: Casubtransaction
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBTRANSACTION

**Casubtransaction**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAApplicationArea` | `tfktvo.applk` |
| key `CAMainTransaction` | `tfktvo.hvorg` |
| key `CASubTransaction` | `tfktvo.tvorg` |
| `CAMainTransactionForReversal` | `tfktvo.hvorg_rev` |
| `CASubTransactionForReversal` | `tfktvo.tvorg_rev` |
| `CADueDateDeterminationRule` | `tfktvo.faetp` |
| `CAWithholdingTaxAmountType` | `tfktvo.qsvtp` |
| `CARuleForAddlReceivables` | `tfktvo.rladdr` |
| `CAIsPaymentTransaction` | `tfktvo.xpayt` |
| `_ApplArea` | `_CAApplicationArea` |
| `_MainTransaction` | `_CAMainTransaction` |
| `_MainTransactionRev` | `_CAReversalMainTransaction` |
| `_SubTransactionRev` | `_CAReversalSubTransaction` |
| `_CAApplicationArea` | *Association* |
| `_CAMainTransaction` | *Association* |
| `_CAReversalMainTransaction` | *Association* |
| `_CAReversalSubTransaction` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAMainTransaction` | `I_CAMainTransaction` | [1..1] |
| `_CAReversalMainTransaction` | `I_CAMainTransaction` | [0..1] |
| `_CAReversalSubTransaction` | `I_CASubTransaction` | [0..1] |
| `_Text` | `I_CASubTransactionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Subtransaction'

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true }

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CASubTransaction',
                sapObjectNodeType.name: 'ContrAcctgSubtransaction',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubTransaction
  as select from tfktvo

  association [1..1] to I_CAApplicationArea    as _CAApplicationArea         on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [1..1] to I_CAMainTransaction    as _CAMainTransaction         on  $projection.CAApplicationArea = _CAMainTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransaction = _CAMainTransaction.CAMainTransaction
  association [0..1] to I_CAMainTransaction    as _CAReversalMainTransaction on  $projection.CAApplicationArea            = _CAReversalMainTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransactionForReversal = _CAReversalMainTransaction.CAMainTransaction
  association [0..1] to I_CASubTransaction     as _CAReversalSubTransaction  on  $projection.CAApplicationArea            = _CAReversalSubTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransactionForReversal = _CAReversalSubTransaction.CAMainTransaction
                                                                             and $projection.CASubTransactionForReversal  = _CAReversalSubTransaction.CASubTransaction
  association [0..*] to I_CASubTransactionText as _Text                      on  $projection.CAApplicationArea = _Text.CAApplicationArea
                                                                             and $projection.CAMainTransaction = _Text.CAMainTransaction
                                                                             and $projection.CASubTransaction  = _Text.CASubTransaction
{
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key tfktvo.applk     as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAMainTransaction'
  key tfktvo.hvorg     as CAMainTransaction,
      @ObjectModel.text.association: '_Text'
  key tfktvo.tvorg     as CASubTransaction,

      @ObjectModel.foreignKey.association: '_CAReversalMainTransaction'
      tfktvo.hvorg_rev as CAMainTransactionForReversal,
      @ObjectModel.foreignKey.association: '_CAReversalSubTransaction'
      tfktvo.tvorg_rev as CASubTransactionForReversal,
      tfktvo.faetp     as CADueDateDeterminationRule,
      tfktvo.qsvtp     as CAWithholdingTaxAmountType,
      tfktvo.rladdr    as CARuleForAddlReceivables,
      tfktvo.xpayt     as CAIsPaymentTransaction,
      /*
            hvorg_spl,
            tvorg_spl,
            xnega,
      */

      /* Associations */
      _CAApplicationArea,
      _CAMainTransaction,
      _CAReversalMainTransaction,
      _CAReversalSubTransaction,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea, 

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAMainTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAMainTransaction'
      _CAMainTransaction as _MainTransaction,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAReversalMainTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAReversalMainTransaction'
      _CAReversalMainTransaction as _MainTransactionRev,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAReversalSubTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAReversalSubTransaction'
      _CAReversalSubTransaction as _SubTransactionRev
}
where
  applk = 'C'
```
