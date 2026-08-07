---
name: I_GOODSMOVEMENTCODETEXT
description: Goods MovementCODETEXT
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
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
# I_GOODSMOVEMENTCODETEXT

**Goods MovementCODETEXT**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GoodsMovementCode` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as gm_code)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |
| `GoodsMovementCodeName` |  | |  | `cast(ddtext as nsdm_gds_mvt_code_name preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_GoodsMovementCode` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GoodsMovementCode` | `I_GoodsMovementCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics: { technicalName: 'IGdsMvtCdTxt',
              dataExtraction.enabled:true }

@EndUserText.label: 'Goods Movement Code - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'GoodsMovementCode',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'GoodsMovementCodeText',
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S } }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_GoodsMovementCodeText 
  as select from dd07t

  association [0..1] to I_GoodsMovementCode        as _GoodsMovementCode on $projection.GoodsMovementCode = _GoodsMovementCode.GoodsMovementCode
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_GoodsMovementCode'
  key cast(substring(domvalue_l, 1, 2) as gm_code) as GoodsMovementCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)    as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as nsdm_gds_mvt_code_name preserving type) as GoodsMovementCodeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,

      //Associations
      _GoodsMovementCode,
      _Language

}
where domname  = 'GM_CODE'
  and as4local = 'A'
  and as4vers  = '0000';
```
