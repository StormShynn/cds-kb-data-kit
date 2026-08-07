---
name: I_MRPSAFETYSTOCKMETHODTEXT
description: Mrpsafetystockmethodtext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPSAFETYSTOCKMETHODTEXT

**Mrpsafetystockmethodtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `MRPSafetyStockMethod` | ✓ | |  | `cast( dd07t.domvalue_l as mrp_sstock_method )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `MRPSafetyStockMethodText` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | | ✓ | | |
| `_MRPSafetyStockMethod` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE] 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMRPSFTYSTKMETHT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                     #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY, 
                                     #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPSafetyStockMethod' 
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Safety Stock Method - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_MRPSafetyStockMethodText 
  as select from dd07t 
  association to parent I_MRPSafetyStockMethod as _MRPSafetyStockMethod
    on $projection.MRPSafetyStockMethod = _MRPSafetyStockMethod.MRPSafetyStockMethod
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language  
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_MRPSafetyStockMethod'
      @ObjectModel.text.element: ['MRPSafetyStockMethodText']
  key cast( dd07t.domvalue_l as mrp_sstock_method )     as MRPSafetyStockMethod,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as MRPSafetyStockMethodText,

      // Associations
      _MRPSafetyStockMethod,
      _Language    
}
where
      domname  = 'MRP_SSTOCK_METHOD'
  and as4local = 'A'
  and as4vers  = '0000';
```
