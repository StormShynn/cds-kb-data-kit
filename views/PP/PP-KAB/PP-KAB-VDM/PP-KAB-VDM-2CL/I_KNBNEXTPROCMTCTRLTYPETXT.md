---
name: I_KNBNEXTPROCMTCTRLTYPETXT
description: Knbnextprocmtctrltypetxt
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
# I_KNBNEXTPROCMTCTRLTYPETXT

**Knbnextprocmtctrltypetxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KnbnCtrlCycExtProcmtCtrlType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pksaf)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |
| `KnbnExtProcmtCtrlTypeName` |  | |  | `cast(ddtext as vdm_pksaf_text preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_KnbnExtProcmtCtrlType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnExtProcmtCtrlType` | `I_KnbnExtProcmtCtrlType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBEPCTRLTYTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban External Procurement Control Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KnbnCtrlCycExtProcmtCtrlType'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KnbnExtProcmtCtrlTypeTxt
  as select from dd07t
  association [1..1] to I_KnbnExtProcmtCtrlType  as _KnbnExtProcmtCtrlType          on $projection.KnbnCtrlCycExtProcmtCtrlType = _KnbnExtProcmtCtrlType.KnbnCtrlCycExtProcmtCtrlType
  association [0..1] to I_Language               as _Language                       on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnExtProcmtCtrlType'
  key cast(substring(domvalue_l, 1, 1) as pksaf)                    as KnbnCtrlCycExtProcmtCtrlType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true         
      cast(ddtext as vdm_pksaf_text preserving type)                as KnbnExtProcmtCtrlTypeName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnExtProcmtCtrlType,
      _Language

}
where
      domname  = 'PKSAF'
  and as4local = 'A';
```
