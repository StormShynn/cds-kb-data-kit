---
name: I_SLSDOCITMREQDDELIVCONFSTSTXT
description: Slsdocitmreqddelivconfststxt
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SLSDOCITMREQDDELIVCONFSTSTXT

**Slsdocitmreqddelivconfststxt**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SlsDocItmReqdDelivConfSts` | `SUBSTRING(domvalue_l, 1, 1)` |
| key `Language` | `ddlanguage` |
| `SlsDocItmReqdDelivConfStsDesc` | `ddtext` |
| `_SlsDocItmReqdDelivConfSts` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsDocItmReqdDelivConfSts` | `I_SlsDocItmReqdDelivConfSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SlsDocItmReqdDelivConfSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Document Item Requested Deliv Confirmation Sts - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDOCCNFSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

define view I_SlsDocItmReqdDelivConfStsTxt
as select from dd07t 

association[0..1] to I_SlsDocItmReqdDelivConfSts as _SlsDocItmReqdDelivConfSts on $projection.SlsDocItmReqdDelivConfSts = _SlsDocItmReqdDelivConfSts.SlsDocItmReqdDelivConfSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SlsDocItmReqdDelivConfSts'
    key SUBSTRING(domvalue_l, 1, 1) as SlsDocItmReqdDelivConfSts,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Semantics.text: true
    ddtext as SlsDocItmReqdDelivConfStsDesc,
    
    //Associations
    _SlsDocItmReqdDelivConfSts,
    _Language
}
where dd07t.domname = 'REQD_DELIV_CONF_STS' and dd07t.as4local = 'A'
                                            and (dd07t.valpos = '0001' or dd07t.valpos = '0002' or dd07t.valpos = '0003' or dd07t.valpos = '0004');
```
