---
name: I_ACCTASSGMTDISTRINDICATOR
description: Acctassgmtdistrindicator
app_component: MM-PUR-GF-MAS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_ACCTASSGMTDISTRINDICATOR

**Acctassgmtdistrindicator**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MultipleAcctAssgmtDistribution` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IAADISTRIND'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Distribution Indicator'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'MultipleAcctAssgmtDistribution'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view I_AcctAssgmtDistrIndicator
  as select from dd07l
  composition [0..*] of I_AcctAssgmtDistrIndicatorTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key dd07l.domvalue_l as MultipleAcctAssgmtDistribution,
      _Text
}
where
      dd07l.domname  = 'VRTKZ'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
