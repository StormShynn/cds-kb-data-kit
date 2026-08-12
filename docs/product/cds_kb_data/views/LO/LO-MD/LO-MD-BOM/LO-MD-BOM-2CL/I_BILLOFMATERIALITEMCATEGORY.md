---
name: I_BILLOFMATERIALITEMCATEGORY
description: "Bill of MaterialITEMCATEGORY"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALITEMCATEGORY

**Bill of MaterialITEMCATEGORY**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialItemCategory` | ✓ | |  | `postp` |  |  |
| `FixedItemCategory` |  | |  | `case when ItemCategory.btpos = '' and ItemCategory.dkpos = 'X' then cast( 'D' as postp preserving type) when ItemCategory.btpos = '' and ItemCategory.klpos = 'X' then cast( 'K' as postp preserving type) when ItemCategory.matin <> '-' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = 'X' and ItemCategory.cs_nonplant = '' then cast( 'L' as postp preserving type) when ItemCategory.txpos = 'X' and ItemCategory.btpos = '' then cast('T' as postp preserving type) when ItemCategory.btpos = '' and ItemCategory.rtpos = 'X' and ItemCategory.matin = '+' and ItemCategory.kzbsf = 'X' and ItemCategory.mngvz = '+' then cast ('R' as postp preserving type) when ItemCategory.btpos = 'X' and ItemCategory.matin = '+' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' and ItemCategory.mngvz = '+' then cast ('I' as postp preserving type) when ItemCategory.matin = '.' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' and ItemCategory.mngvz = '+' and ItemCategory.itmcatserviceprocmtusagecode = 'X' then cast( 'Y' as postp preserving type) when ItemCategory.matin = '.' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' and ItemCategory.mngvz = '+' and ItemCategory.itemcatisusedforenhancedlimits = 'X' then cast( 'Z' as postp preserving type) when ItemCategory.matin = '.' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' and ItemCategory.cs_preliminary = 'X' then cast( 'P' as postp preserving type) when ItemCategory.matin = '.' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' then cast( 'N' as postp preserving type) when ItemCategory.matin = '+' and ItemCategory.rtpos = '' and ItemCategory.inpos = '' and ItemCategory.btpos = '' and ItemCategory.txpos = '' and ItemCategory.dkpos = '' and ItemCategory.kzbsf = '' and ItemCategory.cs_nonplant = 'X' then cast( 'S' as postp preserving type) end` |  |  |
| `BOMIsSubItemSupported` |  | |  | `kzups` |  |  |
| `_ItemCategoryT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemCategoryT` | `I_BomItemCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMITEMCATEGORY'
@ClientHandling.type : #INHERITED
@ClientHandling.algorithm : #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #UI_PROVIDER_PROJECTION_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill of Material Item Category'
@Search.searchable: true
@ObjectModel.representativeKey: 'BillOfMaterialItemCategory'
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled : true
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialItemCategory'
define view I_BillOfMaterialItemCategory
  as select from t418 as ItemCategory
  association [0..*] to I_BomItemCategoryText as _ItemCategoryT on ItemCategory.postp = _ItemCategoryT.BillOfMaterialItemCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: [ 'BillOfMaterialItemCategoryDesc' ]
  key ItemCategory.postp  as BillOfMaterialItemCategory,
      @Search.defaultSearchElement: true 
      @EndUserText.label: 'Item Category Description'
      //cast(_ItemCategoryT.BillOfMaterialItemCategoryDesc as pttxt preserving type ) as BillOfMaterialItemCategoryDesc,
      _ItemCategoryT[1: Language = $session.system_language].BillOfMaterialItemCategoryDesc,

      @UI.hidden: true
      case when ItemCategory.btpos = ''   and
                ItemCategory.dkpos = 'X' 
            then cast( 'D' as postp preserving type)
           when ItemCategory.btpos = ''   and
                ItemCategory.klpos = 'X' 
            then cast( 'K' as postp preserving type)
           when ItemCategory.matin <> '-'    and
                ItemCategory.rtpos = ''   and
                ItemCategory.inpos = ''  and
                ItemCategory.btpos = ''  and
                ItemCategory.txpos = ''   and
                ItemCategory.dkpos = ''   and                  
                ItemCategory.kzbsf = 'X'  and
                ItemCategory.cs_nonplant = ''
            then cast( 'L' as postp preserving type)
//           when ItemCategory.inpos = 'X' and
//               ItemCategory.matin = '+' and
//              ItemCategory.kzups <> 'X' 
//            then cast( 'M' as postp preserving type)
           when ItemCategory.txpos = 'X' and
                ItemCategory.btpos = '' 
            then cast('T' as postp preserving type)
           when ItemCategory.btpos = ''  and
                ItemCategory.rtpos = 'X' and
                ItemCategory.matin = '+' and
                ItemCategory.kzbsf = 'X' and
                ItemCategory.mngvz = '+'
            then cast ('R' as postp preserving type)
           when ItemCategory.btpos = 'X' and
                ItemCategory.matin = '+' and
                ItemCategory.rtpos = ''   and
                ItemCategory.inpos = ''  and
                ItemCategory.txpos = ''   and
                ItemCategory.dkpos = ''   and                  
                ItemCategory.kzbsf = ''  and
                ItemCategory.mngvz = '+' then cast ('I' as postp preserving type) 
           when ItemCategory.matin = '.'  and
                  ItemCategory.rtpos = ''   and
                  ItemCategory.inpos = ''   and
                  ItemCategory.btpos = ''   and                
                  ItemCategory.txpos = ''   and
                  ItemCategory.dkpos = ''   and
                  ItemCategory.kzbsf = ''   and
                  ItemCategory.mngvz = '+'  and
                  ItemCategory.itmcatserviceprocmtusagecode = 'X'
              then cast( 'Y' as postp preserving type) 
            when  ItemCategory.matin = '.'  and
                  ItemCategory.rtpos = ''   and
                  ItemCategory.inpos = ''   and
                  ItemCategory.btpos = ''   and                
                  ItemCategory.txpos = ''   and
                  ItemCategory.dkpos = ''   and
                  ItemCategory.kzbsf = ''   and
                  ItemCategory.mngvz = '+'  and
                  ItemCategory.itemcatisusedforenhancedlimits = 'X'
              then cast( 'Z' as postp preserving type)    
            when ItemCategory.matin = '.' and
                 ItemCategory.rtpos = ''   and
                 ItemCategory.inpos = ''   and
                 ItemCategory.btpos = ''   and                
                 ItemCategory.txpos = ''   and
                 ItemCategory.dkpos = ''   and
                 ItemCategory.kzbsf = ''   and
                 ItemCategory.cs_preliminary = 'X' 
              then cast( 'P' as postp preserving type)    
             when ItemCategory.matin = '.' and
                  ItemCategory.rtpos = ''   and
                  ItemCategory.inpos = ''   and
                  ItemCategory.btpos = ''   and                
                  ItemCategory.txpos = ''   and
                  ItemCategory.dkpos = ''   and
                  ItemCategory.kzbsf = ''   
              then cast( 'N' as postp preserving type)
                when ItemCategory.matin = '+' and
                  ItemCategory.rtpos = ''   and
                  ItemCategory.inpos = ''   and
                  ItemCategory.btpos = ''   and                
                  ItemCategory.txpos = ''   and
                  ItemCategory.dkpos = ''   and
                  ItemCategory.kzbsf = ''   and 
                  ItemCategory.cs_nonplant = 'X'
              then cast( 'S' as postp preserving type)
              
       end                as FixedItemCategory,
       ItemCategory.kzups as BOMIsSubItemSupported,
      _ItemCategoryT
}
```
