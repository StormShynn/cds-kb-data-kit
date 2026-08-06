---
name: I_GOODSMOVEMENTREFDOCTYPE
description: Goods MovementREFDOCTYPE
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
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTREFDOCTYPE

**Goods MovementREFDOCTYPE**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GoodsMovementRefDocType` | `cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as kzbew )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GoodsMovementRefDocTypeText` | [0..*] |

## Source Code

```abap
@Analytics: { dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              technicalName: 'IGDSMVTREFDOC' } 
           
              
@EndUserText.label: 'Goods Mvt Reference Document Type'

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }
             
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'GoodsMovementRefDocType',
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
                sapObjectNodeType.name: 'GoodsMovementReferenceDocType' }

@Search.searchable

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_GoodsMovementRefDocType
  as select from dd07l 
    
  association [0..*] to I_GoodsMovementRefDocTypeText as _Text on $projection.GoodsMovementRefDocType = _Text.GoodsMovementRefDocType 
     
{
    @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 2 ) as abap.char( 2 ) ) as kzbew ) as GoodsMovementRefDocType,
     @Analytics.hidden: true
     @Consumption.hidden: true
     @Search.defaultSearchElement: true
     @Search.ranking: #HIGH
     @Search.fuzzinessThreshold: 0.8
     dd07l.domvalue_l as DomainValue,
    //Associations
     _Text
}
where domname = 'KZBEW' 
  and as4local = 'A';
```
