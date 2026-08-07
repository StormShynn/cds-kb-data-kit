---
name: I_CN_BANKRECNCLNMATCHTYPE
description: "CN Bankrecnclnmatchtype"
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
  - bank
  - component:FI-LOC-EPI-CN
  - lob:Finance
  - bo:Bank
---
# I_CN_BANKRECNCLNMATCHTYPE

**CN Bankrecnclnmatchtype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankReconciliationMatchType` | ✓ | |  | `cast(left(domvalue_l,1) as epic_brs_matched_indicator preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CN_BankRecnclnMatchTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNRECNCLNMTCH'
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BankReconciliationMatchType'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@EndUserText.label: 'CN Bank Reconciliation Match Type'
@Metadata.ignorePropagatedAnnotations:true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CN_BankRecnclnMatchType
  as select from dd07l
  association [0..*] to I_CN_BankRecnclnMatchTypeText as _Text on $projection.BankReconciliationMatchType = _Text.BankReconciliationMatchType
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CN_BankRecnclnMatchTypeText',
                     element: 'BankReconciliationMatchType' },
          useAsTemplate: true
        }]
      @ObjectModel.text.association: '_Text'
  key cast(left(domvalue_l,1) as epic_brs_matched_indicator preserving type ) as BankReconciliationMatchType,
      _Text
}
where
      dd07l.domname  = 'EPIC_BRS_MATCHED_INDICATOR'
  and dd07l.as4local = 'A';
```
