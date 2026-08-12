---
name: I_CNDNPRPSDVALIDTODATECODE
description: "Cndnprpsdvalidtodatecode"
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
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CNDNPRPSDVALIDTODATECODE

**Cndnprpsdvalidtodatecode**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgCndnPrpsdValidToDateCode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as datvo )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnPrpsdValdToDateCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNVALTO'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Proposed Valid to Date for Conditions'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PrcgCndnPrpsdValidToDateCode'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PrcgCndnPrpsdValidToDateCode' 
define view I_CndnPrpsdValidToDateCode
  as select from dd07l
  association [0..*] to I_CndnPrpsdValdToDateCodeText as _Text on $projection.PrcgCndnPrpsdValidToDateCode = _Text.PrcgCndnPrpsdValidToDateCode
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as datvo ) as PrcgCndnPrpsdValidToDateCode,
      _Text

}

where
      domname  = 'DATVO'
  and as4local = 'A'
  and as4vers  = '0000'
```
