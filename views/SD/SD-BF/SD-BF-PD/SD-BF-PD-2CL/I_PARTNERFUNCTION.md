---
name: I_PARTNERFUNCTION
description: Partnerfunction
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
  - partner
  - component:SD-BF-PD-2CL
  - lob:Sales & Distribution
---
# I_PARTNERFUNCTION

**Partnerfunction**

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
| `SDDocumentPartnerType` |  | |  | `nrart` |  |  |
| `_Text` | | ✓ | | | | |
| `_PartnerFunctionLangDepdnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PartnerFunctionText` | [0..*] |
| `_PartnerFunctionLangDepdnt` | `I_PartnerFunctionLangDepdnt` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Partner Function'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPARTFUNC'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name:'PartnerFunction'                                        
define view I_PartnerFunction
as select from tpar

association [0..*] to I_PartnerFunctionText as _Text on $projection.PartnerFunction = _Text.PartnerFunction
association [0..*] to I_PartnerFunctionLangDepdnt as _PartnerFunctionLangDepdnt on $projection.PartnerFunction = _PartnerFunctionLangDepdnt.PartnerFunction
{
    @ObjectModel.text.association: '_Text'
    key cast(parvw as parvw_unv) as PartnerFunction,
    nrart as SDDocumentPartnerType,
    
    //Association
    _Text,
    _PartnerFunctionLangDepdnt
};
```
