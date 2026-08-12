---
name: I_PRCGCNDNAMOUNTROUNDINGRULE
description: "Prcgcndnamountroundingrule"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRCGCNDNAMOUNTROUNDINGRULE

**Prcgcndnamountroundingrule**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgCndnAmountRoundingRule` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as txprf )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrcgCndnAmtRoundingRuleText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNAMNTR'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Round Rule of Pricing Condition Amount'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PrcgCndnAmountRoundingRule'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PrcgCndnAmountRoundingRule'
define view I_PrcgCndnAmountRoundingRule
  as select from dd07l
  association [0..*] to I_PrcgCndnAmtRoundingRuleText as _Text on $projection.PrcgCndnAmountRoundingRule = _Text.PrcgCndnAmountRoundingRule
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as txprf ) as PrcgCndnAmountRoundingRule,
      _Text

}

where
      domname  = 'TXPRF'
  and as4local = 'A'
  and as4vers  = '0000'
```
