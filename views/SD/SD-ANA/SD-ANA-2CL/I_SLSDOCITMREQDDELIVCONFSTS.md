---
name: I_SLSDOCITMREQDDELIVCONFSTS
description: "Slsdocitmreqddelivconfsts"
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
# I_SLSDOCITMREQDDELIVCONFSTS

**Slsdocitmreqddelivconfsts**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SlsDocItmReqdDelivConfSts` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsDocItmReqdDelivConfStsTxt` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SlsDocItmReqdDelivConfSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Document Item Requested Delivery Confirmation Status'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDOCCNFSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

define view I_SlsDocItmReqdDelivConfSts
as select from dd07l 

association [0..*] to I_SlsDocItmReqdDelivConfStsTxt as _Text on $projection.SlsDocItmReqdDelivConfSts = _Text.SlsDocItmReqdDelivConfSts
{
    @ObjectModel.text.association: '_Text'
    key SUBSTRING(dd07l.domvalue_l, 1, 1) as SlsDocItmReqdDelivConfSts,

    //Associations
    _Text
}
where dd07l.domname = 'REQD_DELIV_CONF_STS' and dd07l.as4local = 'A' 
                                            and (dd07l.valpos = '0001' or dd07l.valpos = '0002' or dd07l.valpos = '0003' or dd07l.valpos = '0004');
```
