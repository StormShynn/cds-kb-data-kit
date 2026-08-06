---
name: I_STATECENTRALBANKPAYTRSN
description: Statecentralbankpaytrsn
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - bank
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:Bank
---
# I_STATECENTRALBANKPAYTRSN

**Statecentralbankpaytrsn**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StateCentralBankPaymentReason` | `cast( lzbkz as fac_lzbkz )` |
| `StateCentralBankDocumentType` | `blart` |
| `StateCentralBankServiceSpec` | `lvawv` |
| `StateCentralBankPaytRsnDesc` | `cast( concat( zwck1, zwck2 ) as farp_scbpaytrsndesc )` |

## Source Code

```abap
@EndUserText.label: 'State Central Bank Payment Reason'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ISCNTRLBKPAYTRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'StateCentralBankPaymentReason'
@ObjectModel.sapObjectNodeType.name: 'StateCentralBankPaymentReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName:#LOCAL
define view I_StateCentralBankPaytRsn
  as select from t015l
{
      @ObjectModel.text.element:['StateCentralBankPaytRsnDesc']
  key cast( lzbkz as fac_lzbkz )                            as StateCentralBankPaymentReason,
      blart                                                 as StateCentralBankDocumentType,
      lvawv                                                 as StateCentralBankServiceSpec,
      @Semantics.text
      cast( concat( zwck1, zwck2 ) as farp_scbpaytrsndesc ) as StateCentralBankPaytRsnDesc
};
```
