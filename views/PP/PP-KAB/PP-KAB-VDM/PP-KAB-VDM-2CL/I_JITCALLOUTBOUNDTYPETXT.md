---
name: I_JITCALLOUTBOUNDTYPETXT
description: Jitcalloutboundtypetxt
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLOUTBOUNDTYPETXT

**Jitcalloutboundtypetxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `JITCallOutboundType` | `cast(substring(domvalue_l, 1, 1) as pabart)` |
| key `Language` | `cast(ddlanguage as spras preserving type)` |
| `JITCallOutboundTypeName` | `cast(ddtext as vdm_pabart_text preserving type)` |
| `DomainValue` | `domvalue_l` |
| `_JITCallOutboundType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITCallOutboundType` | `I_JITCallOutboundType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJITCOUTTYTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'JIT Call Outbound Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallOutboundType'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_JITCallOutboundTypeTxt
  as select from dd07t
  association [1..1] to I_JITCallOutboundType  as _JITCallOutboundType  on $projection.JITCallOutboundType = _JITCallOutboundType.JITCallOutboundType
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language

{ 
      @ObjectModel.foreignKey.association: '_JITCallOutboundType'
  key cast(substring(domvalue_l, 1, 1) as pabart)                   as JITCallOutboundType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true         
      cast(ddtext as vdm_pabart_text preserving type)               as JITCallOutboundTypeName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _JITCallOutboundType,
      _Language

}
where
      domname  = 'PABART'
  and as4local = 'A';
```
