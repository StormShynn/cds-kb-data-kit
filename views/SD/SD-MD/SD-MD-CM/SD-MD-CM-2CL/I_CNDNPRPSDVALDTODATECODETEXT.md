---
name: I_CNDNPRPSDVALDTODATECODETEXT
description: Cndnprpsdvaldtodatecodetext
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
# I_CNDNPRPSDVALDTODATECODETEXT

**Cndnprpsdvaldtodatecodetext**

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
| key `PrcgCndnPrpsdValidToDateCode` | `cast ( substring( domvalue_l, 1, 1 ) as datvo )` |
| `PrcgCndnPrpsdValdToDteCodeText` | `cast ( ddtext as val_text )` |
| `_CndnPrpsdValidToDateCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnPrpsdValidToDateCode` | `I_CndnPrpsdValidToDateCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNVALTOT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Proposed Valid to Date for Conditions - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PrcgCndnPrpsdValidToDateCode'
@Metadata.ignorePropagatedAnnotations:true
define view I_CndnPrpsdValdToDateCodeText
  as select from dd07t
  association [0..1] to I_CndnPrpsdValidToDateCode as _CndnPrpsdValidToDateCode on $projection.PrcgCndnPrpsdValidToDateCode = _CndnPrpsdValidToDateCode.PrcgCndnPrpsdValidToDateCode
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,

  key cast ( substring( domvalue_l, 1, 1 ) as datvo ) as PrcgCndnPrpsdValidToDateCode,
      @Semantics.text:true
      cast ( ddtext as val_text )                     as PrcgCndnPrpsdValdToDteCodeText,
      _CndnPrpsdValidToDateCode,
      _Language
}
where
      domname  = 'DATVO'
  and as4local = 'A'
  and as4vers  = '0000'
```
