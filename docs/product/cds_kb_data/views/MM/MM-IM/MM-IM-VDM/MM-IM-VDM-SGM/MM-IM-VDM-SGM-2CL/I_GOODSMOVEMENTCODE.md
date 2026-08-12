---
name: I_GOODSMOVEMENTCODE
description: "Goods MovementCODE"
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
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTCODE

**Goods MovementCODE**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GoodsMovementCode` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as gm_code)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GoodsMovementCodeText` | [0..*] |

## Source Code

```abap
@Analytics: { technicalName: 'IGdsMvtCd',
              dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName:#LOCAL }
              
@EndUserText.label: 'Goods Movement Code'

@Consumption.ranked: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'GoodsMovementCode',
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S },
                sapObjectNodeType.name: 'GoodsMovementCode' }

@Search.searchable: true

@VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_GoodsMovementCode 
  as select from dd07l

  association [0..*] to I_GoodsMovementCodeText    as _Text on $projection.GoodsMovementCode = _Text.GoodsMovementCode
  
{
     @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as gm_code) as GoodsMovementCode,
     @Analytics.hidden: true
     @Consumption.hidden: true
     @Search.defaultSearchElement: true
     @Search.ranking: #HIGH
     @Search.fuzzinessThreshold: 0.8
     dd07l.domvalue_l as DomainValue,

      //Associations
     _Text
             
}
where domname  = 'GM_CODE'
  and as4local = 'A'
  and as4vers  = '0000';
```
