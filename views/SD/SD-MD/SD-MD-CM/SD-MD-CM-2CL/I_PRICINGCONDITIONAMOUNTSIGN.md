---
name: I_PRICINGCONDITIONAMOUNTSIGN
description: Pricing ConditionAMOUNTSIGN
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_PRICINGCONDITIONAMOUNTSIGN

**Pricing ConditionAMOUNTSIGN**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PrcgConditionAmountSign` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as knega )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrcgConditionAmountSignText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGAMNTS'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Condition Amount Sign'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PrcgConditionAmountSign'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingConditionAmountSign'
define view I_PricingConditionAmountSign
  as select from dd07l
  association [0..*] to I_PrcgConditionAmountSignText as _Text on $projection.PrcgConditionAmountSign = _Text.PrcgConditionAmountSign
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as knega ) as PrcgConditionAmountSign,
      _Text

}

where
      domname  = 'KNEGA'
  and as4local = 'A'
  and as4vers  = '0000'
```
