---
name: I_PARTNERFUNCTIONLANGDEPDNT
description: Partnerfunctionlangdepdnt
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - partner
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_PARTNERFUNCTIONLANGDEPDNT

**Partnerfunctionlangdepdnt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PartnerFunction` | ✓ | |  | `parvw` |
| `Language` | ✓ | |  | `spras` |
| `PartnerFunctionLanguageDepdnt` |  | |  | `pabez` |
| `_PartnerFunction` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PartnerFunction` | `I_PartnerFunction` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics: { dataCategory: #DIMENSION}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPRTFUCLANGDPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Language-Dependent Code of Partner Function'

define view I_PartnerFunctionLangDepdnt
  as select from tpaum

  association [1..1] to I_PartnerFunction as _PartnerFunction on $projection.PartnerFunction = _PartnerFunction.PartnerFunction
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
  key parvw as PartnerFunction,
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      pabez as PartnerFunctionLanguageDepdnt,

      //Association
      _PartnerFunction,
      _Language
};
```
