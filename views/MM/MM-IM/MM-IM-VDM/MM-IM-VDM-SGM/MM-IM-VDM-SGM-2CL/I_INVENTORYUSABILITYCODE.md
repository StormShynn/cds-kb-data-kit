---
name: I_INVENTORYUSABILITYCODE
description: "Inventoryusabilitycode"
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
  - inventory
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Inventory
---
# I_INVENTORYUSABILITYCODE

**Inventoryusabilitycode**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryUsabilityCode` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as insmk )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InventoryUsabilityCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Usability Code to Derive Stock Type'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL } 
@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'InventoryUsabilityCode',
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
                             sapObjectNodeType.name: 'InventoryUsabilityCode' }
@Search.searchable
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_InventoryUsabilityCode 
  as select from dd07l 
    
  association [0..*] to I_InventoryUsabilityCodeText as _Text on $projection.InventoryUsabilityCode = _Text.InventoryUsabilityCode 
     
{
     @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as insmk ) as InventoryUsabilityCode,
     @Analytics.hidden: true
     @Consumption.hidden: true
     @Search.defaultSearchElement: true
     @Search.ranking: #HIGH
     @Search.fuzzinessThreshold: 0.8
     dd07l.domvalue_l as DomainValue,

    //Associations
     _Text
}
where domname = 'INSMK' 
  and as4local = 'A' and as4vers = '0000';
```
