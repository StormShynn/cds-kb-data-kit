---
name: I_KNBNINHPRODNCTRLTYPETXT
description: Knbninhprodnctrltypetxt
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
# I_KNBNINHPRODNCTRLTYPETXT

**Knbninhprodnctrltypetxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KnbnCtrlCycInhProdnCtrlType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pksar)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `KnbnInhProdnCtrlTypeName` |  | |  | `cast(ddtext as vdm_pksar_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KnbnInhProdnCtrlType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnInhProdnCtrlType` | `I_KnbnInhProdnCtrlType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBIHCTRLTYTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Inhouse Production Control Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KnbnCtrlCycInhProdnCtrlType'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KnbnInhProdnCtrlTypeTxt
  as select from dd07t
  association [1..1] to I_KnbnInhProdnCtrlType  as _KnbnInhProdnCtrlType on $projection.KnbnCtrlCycInhProdnCtrlType = _KnbnInhProdnCtrlType.KnbnCtrlCycInhProdnCtrlType
  association [0..1] to I_Language              as _Language             on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnInhProdnCtrlType'
  key cast(substring(domvalue_l, 1, 1) as pksar)                    as KnbnCtrlCycInhProdnCtrlType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true         
      cast(ddtext as vdm_pksar_text preserving type)                as KnbnInhProdnCtrlTypeName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnInhProdnCtrlType,
      _Language

}
where
      domname  = 'PKSAR'
  and as4local = 'A';
```
