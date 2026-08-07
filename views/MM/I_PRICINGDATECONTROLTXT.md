---
name: I_PRICINGDATECONTROLTXT
description: Pricingdatecontroltxt
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - pricing
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PRICINGDATECONTROLTXT

**Pricingdatecontroltxt**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingDateControl` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as meprf )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PricingDateControlText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_PricingDateControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPRCDATCNTRLT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PricingDateControl'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Pricing Date Control - Text'
@ObjectModel.sapObjectNodeType.name: 'PricingDateControlText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PricingDateControlTxt
  as select from dd07t
  association        to parent I_PricingDateControl as _PricingDateControl on $projection.PricingDateControl = _PricingDateControl.PricingDateControl
  association [0..1] to I_Language                  as _Language           on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_PricingDateControl'
      @ObjectModel.text.element: ['PricingDateControlText']
  key cast ( substring( domvalue_l, 1, 1 ) as meprf )   as PricingDateControl,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,

      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      dd07t.ddtext                                      as PricingDateControlText,

      _PricingDateControl,

      _Language
}
where
      domname        = 'MEPRF'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
