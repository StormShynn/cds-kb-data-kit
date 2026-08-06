---
name: I_CNDNVALUEZEROPROCESSINGCODE
description: Cndnvaluezeroprocessingcode
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
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CNDNVALUEZEROPROCESSINGCODE

**Cndnvaluezeroprocessingcode**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CndnValueZeroProcgCode` | `cast ( substring( domvalue_l, 1, 1 ) as val_zero )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnValZeroProcgCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNVALZPC'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Zero Condition Value Processing Indicator'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'CndnValueZeroProcgCode'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CndnValueZeroProcgCode'
define view I_CndnValueZeroProcessingCode
  as select from dd07l
  association [0..*] to I_CndnValZeroProcgCodeText as _Text on $projection.CndnValueZeroProcgCode = _Text.CndnValueZeroProcgCode
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as val_zero ) as CndnValueZeroProcgCode,
      _Text

}

where
      domname  = 'VAL_ZERO'
  and as4local = 'A'
  and as4vers  = '0000'
```
