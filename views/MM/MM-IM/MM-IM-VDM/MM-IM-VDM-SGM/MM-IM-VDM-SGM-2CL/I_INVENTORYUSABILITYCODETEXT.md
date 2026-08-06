---
name: I_INVENTORYUSABILITYCODETEXT
description: Inventoryusabilitycodetext
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
  - inventory
  - text
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Inventory
---
# I_INVENTORYUSABILITYCODETEXT

**Inventoryusabilitycodetext**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InventoryUsabilityCode` | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as insmk )` |
| key `Language` | `cast(ddlanguage as spras preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `InventoryUsabilityCodeName` | `cast ( ddtext as pi_usability_code_text preserving type )` |
| `_InventoryUsabilityCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InventoryUsabilityCode` | `I_InventoryUsabilityCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Code to Derive Stock Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled:true
@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'InventoryUsabilityCode',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'InventoryUsabilityCodeText',
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S } }
@Search.searchable: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_InventoryUsabilityCodeText
  as select from dd07t
  
  association [0..1] to I_InventoryUsabilityCode as _InventoryUsabilityCode on $projection.InventoryUsabilityCode = _InventoryUsabilityCode.InventoryUsabilityCode
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language  
{
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as insmk ) as InventoryUsabilityCode,  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)        as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( ddtext as pi_usability_code_text preserving type ) as InventoryUsabilityCodeName,

      //Associations
      _InventoryUsabilityCode,
      _Language  
}
where domname  = 'INSMK'
  and as4local = 'A' and as4vers = '0000';
```
