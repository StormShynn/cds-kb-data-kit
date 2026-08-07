---
name: I_PURGINFORECORDUPDATECODET
description: Purginforecordupdatecodet
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGINFORECORDUPDATECODET

**Purginforecordupdatecodet**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchasingInfoRecordUpdateCode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as spinf )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `PurchasingInfoRecordDesc` |  | |  | `ddtext` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_PurgInfoRecordUpdateCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IINFORECUPDCODET'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Update Code for Purg Info Record - Text'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PurchasingInfoRecordUpdateCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true 
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecordUpdateCodeText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PurgInfoRecordUpdateCodeT
  as select from dd07t
  association to parent I_PurgInfoRecordUpdateCode as _PurgInfoRecordUpdateCode on $projection.PurchasingInfoRecordUpdateCode = _PurgInfoRecordUpdateCode.PurchasingInfoRecordUpdateCode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PurgInfoRecordUpdateCode'
      @ObjectModel.text.element:  [ 'PurchasingInfoRecordDesc' ]
  key cast ( substring( domvalue_l, 1, 1 ) as spinf ) as PurchasingInfoRecordUpdateCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
      @EndUserText.label: 'Language'      
  key ddlanguage                                      as Language,
      @Semantics.text
      @EndUserText.label: 'Info Record Update Code'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH     
      ddtext                                          as PurchasingInfoRecordDesc,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      _Language,
      _PurgInfoRecordUpdateCode
}
where
      domname  = 'SPINF'
  and as4local = 'A'
  and dd07t.as4vers = '0000'
```
