---
name: I_RECASHFLOWPOSTINGSTATUSTEXT
description: Recashflowpostingstatustext
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
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
  - status
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECASHFLOWPOSTINGSTATUSTEXT

**Recashflowpostingstatustext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `CashFlowPostingStatus` | `cast( dd07t.domvalue_l as recdcfstatus )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `RECashFlowPostingStatusName` | `dd07t.ddtext` |
| `_Language` | *Association* |
| `_RECashFlowPostingStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECFPSTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cash Flow Posting Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CashFlowPostingStatus'
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
                                        
define view I_RECashFlowPostingStatusText
  as select from dd07t
  association        to parent I_RECashFlowPostingStatus as _RECashFlowPostingStatus on $projection.CashFlowPostingStatus = _RECashFlowPostingStatus.CashFlowPostingStatus
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_RECashFlowPostingStatus'
      @ObjectModel.text.element: ['RECashFlowPostingStatusName']
  key cast( dd07t.domvalue_l as recdcfstatus )          as CashFlowPostingStatus,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      dd07t.ddtext                                      as RECashFlowPostingStatusName,

      _RECashFlowPostingStatus,
      _Language
}
where
      dd07t.domname  = 'RECDCFSTATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
