---
name: I_CNDNVALZEROPROCGCODETEXT
description: Cndnvalzeroprocgcodetext
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
  - text-view
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CNDNVALZEROPROCGCODETEXT

**Cndnvalzeroprocgcodetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras )` |
| key `CndnValueZeroProcgCode` | `cast ( substring( domvalue_l, 1, 1 ) as val_zero )` |
| `CndnValZeroProcessingCodeText` | `cast ( ddtext as val_text )` |
| `_CndnValueZeroProcessingCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnValueZeroProcessingCode` | `I_CndnValueZeroProcessingCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNVALZPCT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Zero Condition Value Processing Indicator - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'CndnValueZeroProcgCode'
@Metadata.ignorePropagatedAnnotations:true
define view I_CndnValZeroProcgCodeText
  as select from dd07t
  association [0..1] to I_CndnValueZeroProcessingCode as _CndnValueZeroProcessingCode on $projection.CndnValueZeroProcgCode = _CndnValueZeroProcessingCode.CndnValueZeroProcgCode
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                        as Language,

  key cast ( substring( domvalue_l, 1, 1 ) as val_zero ) as CndnValueZeroProcgCode,
      @Semantics.text:true
      cast ( ddtext as val_text )                        as CndnValZeroProcessingCodeText,
      _CndnValueZeroProcessingCode,
      _Language
}
where
      domname  = 'VAL_ZERO'
  and as4local = 'A'
  and as4vers  = '0000'
```
