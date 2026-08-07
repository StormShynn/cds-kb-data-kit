---
name: I_PRICEDETERMINATIONCONTROLTXT
description: Pricedeterminationcontroltxt
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - interface-view
  - component:CO-PC-ML-2CL
  - lob:Controlling
---
# I_PRICEDETERMINATIONCONTROLTXT

**Pricedeterminationcontroltxt**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras )` |
| `PriceDeterminationControl` | ✓ | |  | `cast( dd07t.domvalue_l as fml_abst )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `PriceDeterminationControlName` |  | |  | `cast( dd07t.ddtext as fml_abst_text_vh preserving type )` |
| `_Language` | | ✓ | | |
| `_PriceDeterminationControl` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRICEDETCTRLTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Price Determination Control - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PriceDeterminationControl'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_PriceDeterminationControlTxt
  as select from dd07t
  association        to parent I_PriceDeterminationControl as _PriceDeterminationControl on $projection.PriceDeterminationControl = _PriceDeterminationControl.PriceDeterminationControl
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras )    as Language,
      @ObjectModel.foreignKey.association: '_PriceDeterminationControl'
      @ObjectModel.text.element: ['PriceDeterminationControlName']

  key cast( dd07t.domvalue_l as fml_abst ) as PriceDeterminationControl,  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as fml_abst_text_vh preserving type ) as PriceDeterminationControlName,
      _PriceDeterminationControl,
      _Language
}

where
      domname  = 'CK_ML_ABST'
  and as4local = 'A'
  and dd07t.as4vers  = '0000';
```
