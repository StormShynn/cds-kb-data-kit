---
name: I_PRCGCONDITIONDELETIONMETHOD
description: "Prcgconditiondeletionmethod"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PRCGCONDITIONDELETIONMETHOD

**Prcgconditiondeletionmethod**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgConditionDeletionMethod` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kdele )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrcgCndnDeltnMethodText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGCNDND'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Record Deletion Indicator'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PrcgConditionDeletionMethod'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingConditionDeletionMethod'
define view I_PrcgConditionDeletionMethod
  as select from dd07l
  association [0..*] to I_PrcgCndnDeltnMethodText as _Text on $projection.PrcgConditionDeletionMethod = _Text.PrcgConditionDeletionMethod
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as kdele ) as PrcgConditionDeletionMethod,
      _Text

}

where
      domname  = 'KDELE'
  and as4local = 'A'
  and as4vers  = '0000'
```
