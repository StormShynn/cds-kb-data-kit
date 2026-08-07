---
name: I_CONDITIONACCTASSGMTRELEVANCE
description: "Conditionacctassgmtrelevance"
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
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONACCTASSGMTRELEVANCE

**Conditionacctassgmtrelevance**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionAcctAssgmtRelevance` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ktrel )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConditionAcctAssgmtRelevText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNACCASSGMREL'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Account Assignment Relevance'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionAcctAssgmtRelevance'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CndnAcctAssignmentRelevance'
define view I_ConditionAcctAssgmtRelevance
  as select from dd07l
  association [0..*] to I_ConditionAcctAssgmtRelevText as _Text on $projection.ConditionAcctAssgmtRelevance = _Text.ConditionAcctAssgmtRelevance
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as ktrel ) as ConditionAcctAssgmtRelevance,
      _Text

}

where
      domname  = 'KTREL'
  and as4local = 'A'
```
