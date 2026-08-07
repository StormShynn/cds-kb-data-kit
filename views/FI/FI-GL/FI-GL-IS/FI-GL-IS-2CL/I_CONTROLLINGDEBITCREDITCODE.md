---
name: I_CONTROLLINGDEBITCREDITCODE
description: Controllingdebitcreditcode
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - credit
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGDEBITCREDITCODE

**Controllingdebitcreditcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingDebitCreditCode` | ✓ | |  | `cast( substring(dd07l.domvalue_l, 1, 1) as fins_co_belkz preserving type)` |
| `DomainValue` |  | |  | `substring(dd07l.domvalue_l, 1, 1)` |
| `DomainValue_2` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ControllingDebitCreditCodeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Controlling Debit Credit Code'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICODECRCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ControllingDebitCreditCode'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,
                                    #CDS_MODELING_DATA_SOURCE,
                                    #ANALYTICAL_DIMENSION,
                                    #VALUE_HELP_PROVIDER,
                                    #SEARCHABLE_ENTITY,
                                    #SQL_DATA_SOURCE,
                                    #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name : 'ControllingDebitCreditCode'                                    

@Search.searchable: true
@Consumption.ranked: true

define view I_ControllingDebitCreditCode
  as select from dd07l
  association [0..*] to I_ControllingDebitCreditCodeT as _Text on $projection.ControllingDebitCreditCode = _Text.ControllingDebitCreditCode
{
      @ObjectModel.text.association: '_Text'
  key cast( substring(dd07l.domvalue_l, 1, 1) as fins_co_belkz preserving type) as ControllingDebitCreditCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'DomainValue_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'DomainValue_2'
      substring(dd07l.domvalue_l, 1, 1)                                          as DomainValue,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                           as DomainValue_2,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text
}
where
      dd07l.domname  = 'BELKZ'
  and dd07l.as4local = 'A';
```
