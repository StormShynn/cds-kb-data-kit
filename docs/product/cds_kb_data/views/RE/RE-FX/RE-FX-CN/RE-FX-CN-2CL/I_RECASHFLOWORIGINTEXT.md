---
name: I_RECASHFLOWORIGINTEXT
description: "Recashfloworigintext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECASHFLOWORIGINTEXT

**Recashfloworigintext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `RECashFlowOrigin` | ✓ | |  | `cast( dd07t.domvalue_l as reiscforigin )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `RECashFlowOriginName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_RECashFlowOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFLWORGNT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cash Flow Origin - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RECashFlowOrigin'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ]
define view I_RECashFlowOriginText
  as select from dd07t
  association        to parent I_RECashFlowOrigin as _RECashFlowOrigin on $projection.RECashFlowOrigin = _RECashFlowOrigin.RECashFlowOrigin
  association [0..1] to I_Language                 as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_RECashFlowOrigin'
      @ObjectModel.text.element: ['RECashFlowOriginName']
  key cast( dd07t.domvalue_l as reiscforigin )          as RECashFlowOrigin,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      dd07t.ddtext                                      as RECashFlowOriginName,

      _RECashFlowOrigin,
      _Language
}
where
      dd07t.domname  = 'REISCFORIGIN'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
