---
name: I_CABLLBLEITMSRCETRANSTYPETEXT
description: "Cabllbleitmsrcetranstypetext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMSRCETRANSTYPETEXT

**Cabllbleitmsrcetranstypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmSourceTransType` | ✓ | |  | `cast( _tfk8103t.srctatype as srctatype_gfn_kk )` |  |  |
| `Language` | ✓ | | `_tfk8103t` | `langu` |  |  |
| `CABllbleItmSrceTransTypeText` |  | |  | `cast( _tfk8103t.text as srctatype_txt_gfn_kk preserving type )` |  |  |
| `_CABllbleItmSrceTransType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmSrceTransType` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICA8103T'
@EndUserText.label: 'Art des Quellvorgangs (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABllbleItmSourceTransType',
  sapObjectNodeType.name: 'CABllbleItmSrceTransTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABllbleItmSrceTransTypeText
  as select from tfk8103t as _tfk8103t
  association [0..1] to I_CABllbleItmSrceTransType as _CABllbleItmSrceTransType on $projection.CABllbleItmSourceTransType = _CABllbleItmSrceTransType.CABllbleItmSourceTransType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransType'
  key cast( _tfk8103t.srctatype as srctatype_gfn_kk )                as CABllbleItmSourceTransType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8103t.langu                                                as Language,
      @Semantics.text: true
      cast( _tfk8103t.text as srctatype_txt_gfn_kk preserving type ) as CABllbleItmSrceTransTypeText,

      _CABllbleItmSrceTransType,
      _Language
}
```
