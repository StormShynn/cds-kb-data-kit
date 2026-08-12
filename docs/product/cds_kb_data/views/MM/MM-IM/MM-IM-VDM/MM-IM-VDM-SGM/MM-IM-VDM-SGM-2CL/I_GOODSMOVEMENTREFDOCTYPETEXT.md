---
name: I_GOODSMOVEMENTREFDOCTYPETEXT
description: "Goods MovementREFDOCTYPETEXT"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - text-view
  - text
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTREFDOCTYPETEXT

**Goods MovementREFDOCTYPETEXT**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GoodsMovementRefDocType` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as kzbew )` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `GoodsMovementRefDocTypeName` |  | |  | `cast(ddtext as vdm_lkngseq_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_GoodsMovementRefDocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GoodsMovementRefDocType` | `I_GoodsMovementRefDocType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled:true
@Analytics.technicalName: 'IGDSMVTREFDOCTXT'

@EndUserText.label: 'Goods Mvt Reference Document Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'GoodsMovementRefDocType',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'GoodsMvtReferenceDocTypeText',
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S } }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_GoodsMovementRefDocTypeText 
  as select from dd07t
  
  association [0..1] to I_GoodsMovementRefDocType  as _GoodsMovementRefDocType on $projection.GoodsMovementRefDocType = _GoodsMovementRefDocType.GoodsMovementRefDocType
  association [0..1] to I_Language                 as _Language                on $projection.Language = _Language.Language  

{
      @ObjectModel.foreignKey.association: '_GoodsMovementRefDocType'
  key cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as kzbew ) as GoodsMovementRefDocType,  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)        as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as vdm_lkngseq_text preserving type) as GoodsMovementRefDocTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,

      //Associations
      _GoodsMovementRefDocType,
      _Language  
}
where domname  = 'KZBEW'
  and as4local = 'A';
```
