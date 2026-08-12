---
name: I_PAYMENTDIFFERENCEREASONT
description: "Paymentdifferencereasont"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - payment
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTDIFFERENCEREASONT

**Paymentdifferencereasont**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast (bukrs as fis_bukrs)` |  |  |
| `PaymentDifferenceReason` | ✓ | |  | `cast (rstgr as farp_rstgr)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentDifferenceReasonName` |  | |  | `txt20` |  |  |
| `PaymentDifferenceReasonDesc` |  | |  | `txt40` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #M //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Payment Difference Reason - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYDIFFRSNT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentDifferenceReason'
@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentDifferenceReasonT
  as select from t053s
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast (bukrs as fis_bukrs)  as CompanyCode,
      @ObjectModel.text.element: 'PaymentDifferenceReasonDesc'
  key cast (rstgr as farp_rstgr) as PaymentDifferenceReason,
      @Semantics.language:true
  key spras                      as Language,
      @Semantics.text:true
      txt20                      as PaymentDifferenceReasonName,
      @Semantics.text:true
      txt40                      as PaymentDifferenceReasonDesc,
      _Language,
      _CompanyCode
};
```
