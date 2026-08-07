---
name: I_PARTNERFUNCTIONTEXT
description: "Partnerfunctiontext"
app_component: SD-BF-PD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PD
  - interface-view
  - text-view
  - text
  - partner
  - component:SD-BF-PD-2CL
  - lob:Sales & Distribution
---
# I_PARTNERFUNCTIONTEXT

**Partnerfunctiontext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartnerFunction` | ✓ | |  | `cast(parvw as parvw_unv)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PartnerFunctionName` |  | |  | `vtext` |  |  |
| `_PartnerFunction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PartnerFunction` | `I_PartnerFunction` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Partner Function - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED 
@AbapCatalog.sqlViewName: 'ISDPARTFUNCT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
define view I_PartnerFunctionText
as select from tpart

association[0..1] to I_PartnerFunction as _PartnerFunction on $projection.PartnerFunction = _PartnerFunction.PartnerFunction
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_PartnerFunction'
    key cast(parvw as parvw_unv) as PartnerFunction,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language' 
    key spras as Language,
    
    @Semantics.text: true
    vtext as PartnerFunctionName,
    
    //Associations
    _PartnerFunction,
    _Language
};
```
