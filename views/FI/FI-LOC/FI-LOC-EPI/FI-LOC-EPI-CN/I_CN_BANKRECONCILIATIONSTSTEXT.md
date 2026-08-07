---
name: I_CN_BANKRECONCILIATIONSTSTEXT
description: CN Bankreconciliationststext
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-EPI
  - interface-view
  - text-view
  - bank
  - text
  - component:FI-LOC-EPI-CN
  - lob:Finance
  - bo:Bank
---
# I_CN_BANKRECONCILIATIONSTSTEXT

**CN Bankreconciliationststext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankReconciliationStatus` | ✓ | |  | `cast(left(domvalue_l,1) as epic_br_rcon_status preserving type )` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type )` |
| `BankReconciliationStatusName` |  | |  | `cast(ddtext as epic_br_rcon_status_txt preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNRECNCLNSTSTXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BankReconciliationStatus'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'CN Bank Reconciliation Status - Text'
@Metadata.ignorePropagatedAnnotations:true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CN_BankReconciliationStsText 
as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast(left(domvalue_l,1) as epic_br_rcon_status preserving type )  as BankReconciliationStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type )            as Language,
      @Semantics.text: true
      cast(ddtext as epic_br_rcon_status_txt preserving type ) as BankReconciliationStatusName,

      _Language

}
where
      domname  = 'EPIC_BR_RCON_STATUS'
  and as4local = 'A';
```
